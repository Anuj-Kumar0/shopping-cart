import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Page not found</h2>
            <p className={styles.text}>
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link to="/" className={styles.homeLink}>
                Go back home
            </Link>
        </div>
    );
};

export default ErrorPage;
