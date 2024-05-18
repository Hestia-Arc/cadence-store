import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";

function AccountPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false)
  
  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen)
  }

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar  open={toggleCartBar} cartBar={isCartBarOpen}  />
      <h2>account</h2>
      <Footer />
    </div>
  );
}

export default AccountPage;
