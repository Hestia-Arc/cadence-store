import { CartListItem } from "./CartListItem";

export const CartList = () => {
  return (
    <div className=" w-[643px] h-[482px]">
      {/* headings */}
      <div className=" h-[50px] flex justify-between pb-5 border-solid border-b-2 border-gray-400">
        <div className=" w-1/2">
          <span>Product</span>
        </div>

        <div className=" w-1/2 flex justify-between">
          <span>Quality</span>
          <span>Price</span>
          <span>Subtotal</span>
        </div>
      </div>

      {/* list */}
      <CartListItem/>
      {/* <CartListItem/> */}
      {/* <CartListItem/> */}

    </div>
  );
};
