import { Link, NavLink } from "react-router";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>
                    ShoppiBuy
                </Link>

                <div className={styles.links}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        Cart
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
