import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useProducts from "./hooks/products";
import { useState } from "react";

function App() {

  const productsState = useProducts();
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <Outlet context={{ ...productsState, cartItems, setCartItems }} />
      <Footer />
    </>
  );
}

export default App;
