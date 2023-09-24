import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
const Route = () => {
  // const globalContext = useContext(null);
    return (
      <>
      <Navbar></Navbar>
<Outlet></Outlet>
      <Footer></Footer>
      </>
    );
}

export default Route;
