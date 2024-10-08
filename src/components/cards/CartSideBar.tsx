import { AnimatePresence, motion } from "framer-motion";
import { ButtonDarkPlain, ButtonPrimary } from "../Elements";
import removeIcon from "../../assets/Icons/close.png";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { cartSelector } from "../../features/cart/cartSlice";

// import { useCartStore } from "../../features";
interface Prop {
  open?: boolean;
  close: () => void;
}

export const CartSideBar: React.FC<Prop> = ({ close }) => {
  const navigate = useNavigate();
  const { cart } = useAppSelector(cartSelector);


  return (
    <AnimatePresence>
      <motion.div
        // whileHover={{scale: [1, 2, 1]}}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0", position: "fixed" }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 43, damping: 12, delay: 0.6 }}
        className="h-[100vh] w-[413px] fixed top-0 right-0 flex flex-col justify-between  bg-[#fff] p-6 border shadow-md "
      >
        {/* =========== summary */}
        <div className="w-[365px] h-[370px]">
          <div className="flex justify-between items-center">
            <h6 className=" text-h6">Cart</h6>

            <img
              src={removeIcon}
              alt="icon"
              className="h-[25px] w-[25px]"
              onClick={close}
            />
          </div>

          {/*  */}
          <div className="h-[320px] flex flex-col gap-[10px] mt-3 overflow-y-auto">
            {/* {Array(2)
            .fill(9)
            ?.map((_, i) => ( */}
            {cart?.map((item) => (
              <div
                key={item.id}
                className="w-full h-[144px] flex py-3 border-solid border-b-2 "
              >
                {/* product/remove btn  */}
                <div className=" w-1/2 flex gap-4">
                  <img
                    // src={Pdt1}
                    src={item?.image}
                    alt="product"
                    className=" h-24 w-20 object-cover"
                  />

                  <div className="flex flex-col gap-2">
                    <span className=" text-capS1 font-bold">{item.productName}</span>
                    <span className=" text-capR2 text-gray-400 font-light">
                      Color: {item.color.map(itemColor => itemColor)}
                    </span>
                    <div className=" w-[72px] h-6 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
                      <span>-</span>
                      <span className=" text-[12px]">2</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>

                {/* price/stepper/subtotal */}
                <div className="w-1/2 flex flex-col items-end gap-2">
                  {/* subtotal */}
                  <span className="  text-body2Semi font-bold">${item.price}</span>
                  <span className=" inline-flex items-center text-capR2 text-gray-400 font-bold">
                    <img
                      src={removeIcon}
                      alt="icon"
                      className="h-[18px] w-[18px]"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =============== totals */}
        <div className="w-[365px] h-[180px] border border-top-2 border-t-gray-400">
          {/* sub-total */}
          <div className=" h-[45px] py-2 flex justify-between text-[15px] font-medium text-gray-400">
            <span>Subtotal</span>
            <span>$1234.00</span>
          </div>

          {/* total */}
          <div className=" h-[48px] py-2 flex justify-between">
            <span className=" font-bold">Total</span>
            <span className=" font-bold">$1345.00</span>
          </div>

          {/* button */}
          <div className="flex flex-col items-center gap-2 mt-1">
            <ButtonPrimary text="Checkout" />

            <ButtonDarkPlain
              text="view cart"
              onClick={() => {
                navigate("/cart");
                close();
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
