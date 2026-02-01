import styles from "./Footer.module.css";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <h3 className={styles.logo}>ShoppiBuy</h3>
                    <p className={styles.tagline}>
                        Shop smarter. Buy better.
                    </p>
                </div>

                <nav className={styles.links}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/shop" className={styles.link}>Shop</Link>
                    <Link to="/cart" className={styles.link}>Cart</Link>
                </nav>
            </div>

            <div className={styles.bottom}>
                <p>© {new Date().getFullYear()} ShoppiBuy. All rights reserved.</p>
            </div>
        </footer>
    );
}
