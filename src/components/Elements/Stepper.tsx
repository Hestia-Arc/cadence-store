import { useAppDispatch } from "../../store";
import { addToCart, removeAnItem } from "../../views/cart/cartSlice";
import { IProduct } from "../../views/types";

export const Stepper = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <span
        onClick={() => dispatch(removeAnItem(item))}
        className=" cursor-pointer"
      >
        -
      </span>
      <span className=" text-[12px]">{item?.piece}</span>

      <span
        onClick={() => dispatch(addToCart(item))}
        className=" cursor-pointer"
      >
        +
      </span>
    </>
  );
};

export default Stepper;
