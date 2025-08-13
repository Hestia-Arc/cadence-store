import { Outlet } from "react-router-dom";
import Header from "@components/header";
import Footer from "@components/footer";
import { Newsletter } from "@components/Newsletter";
import SideCart from "@views/sidebar-cart/side-cart";
import FlyOut from "@views/flyout/fly-out";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />

      <SideCart />
      <FlyOut />
    </>
  );
}

export default Layout;
