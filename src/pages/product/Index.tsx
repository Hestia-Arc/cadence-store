import NavigationBar from "../../components/NavigationBar";
import { ProductLoop } from "./ProductLoop";
import { ProductCarrousel } from "../../components/ProductCarrousel";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import { useState } from "react";
function Product() {

  const [isCartBarOpen, setIsCartBarOpen] = useState(false)
  
  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen)
  }

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar  open={toggleCartBar} cartBar={isCartBarOpen}  />
      <ProductLoop/>
      <ProductCarrousel/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Product;
