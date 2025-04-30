import { AnimatePresence, motion } from "framer-motion";
import removeIcon from "../assets/Icons/close.png";
import {  ButtonPrimary } from "./Elements";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFlyMenu } from "../contexts/FlyMenuContext";

interface Prop {
  open?: boolean;
}

const FlyMenu: React.FC<Prop> = () => {
  // @ts-ignore
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const { closeFlyMenu: close, } = useFlyMenu();


  const handleSubmit = () => {
    console.log(query);
  };
  
const handleSignIn = () => {
  navigate('/auth')
  close()

}

  return (
    <AnimatePresence>
      <motion.div
        // whileHover={{scale: [1, 2, 1]}}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: "0", position: "fixed" }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 43, damping: 12, delay: 0.6 }}
        className="h-[100vh] w-[343px] fixed top-0 left-0 flex flex-col justify-between bg-[#fff] p-6 border shadow-md z-[9999] "
      >
        {/* ===========  */}
        <div className="w-full h-[310px] flex flex-col gap-4">
          {/* logo/close */}
          <div className="h-[24px] flex justify-between items-center">
            <h6 className=" text-h7 font-bold">leCadence. </h6>
            <button onClick={close} className="hover:bg-gray-300 p-1 hover:rounded-full hover:shadow">
              <img
                src={removeIcon}
                alt="icon"
                className="h-[22px] w-[22px]"
                onClick={close}
              />
            </button>
          </div>

          {/* search */}
          <form onSubmit={() => handleSubmit()} className="h-[46px] flex items-center gap-2 rounded border border-gray-400 p-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L21 21M20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20C15.7467 20 20 15.7467 20 10.5Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className=" outline-none text-[14px] flex-1"
            />
          </form>

          {/* nav list */}
          <div className={`h-[208px] flex flex-col gap-4   `}>
            {links?.map((item, i) => {
              return (
                <Link
                  to={item.path}
                  onClick={close}
                  key={i}
                  className="h-[40px] pb-1  border-b-[1px] border-gray-300 active:text-green"
                >
                  {item.pathName}
                </Link>
              );
            })}
          </div>
        </div>

        {/* cart/wish/btn/socials */}
        <div className="h-[210px] flex flex-col justify-between ">
          <div className="h-[95px]  flex flex-col gap-2">
            {/* 1 */}
            <div className="h-[40px] relative pb-2 border-b-[1px] border-gray-300">
              <button onClick={() => {
                navigate("/cart")
                close()
                }}  className=" active:text-green">Cart</button>
              <div className=" absolute top-1 right-1 flex items-center gap-1 h-[20px] ">
                <div className="h-5 w-5 ">
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                      stroke="#141718"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
                      stroke="#141718"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="h-5 w-5 rounded-full text-[10px] bg-primary-800 flex items-center justify-center text-white ">
                  2
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="h-[40px] relative pb-2 border-b-[1px] border-gray-300">
              <button onClick={() => {navigate("/account?tab=wishlist")
                close()
              }} className=" active:text-green">Wishlist</button>
              <div className=" absolute top-1 right-1 flex items-center gap-1 h-[20px] ">
                <div className="h-5 w-5 ">
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.6924 4.58373C11.3055 4.95505 10.6945 4.95505 10.3076 4.58373L9.6152 3.91927C8.80477 3.14154 7.70994 2.66667 6.5 2.66667C4.01472 2.66667 2 4.68139 2 7.16667C2 9.5493 3.28979 11.5167 5.15176 13.1332C7.01532 14.7511 9.2434 15.8241 10.5746 16.3717C10.853 16.4862 11.147 16.4862 11.4254 16.3717C12.7566 15.8241 14.9847 14.7511 16.8482 13.1332C18.7102 11.5167 20 9.54929 20 7.16667C20 4.68139 17.9853 2.66667 15.5 2.66667C14.2901 2.66667 13.1952 3.14154 12.3848 3.91927L11.6924 4.58373ZM11 2.47624C9.83211 1.35548 8.24649 0.666672 6.5 0.666672C2.91015 0.666672 0 3.57682 0 7.16667C0 13.5349 6.97034 17.0517 9.81379 18.2214C10.5796 18.5364 11.4204 18.5364 12.1862 18.2214C15.0297 17.0517 22 13.5349 22 7.16667C22 3.57682 19.0899 0.666672 15.5 0.666672C13.7535 0.666672 12.1679 1.35548 11 2.47624Z"
                      fill="#141718"
                    />
                  </svg>
                </div>
                <div className="h-5 w-5 rounded-full text-[10px] bg-primary-800 flex items-center justify-center text-white ">
                  2
                </div>
              </div>
            </div>
          </div>

          <ButtonPrimary text="Sign In" onClick={() => handleSignIn()} />
          {/* social */}
          <div className="h-[24px] flex items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="4"
                stroke="#141718"
                stroke-width="1.5"
              />
              <circle cx="18" cy="6" r="1" fill="#141718" />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#141718"
                stroke-width="1.5"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#141718"
                stroke-width="1.5"
              />
              <path
                d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FlyMenu;

const links = [
  {
    pathName: "Home",
    path: "/",
  },
  {
    pathName: "Shop",
    path: "/shop",
  },
  {
    pathName: "Blog",
    path: "/blog",
  },
  {
    pathName: "Contact Us",
    path: "/contact",
  },
];
