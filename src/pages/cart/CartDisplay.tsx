import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartDisplay = () => {
  return (
    <div className="h-[771px] flex flex-col bg-gray-200">
      {/* list and summary */}
      <div className=" flex gap-16 py-16 ">
        <CartList />
        <CartSummary />
      </div>

      {/* coupon */}
      <div className=" h-[128px] bg-gray-400">coupon</div>
    </div>
  );
};
