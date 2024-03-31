import NotificationBar from "../../components/NotificationBar";
import NavigationBar from "../../components/NavigationBar";
import { ProductLoop } from "./ProductLoop";
import { ProductCarrousel } from "../../components/ProductCarrousel";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
function Product() {
  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar />
      <ProductLoop/>
      <ProductCarrousel/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Product;
