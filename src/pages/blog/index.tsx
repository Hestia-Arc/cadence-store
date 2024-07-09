import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import { Header } from "./Header";
import Contents from "./Contents";

function BlogPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
      <div className=" px-40">
      <Header />
      <Contents/>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default BlogPage;
