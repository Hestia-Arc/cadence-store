import { AboutBanner } from "./AboutBanner";
import { Values } from "./Values";
import Title from "./Title";
import Map from "./Map";

function ContactPage() {

  return (
    <div className=" bg-white text-gray-700">
      <div className="lg:h-[1630px] flex flex-col gap-12 px-4 sm:px-40 pb-20 pt-4 border">
        <Title />
        <AboutBanner />
        <Map />
      </div>
      <Values />
    </div>
  );
}

export default ContactPage;
