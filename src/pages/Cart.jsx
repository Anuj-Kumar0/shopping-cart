import { useOutletContext, useNavigate } from "react-router";
import styles from "./Cart.module.css";
import { BaggageClaim } from 'lucide-react';

export default function Cart() {
    const { cartItems, setCartItems } = useOutletContext();
    const navigate = useNavigate();

    const updateQty = (id, changeQty) => {
        setCartItems((prev) =>
            prev.map((item) => {
                return {
                    ...item,
                    quantity: Math.max(1, item.quantity + changeQty)
                };
            })
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className={styles.empty}>
                <h2>Your cart is empty! <BaggageClaim size={32} /></h2>
                <p>Add something marvelous.</p>
            </div>
        );
    }

    return (
        <div className={styles.cart}>
            <h2 className={styles.title}>Your Cart</h2>

            <div className={styles.items}>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.image}>
                            <img src={item.image} alt={item.title} />
                        </div>

                        <div className={styles.info}>
                            <h3>{item.title}</h3>
                            <p className={styles.price}>${item.price}</p>

                            <div className={styles.qty}>
                                <button onClick={() => updateQty(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQty(item.id, 1)}>+</button>
                            </div>
                        </div>

                        <button
                            className={styles.remove}
                            onClick={() => removeItem(item.id)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.summary}>
                <span>Total</span>
                <strong>${total}</strong>
            </div>


            <button
                className={styles.checkout}
                onClick={() => navigate("/checkout")}
            >
                Checkout
            </button>
        </div>
    );
}
