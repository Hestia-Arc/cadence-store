import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { Header } from "./Header";
import Products from "./products";

function Shop() {
  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar />
      <Header/>
      <Products/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;
