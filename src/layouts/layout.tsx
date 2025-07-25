import { Outlet } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import Header from "@components/header";
import Footer from "@components/footer";

function Layout() {
  return (
    <>
      <Header open={() => {}} cartBar={false} />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Layout;
