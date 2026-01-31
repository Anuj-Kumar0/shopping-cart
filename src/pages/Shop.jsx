import useProducts from "../hooks/products";
import styles from "./Shop.module.css";

export default function Shop() {
    const { products, loading, error } = useProducts();

    if (loading)
        return (
            <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>
                <p>Loading products…</p>
            </div>
        );
    if (error) return <p className={styles.status}>{error}</p>;

    return (
        <div className={styles.cards}>
            {products.map(({ id, title, price, image }) => (
                <div className={styles.card} key={id}>
                    <div className={styles.imageWrapper}>
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p className={styles.price}>${price}</p>
                    <button className={styles.button}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}
