import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useEffect, useState } from "react";
import AccountContent from "./AccountContent";
import OrderContent from "./OrderContent";
import WishContent from "./WishContent";
import AddressContent from "./AddressContent";
import { useAppDispatch, useAppSelector } from "../../store";
import { logOutUser, userSelector } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const sideActive =
  "h-[42px] w-full flex justify-start py-2 text-body2Semi border-b-2 border-gray-700 text-gray-700 font-bold";
const sidelistStyle = `h-[42px] w-full flex justify-start py-2 text-gray-400 text-body2Semi hover:bg-gray-300 `;

function AccountPage() {
  const userData = useAppSelector(userSelector)
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [id, setId] = useState(1);
  const [user, setUser] = useState({
    username: "",
    email: " ",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",  
  })

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  setUser({
    username: userData?.username,
    email: userData?.email,
    address: userData?.checkOutDetail.address,
    city: userData?.checkOutDetail.city,
    state: userData?.checkOutDetail.state,
    zip: userData?.checkOutDetail.zip,
    country: userData?.checkOutDetail.country,
    phone: userData?.checkOutDetail.phone


  })

  }, []);

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
              <div className=" capitalize text-body1Semi">{user?.username}</div>
            </div>

            {/* -------- navs */}
            <div className="h-[258px] w-full flex flex-col items-start gap-3">
              <button className={id === 1 ? sideActive : sidelistStyle} onClick={() => setId(1)}>
                Account
              </button>
              <button className={id === 2 ? sideActive : sidelistStyle} onClick={() => setId(2)}>
                Address
              </button>
              <button className={id === 3 ? sideActive : sidelistStyle} onClick={() => setId(3)}>
                Orders
              </button>
              <button className={id === 4 ? sideActive : sidelistStyle} onClick={() => setId(4)}>
                Wishlist
              </button>
              <button className={sidelistStyle} onClick={() => { 
                dispatch(logOutUser())
                navigate("/auth?switchAuth=signin")
              }}>Log Out</button>
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
