import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import { cartSelector } from "../features/cart/cartSlice";

export const useCart = (shipping?: number) => {
    const { cart } = useAppSelector(cartSelector);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce(
        (accumulator: any, currentItem: { price: any }) => {
          return accumulator + currentItem.price;
          // return accumulator + currentItem.amount * currentItem.price;
        },
        0
      );
      setTotalPrice(total);
    }
  }, [cart]);

  if(shipping) {
    return totalPrice?.toLocaleString() + shipping;
  } else {
    return totalPrice?.toLocaleString();
  }
 
};
