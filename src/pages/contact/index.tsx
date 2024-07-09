import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import { AboutBanner } from "./AboutBanner";
import { Values } from "./Values";
import Title from "./Title";
import Map from "./Map";

function ContactPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
      <div className="h-[1630px] flex flex-col gap-12 px-40 pb-20 pt-4 border">
        <Title />
        <AboutBanner />
        <Map />
      </div>
      <Values />
      <Footer />
    </div>
  );
}

export default ContactPage;
