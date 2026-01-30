import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  console.log("APP RENDERED");

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
