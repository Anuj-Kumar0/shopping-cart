import styles from "./Home.module.css";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to My Store!</h1>
            <p className={styles.subtitle}>
                Explore our amazing products and add them to your cart.
            </p>

            <div className={styles.actions}>
                <Link to="/shop" className={styles.button}>Go to Shop</Link>
            </div>
        </div>
    );
};
