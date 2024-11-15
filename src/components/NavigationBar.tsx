import avatarIcon from "../assets/Icons/avatar-dark.png";
import cartIcon from "../assets/Icons/shopping bag.png";
import searchIcon from "../assets/Icons/search.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import NotificationBar from "./NotificationBar";
import { FC, useEffect, useState } from "react";
import { Badge } from "./Badge";

interface IProp {
  open: () => void;
  cartBar: boolean;
}
const menuClass = "text-[14px] font-medium";

const NavigationBar: FC<IProp> = () => {
  const location = useLocation()
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

        {/* menus */}
        <div className="w-[300px] hidden sm:flex justify-between items-center">
          <NavLink to="/" className={` ${location.pathname === "/" ? "border-b-2 border-gray-400" : ""}`}>
            <span className={menuClass}>Home</span>
          </NavLink>
          <NavLink to="/shop" className={` ${location.pathname === "/shop" ? "border-b-2 border-gray-400" : ""}`}>
            <span className={menuClass}>Shop</span>
          </NavLink>
          {/* <NavLink to="/product">
            <span className={menuClass}>Product</span>
          </NavLink> */}
          <NavLink to="/blog" className={` ${location.pathname === "/blog" ? "border-b-2 border-gray-400" : ""}`}>
            <span className={menuClass}>Blog</span>
          </NavLink>
          <NavLink to="/contact" className={` ${location.pathname === "/contact" ? "border-b-2 border-gray-400" : ""}`}>
            <span className={menuClass}>Contact Us</span>
          </NavLink>
        </div>

        {/* icons */}
        <div className="flex items-center gap-3">
          <img src={searchIcon} alt="icon" />

          {/* =========== ACCOUNT */}
          {/* <Link to="/account"> */}
          <Link to="/auth">
            <img
              src={avatarIcon}
              alt="icon"
              className="hover:bg-gray-300 hover:rounded-lg"
            />
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
