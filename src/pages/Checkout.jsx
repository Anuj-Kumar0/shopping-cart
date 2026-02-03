import styles from "./Checkout.module.css";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from 'react-router';

export default function Checkout() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <CheckCircle2 size={64} className={styles.icon} />

                <h1>Thanks for checking out the project!</h1>

                <p>
                    The payment and checkout system isn’t implemented yet —
                    this is just a demo to showcase the UI and functionality.
                </p>

                <p className={styles.note}>
                    Full checkout experience coming in the future.
                </p>
                <p><button
                    className={styles.home}
                    onClick={() => window.location.href = "/"}
                >
                    Home
                </button></p>
            </div>
        </div>
    );
}
