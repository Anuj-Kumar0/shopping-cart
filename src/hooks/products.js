import { useState, useEffect } from "react";

const api = "https://fakestoreapi.com/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const productDetails = await response.json();
      setProducts(productDetails);
      console.log("Api called");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading };
}
