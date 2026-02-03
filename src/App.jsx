import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useProducts from "./hooks/products";
import { useState, useEffect } from "react";

function App() {

  const productsState = useProducts();
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const count = cartItems.length;
    setTotalItems(count);
  }, [cartItems]);

  return (
    <>
      <Navbar totalItems={totalItems} />
      <Outlet context={{ ...productsState, cartItems, setCartItems, }} />
      <Footer />
    </>
  );
}

export default App;
