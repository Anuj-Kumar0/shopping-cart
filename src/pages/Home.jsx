import styles from "./Home.module.css";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Shop Smarter.<br />Buy Better.
                    </h1>

                    <p className={styles.subtitle}>
                        A modern shopping experience built for speed, style,
                        and simplicity. Discover products you’ll love and
                        manage your cart effortlessly.
                    </p>

                    <Link to="/shop" className={styles.button}>
                        Start Shopping
                    </Link>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                    </div>
                </div>
            </div>
        </div>
    );
}
