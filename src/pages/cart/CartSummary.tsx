import { useState } from "react";
import { ButtonPrimary } from "../../components/Elements";
import { useAppSelector } from "../../store";
import { cartSelector } from "../../features/cart/cartSlice";
import { useFlyMenu } from "../../contexts/FlyMenuContext";

const radioStyle =
  "h-[52px] flex justify-between py-3 px-4 border-solid border-[1px] border-gray-400 rounded";
export const CartSummary = () => {
  // const dispatch = useAppDispatch()
  const { cart } = useAppSelector(cartSelector);
  const { setActive, setId } = useFlyMenu();

  //@ts-ignore
  const [shippingPrice, setShippingPrice] = useState(0);
  const { totalPrice, subTotal } = useAppSelector(cartSelector);

  const handleShipping = (value: number) => {
    setShippingPrice(value);
    // dispatch(addShipping(shippingPrice))
  };

  return (
    <div className="w-[312px] sm:w-[413px] h-[482px] flex flex-col gap-4 p-5 rounded-md border-solid border-[1px] border-[#6C7275]">
      <h6 className=" text-h7 font-bold">CartSummary</h6>

      <div className=" pb-4">
        {/* delivery */}
        <div className=" h-[196px] flex flex-col gap-3 pb-4">
          {/* free */}
          <div className={radioStyle}>
            <div>
              <input
                type="radio"
                name="shipping"
                id="free"
                onChange={() => {
                  handleShipping(35);
                }}
              />
              <label className=" pl-2" htmlFor="free">
                Free shipping
              </label>
            </div>
            <div>$35.00</div>
          </div>

          {/* express */}
          <div className={radioStyle}>
            <div>
              <input
                type="radio"
                name="shipping"
                id="express"
                onChange={() => {
                  handleShipping(185);
                }}
              />
              <label className=" pl-2" htmlFor="express">
                Express shipping
              </label>
            </div>
            <div>$185.00</div>
          </div>

          {/* pickup */}
          <div className={radioStyle}>
            <div>
              <input
                type="radio"
                name="shipping"
                id="pickup"
                onChange={() => {
                  handleShipping(0);
                }}
              />
              <label className=" pl-2" htmlFor="pickup">
                Pick Up
              </label>
            </div>

            <div>$0.00</div>
          </div>
        </div>

        {/* sub-total */}
        <div className=" h-[52px] py-3 flex justify-between">
          <span>Subtotal</span>
          <span className=" font-bold">${subTotal}.00</span>
        </div>

        {/* total */}
        <div className=" h-[52px] py-3 flex justify-between">
          <span className=" font-bold">Total</span>
          <span className=" font-bold">${totalPrice}.00</span>
        </div>
      </div>

      {/* button */}
      <div>
        <ButtonPrimary
          text="Checkout"
          disable={cart?.length === 0}
          onClick={() => {
            if(cart?.length > 0) {
            setId(2);
            setActive(2);
          }}}
        />
      </div>
    </div>
  );
};
