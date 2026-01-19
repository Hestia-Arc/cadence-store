import { CartSideBar } from "@components/cards";
import { useState } from "react";
import { motion } from "framer-motion";
import { cartSelector } from "@views/cart/cartSlice";
import { useAppSelector } from "../../store";

function SideCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useAppSelector(cartSelector);

  return (
    <div>
      {/* cart btn */}
      <div className="flex h-screen fixed top-0 right-0 items-center">
        {isOpen ? (
          ""
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="h-fit left-0 flex flex-col items-center gap-1 text-[10px] sm:text-[14px] font-semibold bg-green px-1 py-2 rounded-3xl sm:rounded-none sm:p-3"
          >
            <div className="h-5 w-5 sm:h-8 sm:w-8 flex items-center justify-center bg-white  rounded-full">
              {cart?.length}
            </div>

            {/* <Badge /> */}
            <span>C</span>
            <span>A</span>
            <span>R</span>
            <span>T</span>
          </button>
        )}
      </div>

      {/*  */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-0.5%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 43,
            damping: 12,
            delay: 0.4,
            duration: 0.8,
          }}
          className="flex fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] items-center z-800 "
        >
          <CartSideBar open={isOpen} close={() => setIsOpen(false)} />
        </motion.div>
      )}
    </div>
  );
}

export default SideCart;
