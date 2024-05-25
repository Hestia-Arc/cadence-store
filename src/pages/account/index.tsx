import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import AccountContent from "./AccountContent";
import OrderContent from "./OrderContent";
import WishContent from "./WishContent";
import AddressContent from "./AddressContent";

const sideActive =
  "focus:border-b-2 focus:border-gray-700 focus:text-gray-700 focus:font-bold";
const sidelistStyle = `h-[42px] w-full flex justify-start py-2 text-gray-400 text-body2Semi hover:bg-gray-300 ${sideActive} `;

function AccountPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const [id, setId] = useState(1);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
      <div className="h-fit w-full px-40 pb-20">
        {/* ============== title */}
        <div className=" h-[218px] flex justify-center items-center">
          <h1 className=" text-h3">My Account</h1>
        </div>

        {/* ==================== main */}
        <div className="w-full min-h-[498px] flex gap-2">
          {/* ---------------- side */}
          <div className="h-[498px] min-w-[262px] max-w-[262px] flex flex-col gap-10 bg-gray-200 rounded-lg py-10 px-4 ">
            {/* ------- avatar */}
            <div className="h-[120px] w-full flex flex-col items-center gap-[6px]">
              <div className="h-[82px] w-[82px] rounded-[50px] flex items-center justify-center bg-green">
                img
              </div>
              <div className=" capitalize text-body1Semi">Sofia havertz</div>
            </div>

            {/* -------- navs */}
            <div className="h-[258px] w-full flex flex-col items-start gap-3">
              <button className={sidelistStyle} onClick={() => setId(1)}>
                Account
              </button>
              <button className={sidelistStyle} onClick={() => setId(2)}>
                Address
              </button>
              <button className={sidelistStyle} onClick={() => setId(3)}>
                Orders
              </button>
              <button className={sidelistStyle} onClick={() => setId(4)}>
                Wishlist
              </button>
              <button className={sidelistStyle}>Log Out</button>
            </div>
          </div>

          {/* ---------------- contents */}
          <div className=" w-[851px] px-[72px] ">
            {id === 1 && <AccountContent />}
            {id === 2 && <AddressContent />}
            {id === 3 && <OrderContent />}
            {id === 4 && <WishContent />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountPage;
