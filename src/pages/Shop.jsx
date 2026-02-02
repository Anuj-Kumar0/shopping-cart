import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import { useState } from "react";

export default function Shop() {
    const { products, loading, error, setCartItems } = useOutletContext();
    const [qty, setQty] = useState({});

    if (loading)
        return (
            <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>
                <p>Loading products…</p>
            </div>
        );
    if (error) return <p className={styles.status}>{error}</p>;

    const handleAddToCart = (product) => {
        const quantity = qty[product.id] || 1;

        setCartItems((prev) => {
            const existingItem = prev.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                // To restrict duplicate items
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            // Add new item
            return [
                ...prev,
                { ...product, quantity },
            ];
        });
    };


    return (
        <div className={styles.cards}>
            {products.map(({ id, title, price, image }) => (
                <div className={styles.card} key={id}>
                    <div className={styles.imageWrapper}>
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p className={styles.price}>${price}</p>
                    <div className={styles.qty}>
                        <button
                            onClick={() =>
                                setQty({
                                    ...qty,
                                    [id]: Math.max(1, (qty[id]) - 1)
                                })
                            }
                        >
                            -
                        </button>

                        <input
                            type="number"
                            value={qty[id] || 1}
                            onChange={(e) =>
                                setQty({
                                    ...qty,
                                    [id]: Math.max(1, Number(e.target.value)),
                                })
                            }
                        />

                        <button
                            onClick={() =>
                                setQty({
                                    ...qty,
                                    [id]: (qty[id] || 1) + 1,
                                })
                            }
                        >
                            +
                        </button>
                    </div>

                    <button
                        className={styles.button}
                        onClick={() =>
                            handleAddToCart({ id, title, price, image })
                        }
                    >
                        Add to cart
                    </button>

                </div>
            ))}
        </div>
    );
}
