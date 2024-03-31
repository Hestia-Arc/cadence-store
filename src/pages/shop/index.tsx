import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { Header } from "./Header";
import Products from "./products";
import { useState } from "react";

function Shop() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false)
  
  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen)
  }

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar  open={toggleCartBar} cartBar={isCartBarOpen}  />
      <Header/>
      <Products/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;
