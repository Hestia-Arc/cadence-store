import Pdt1 from "../../assets/products/product-7.png";
import Pdt2 from "../../assets/products/product-3.png";
import Pdt3 from "../../assets/products/product-8.png";
import { FC } from "react";

function OrderBox() {
  return (
    <div className="h-[730px] w-[738px] flex flex-col items-center gap-10 shadow-xl rounded-xl px-24 py-20">
      <div className=" text-center">
        <div className=" text-h6 text-gray-400">Thank you!</div>

        <div className=" mt-1 text-h4 text-[#23262F]">
          Your order has been <br /> received
        </div>
      </div>

      {/* order images */}
      <div className="h-[112px] w-full flex justify-center gap-10 ">
        <OrderCountItem img={Pdt3} />
        <OrderCountItem img={Pdt2} />
        <OrderCountItem img={Pdt1} />
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
          <div className="h-full w-fit text-capS1 text-gray-700 font-bold pl-8 flex flex-col gap-5">
            <div>#0123_45678</div>
            <div>October 19, 2023</div>
            <div>$1,345.00</div>
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
  img: string;
}

const OrderCountItem: FC<Prop> = ({ img }) => {
  return (
    <div className="w-[96px] h-[112px] flex items-end relative">
      <div className="absolute top-0 right-0 h-8 w-8 flex items-center justify-center rounded-3xl bg-gray-700 text-white">
        2
      </div>

      <div className="w-[80px] h-[96px] bg-gray-300 rounded">
        <img src={img} alt="product" />
      </div>
    </div>
  );
};
