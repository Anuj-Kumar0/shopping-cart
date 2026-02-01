import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useProducts from "./hooks/products";

function App() {

  const productsState = useProducts();

  return (
    <>
      <Navbar />
      <Outlet context={productsState} />
      <Footer />
    </>
  );
}

export default App;
