import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";

function BlogPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false)
  
  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen)
  }

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar  open={toggleCartBar} cartBar={isCartBarOpen}  />
      <h2>blog blog</h2>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default BlogPage;
