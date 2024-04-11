import Pdt1 from "../../assets/products/product-1.png";
import removeIcon from "../../assets/Icons/close.png";

export const CartListItem = () => {
  return (
    <div className=" h-[144px] flex items-center py-5 border-solid border-b-2 border-gray-300">
      {/* product/remove btn  */}
      <div className=" w-1/2 flex gap-4">
        <img src={Pdt1} alt="product" className=" h-24 w-20 object-cover" />

        <div className="flex flex-col gap-2">
          <span className=" text-capS1 font-bold">Tray Table</span>
          <span className=" text-capR2 text-gray-400 font-light">Color: Black</span>
          <span className=" inline-flex items-center text-capR2 text-gray-400 font-bold">
            <img src={removeIcon} alt="icon" className="h-[18px] w-[18px]" />
            <span> Remove</span>
          </span>
        </div>
      </div>

      {/* price/stepper/subtotal */}
      <div className=" w-1/2 flex justify-between">
        {/* stepper */}
        <div className=" w-1/4">
          <div className=" w-[72px] h-7 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
        </div>

        {/* price */}
        <span className=" w-1/4  text-body2Semi font-normal">$19.00</span>

        {/* subtotal */}
        <span className=" w-1/4 text-body2Semi font-bold">$38.00</span>
      </div>
    </div>
  );
};
