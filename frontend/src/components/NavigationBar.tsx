import avatarIcon from "../assets/Icons/avatar-dark.png";
import cartIcon from "../assets/Icons/shopping bag.png";
import searchIcon from "../assets/Icons/search.png";
import { Badge } from "./Badge";
import { Link, NavLink } from "react-router-dom";
import NotificationBar from "./NotificationBar";
import { FC, useEffect, useState } from "react";
import { CartSideBar } from "./cards/CartSideBar";
// import Icon from "../assets/Icons/arrow-right.png";

interface IProp {
  open: () => void;
  cartBar: boolean;
}
const menuClass = "text-[14px] font-medium";

const NavigationBar: FC<IProp> = ({ open, cartBar }) => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 ${
        scrollActive ? "shadow-md" : "shadow-none"
      }`}
    >
      <NotificationBar />

      <nav className="h-[60px] flex justify-between items-center  px-8 sm:px-40 bg-white overflow-hidden">
        <div className="text-[24px] font-bold text-gray-500 font-poppins ">
          leCadence<span className="text-gray-400">.</span>
        </div>

        {/* cart sidebar */}
        <div className="hidden sm:flex h-[450px] absolute top-[24rem] sm:top-[8rem] right-[35%] sm:right-0 items-center">
          <button
            onClick={() => open()}
            className="h-fit left-0 flex sm:flex-col items-center gap-1 text-h7 bg-green px-5 py-2 rounded-3xl sm:rounded-none sm:p-4"
          >
            <Badge />
            <span>C</span>
            <span>A</span>
            <span>R</span>
            <span>T</span>
          </button>

          {cartBar && <CartSideBar />}
        </div>

        {/* menus */}
        <div className="w-[340px] hidden sm:flex justify-between items-center">
          <NavLink to="/">
            <span className={menuClass}>Home</span>
          </NavLink>
          <NavLink to="/shop">
            <span className={menuClass}>Shop</span>
          </NavLink>
          <NavLink to="/product">
            <span className={menuClass}>Product</span>
          </NavLink>
          <NavLink to="/blog">
            <span className={menuClass}>Blog</span>
          </NavLink>
          <NavLink to="/contact">
            <span className={menuClass}>Contact Us</span>
          </NavLink>
        </div>

        {/* icons */}
        <div className="flex items-center gap-3">
          <img src={searchIcon} alt="icon" />

          {/* =========== ACCOUNT */}
          <Link to="/account">
            <img src={avatarIcon} alt="icon" className="hover:bg-gray-300 hover:rounded-lg" />
          </Link>

          {/* ========== CART */}
          <Link to="/cart">
            <div className="flex items-center gap-[2px] ">
              <img
                src={cartIcon}
                alt="icon"
                className="hover:shadow-sm hover:bg-gray-300 hover:rounded-lg"
              />
              <Badge />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
