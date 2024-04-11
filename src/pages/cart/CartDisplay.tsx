import { FC } from "react";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { CheckoutInfo, OrderSummary } from "./CartCheckout";

interface IPropStep {
  id: JSX.Element;
}

export const CartDisplay: FC<IPropStep> = ({ id }) => {
  return <>{id}</>;
};

const CouponBox = () => {
  return (
    <div className="h-full w-[312px] sm:w-[424px] flex flex-col gap-4">
      <div>
        <div className=" text-h7">Have a coupon?</div>
        <p className=" mt-1 text-body2Reg text-gray-400">
          Add your code for an instant cart discount
        </p>
      </div>

      <div className=" h-[52px] px-4 flex items-center gap-2 border-solid border-2 border-gray-400 border-opacity-40">
        <input
          type="text"
          placeholder="Coupon Code"
          className=" w-[341px] h-7 bg-gray-100"
        />
        <button className=" text-btnSm font-semibold">Apply</button>
      </div>
    </div>
  );
};

// STEP 1    cart list and summary
export const StepOne = () => {
  return (
    <div className="min-h-[500px] sm:h-[771px] flex flex-col sm:flex-row gap-12 py-16 ">
      <div className="flex flex-col gap-16 ">
        <CartList />

        {/* coupon */}
        <div className=" h-[128px] ">
          <CouponBox />
        </div>
      </div>

      <CartSummary />
    </div>
  );
};

// STEP 2  checkout details
export const StepTwo = () => {
  return (
    <div className="h-[1634px] flex flex-col sm:flex-row gap-16 py-20 ">
      <CheckoutInfo />
      <OrderSummary/>
    </div>
  );
};

// STEP 3   order complete
export const StepThree = () => {
  return <div className="flex  gap-16 py-16 ">order</div>;
};
