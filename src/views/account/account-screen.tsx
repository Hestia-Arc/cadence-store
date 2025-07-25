import { useEffect, useState } from "react";
import AccountContent from "./Account";
import OrderContent from "./Order";
import WishContent from "./WishList";
import AddressContent from "./Address";
import { useAppDispatch, useAppSelector } from "../../store";
import { logOutUser, userSelector } from "../user/userSlice";
import { useNavigate } from "react-router-dom";

const sideActive =
  "h-[42px] w-full flex justify-start py-2 text-body2Semi border-b-2 border-gray-700 text-gray-700 font-bold";
const sidelistStyle = `h-[42px] w-full flex justify-start py-2 text-gray-400 text-body2Semi hover:bg-gray-300 `;

function AccountPage() {
  const userData = useAppSelector(userSelector);
  // const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selected, setSelected] = useState({
    tag: "Account",
  });
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
  });

  // const toggleCartBar = () => {
  //   setIsCartBarOpen(!isCartBarOpen);
  // };

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
      phone: userData?.checkOutDetail.phone,
    });
  }, []);

  return (
    <div className=" bg-white text-gray-700">
      <div className="h-fit w-full px-4 sm:px-40 pb-20">
        {/* ============== title */}
        <div className=" h-[164px] sm:h-[218px] flex justify-center items-center">
          <h1 className=" text-h5 md:text-h3">My Account</h1>
        </div>

        {/* ==================== main */}
        <div className="w-full min-h-[498px] flex flex-col sm:flex-row gap-8 sm:gap-2">
          {/* ---------------- side */}
          <div className="h-[288px] sm:h-[498px] sm:min-w-[262px] sm:max-w-[262px] flex flex-col gap-10 bg-gray-200 rounded-lg py-10 px-4 ">
            {/* ------- avatar */}
            <div className="h-[120px] w-full flex flex-col items-center gap-[6px]">
              <div className="h-[82px] w-[82px] rounded-[50px] flex items-center justify-center bg-green">
                
              </div>
              <div className=" capitalize text-body1Semi">{user?.username}</div>
            </div>

            {/* -------- navs */}
            <div className="h-[258px] w-full hidden sm:flex flex-col items-start gap-3">
              <button
                className={id === 1 ? sideActive : sidelistStyle}
                onClick={() => setId(1)}
              >
                Account
              </button>
              <button
                className={id === 2 ? sideActive : sidelistStyle}
                onClick={() => setId(2)}
              >
                Address
              </button>
              <button
                className={id === 3 ? sideActive : sidelistStyle}
                onClick={() => setId(3)}
              >
                Orders
              </button>
              <button
                className={id === 4 ? sideActive : sidelistStyle}
                onClick={() => setId(4)}
              >
                Wishlist
              </button>
              <button
                className={sidelistStyle}
                onClick={() => {
                  dispatch(logOutUser());
                  navigate("/auth?switchAuth=signin");
                }}
              >
                Log Out
              </button>
            </div>

            {/* nav mobile */}
            <div className=" h-[48px] w-full lg:hidden relative">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className=" w-full border border-gray-400 bg-gray-100 p-2 pl-4 rounded-lg flex justify-between items-center"
              >
                <div className=" font-semibold">{selected.tag}</div>

                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.70711 0.792893C8.31658 0.402369 7.68342 0.402369 7.29289 0.792893L4.5 3.58579L1.70711 0.792893C1.31658 0.402369 0.683418 0.402369 0.292894 0.792893C-0.0976312 1.18342 -0.0976313 1.81658 0.292894 2.20711L3.79289 5.70711C4.18342 6.09763 4.81658 6.09763 5.20711 5.70711L8.70711 2.20711C9.09763 1.81658 9.09763 1.18342 8.70711 0.792893Z"
                    fill="#6C7275"
                  />
                </svg>
              </button>

              {isNavOpen && (
                <div className="absolute top-full left-0 mt-2 p-1 w-full bg-white shadow-lg rounded-lg">
                  {navList.map((item, i) => (
                    <div
                      key={i}
                      className="p-2 rounded hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelected(item);
                        setId(item.id);
                        setIsNavOpen(false);
                      }}
                    >
                      {item.tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ---------------- contents */}
          <div className=" sm:w-[851px] sm:px-[72px] ">
            {id === 1 && <AccountContent />}
            {id === 2 && <AddressContent />}
            {id === 3 && <OrderContent />}
            {id === 4 && <WishContent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

const navList = [
  { tag: "Account", id: 1 },
  { tag: "Address" , id: 2 },
  { tag: "Orders", id: 3  },
  { tag: "Wishlist" , id: 4 },
  { tag: "Log Out" , id: 5}
];
