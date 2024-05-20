import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import AccountContent from "./AccountContent";
import OrderContent from "./OrderContent";
import WishContent from "./WishContent";


const sidelistStyle = "h-[42px] w-full flex justify-start py-2 text-gray-400 text-body2Semi hover:bg-gray-300 rounded ";

function AccountPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const [id, setId] = useState(1);


  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
      <div className="h-[1126px] w-full px-40 pb-20">
        {/* ============== title */}
        <div className=" h-[218px] flex justify-center items-center">
          <h1 className=" text-h3">My Account</h1>
        </div>

        {/* ==================== main */}
        <div className="w-full h-[828px] flex gap-2">
          {/* ---------------- side */}
          <div className="h-[498px] w-[262px] flex flex-col gap-10 bg-gray-200 rounded-lg py-10 px-4 ">

            {/* ------- avatar */}
            <div className="h-[120px] w-full flex flex-col items-center gap-[6px]">
              <div className="h-[82px] w-[82px] rounded-[50px] flex items-center justify-center bg-green">img</div>
              <div className=" capitalize text-body1Semi">Sofia havertz</div>
            </div>

            {/* -------- navs */}
            <div className="h-[258px] w-full flex flex-col items-start gap-3">
              <div className={`${sidelistStyle} border-b-2 border-gray-700 text-gray-700 font-bold rounded-none hover:bg-gray-200`}>Account</div>
              <button className={sidelistStyle} onClick={() => setId(1)}>Address</button>
              <button className={sidelistStyle} onClick={() => setId(2)}>Orders</button>
              <button className={sidelistStyle} onClick={() => setId(3)}>Wishlist</button>
              <button className={sidelistStyle} >Log Out</button>

            </div>
          </div>

          {/* ---------------- contents */}
          <div className="h-full w-full bg-gray-300 ">
           {id === 1 && <AccountContent/>}
           {id === 2 && <OrderContent/>}
           {id === 3 && <WishContent/>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountPage;
