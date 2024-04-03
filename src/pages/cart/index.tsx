import { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import { Footer } from "../../components/Footer";
import { CartHeader } from "./CartHeader";
import { CartDisplay } from "./CartDisplay";

function CartPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div>
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />

      {/* cart */}
      <div className=" h-[1097px] px-40 py-20 bg-gray-100">
        <CartHeader />
        <CartDisplay />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default CartPage;
