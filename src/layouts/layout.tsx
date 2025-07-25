import { Outlet } from "react-router-dom";
import Header from "@components/header";
import Footer from "@components/footer";
import { Newsletter } from "@components/Newsletter";

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
