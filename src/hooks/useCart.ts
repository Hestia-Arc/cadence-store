import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import { cartSelector } from "../views/cart/cartSlice";

export const useCart = (shipping?: number) => {
    const { cart } = useAppSelector(cartSelector);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      interface CartItem {
        price: number;
        // amount?: number; // Uncomment if you use amount
      }

      const total = cart.reduce(
        (accumulator: number, currentItem: CartItem) => {
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
