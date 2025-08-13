import { AnimatePresence, motion } from "framer-motion";
import { ButtonDarkPlain, ButtonPrimary, Stepper } from "../../components/Elements";
import removeIcon from "../../assets/Icons/close.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartSelector, removeItems } from "../cart/cartSlice";

interface Prop {
  open?: boolean;
  close: () => void;
}

export const CartSideBar: React.FC<Prop> = ({ close }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart, totalPrice, subTotal } = useAppSelector(cartSelector);

  console.log(cart);
  return (
    <AnimatePresence>
      <motion.div
        // whileHover={{scale: [1, 2, 1]}}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0", position: "fixed" }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 43, damping: 12, delay: 0.6 }}
        className="h-[100vh] w-[340px] sm:w-[413px] fixed top-0 right-0 flex flex-col justify-between bg-[#fff] p-4 border shadow-md z-[9999] "
      >
        {/* =========== summary */}
        <div className="sm:w-[365px] h-[70%] overflow-y-hidden rounded">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <h6 className=" text-h6">Cart </h6>
              <div className=" text-[18px] bg-green w-8 h-8 flex items-center justify-center rounded-full text-white">{cart?.length}</div>
            </div>
            <button className="hover:bg-gray-300 p-1 hover:rounded-full hover:shadow">
              <img
                src={removeIcon}
                alt="icon"
                className="h-[22px] w-[22px]"
                onClick={close}
              />
            </button>
          </div>

          {/*  */}
          <div
            className={`h-[90%] overflow-y-auto flex flex-col gap-[10px] mt-3 ${
              cart?.length !== 0 && "pr-2"
            } `}
          >
            {/* {Array(2)
            .fill(9)
            ?.map((_, i) => ( */}
            {cart?.length !== 0 ? (
              cart?.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-[144px] flex py-3 border-solid border-b-2 "
                >
                  {/* product/remove btn  */}
                  <div className=" w-[75%] flex gap-4 ">
                    <img
                      // src={Pdt1}
                      src={item?.image}
                      alt="product"
                      className=" h-24 w-20 object-cover"
                    />

                    <div className="flex flex-col gap-2">
                      <span className=" text-capS1 font-bold capitalize">
                        {item.productName?.length > 18
                          ? `${item.productName?.slice(0, 15)}...`
                          : item.productName}
                      </span>
                      <span className=" text-capR2 text-gray-400 font-light">
                        {/* Color: {item.color.map((itemColor) => itemColor)} */}
                      </span>
                      <div className=" w-[72px] h-6 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
                        <Stepper item={item} />
                      </div>
                    </div>
                  </div>

                  {/* price/stepper/subtotal */}
                  <div className="w-[25%] flex flex-col items-end gap-2">
                    {/* subtotal */}
                    <span className="  text-body2Semi font-bold">
                      ${item.price}.00
                    </span>
                    <button
                      onClick={() => dispatch(removeItems(item))}
                      className=" inline-flex items-center text-capR2 text-gray-400 font-bold"
                    >
                      <img
                        src={removeIcon}
                        alt="icon"
                        className="h-[18px] w-[18px]"
                      />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full w-full italic bg-gray-200 rounded text-gray-400 flex justify-center items-center">
                {" "}
                Cart is empty.{" "}
              </div>
            )}
          </div>
        </div>

        {/* =============== totals */}
        <div className="sm:w-[365px] h-[27%] border border-top-2 border-t-gray-400">
          {/* sub-total */}
          <div className=" h-[20%] py-2 flex justify-between text-[15px] font-medium text-gray-400">
            <span>Subtotal</span>
            <span>${subTotal}.00</span>
          </div>

          {/* total */}
          <div className=" h-[30%] py-2 flex justify-between">
            <span className=" font-bold">Total</span>
            <span className=" font-bold">${totalPrice}.00</span>
          </div>

          {/* button */}
          <div className="h-[50%] flex flex-col items-center gap-1 ">
            <ButtonPrimary text="Checkout"  onClick={() => {
                navigate("/cart");
                close();
              }} />

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
