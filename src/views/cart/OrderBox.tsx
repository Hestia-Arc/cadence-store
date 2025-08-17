// import Pdt1 from "../../assets/products/product-7.png";
// import Pdt2 from "../../assets/products/product-3.png";
// import Pdt3 from "../../assets/products/product-8.png";
import { FC } from "react";
import { useAppSelector } from "../../store";
import { cartSelector } from "./cartSlice";
import { IProduct } from "@views/types";

function OrderBox() {
  const { cart, totalPrice } = useAppSelector(cartSelector);
  const date = new Date().toDateString();

  return (
    <div className="h-[750px] md:w-[738px] flex flex-col items-center gap-10 shadow-xl rounded-xl px-10 md:px-24 py-20">
      <div className=" text-center">
        <div className=" text-h7 sm:text-h6 text-gray-400">Thank you!</div>

        <div className=" text-h5 md:text-h4 text-[#23262F]">
          Your order has been <br className="hidden md:block" /> received
        </div>
      </div>

      {/* order images */}
      <div className="h-[140px] w-full flex items-center justify-center gap-6 overflow-x-auto overflow-y-hidden ">
        {cart?.map((item) => {
          return <OrderCountItem item={item}  />;
        })}
        {/* <OrderCountItem img={Pdt3} />
        <OrderCountItem img={Pdt2} />
        <OrderCountItem img={Pdt1} /> */}
      </div>

      {/* order info */}
      <div className="h-[148px] w-full flex">
        {/* ====== label */}
        <div className=" flex-1 flex justify-end">
          <div className="h-full w-[120px] text-capS1 flex flex-col gap-5 text-gray-400">
            <div>Order code:</div>
            <div>Date:</div>
            <div>Total:</div>
            <div>Payment method:</div>
          </div>
        </div>

        {/* ====== data */}
        <div className=" flex-1">
          <div className="h-full w-fit text-capS1 text-nowrap text-gray-700 font-bold pl-8 flex flex-col gap-5">
            <div>#0123_45678</div>
            <div>{date}</div>
            {/* <div>October 19, 2024</div> */}
            <div>${totalPrice}.00</div>
            <div>Credit Card</div>
          </div>
        </div>
      </div>

      {/* btn */}
      <div>
        <button className="h-[52px] w-[203px] text-btnSm bg-gray-700 rounded-3xl text-[#fff]">
          Purchase history
        </button>
      </div>
    </div>
  );
}

export default OrderBox;

interface Prop {
  item: IProduct;
}

const OrderCountItem: FC<Prop> = ({ item}) => {
  return (
    <div className="w-[96px] h-[112px] flex items-end relative">
      <div className="absolute top-0 right-0 h-8 w-8 flex items-center justify-center rounded-3xl bg-gray-700 text-white">
        {item.piece}
      </div>

      <div className="w-[80px] h-[96px] bg-gray-300 rounded">
        {item?.image && <img src={item?.image} alt="product" />}
        {!item?.image && (
          <div className="h-24 w-20 flex items-center justify-center bg-gray-300  bg-opacity-70 text-gray-400  text-opacity-40 rounded-[5px] text-[12px] font-bold">
            <div className="flex items-center justify-center text-center h-full w-full ">
              No <br /> Image
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
