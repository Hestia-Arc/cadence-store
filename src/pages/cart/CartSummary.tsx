import { ButtonPrimary } from "../../components/Elements";

const radioStyle = "h-[52px] flex justify-between py-3 px-4 border-solid border-[1px] border-gray-400 rounded"
export const CartSummary = () => {
  return (
    <div className="w-[312px] sm:w-[413px] h-[482px] flex flex-col gap-4 p-5 rounded-md border-solid border-[1px] border-[#6C7275]">
      <h6 className=" text-h7 font-bold">CartSummary</h6>

      <div className=" pb-4">
        {/* delivery */}
        <div className=" h-[196px] flex flex-col gap-3 pb-4">
          {/* free */}
          <div className={radioStyle}>

          <div>
            <input type="radio" name="shipping" id="free" />
            <label className=" pl-2" htmlFor="free">Free shipping</label>
          </div>
          <div>$35.00</div>
          </div>

          {/* express */}
          <div className={radioStyle}>

          <div>
            <input type="radio" name="shipping" id="express" />
            <label className=" pl-2" htmlFor="express">Express shipping</label>
          </div>
          <div>$35.00</div>
          </div>

          {/* pickup */}
          <div className={radioStyle}>
            <div>
              <input type="radio" name="shipping" id="pickup" />
              <label className=" pl-2" htmlFor="pickup">Pick Up</label>
            </div>

            <div>$35.00</div>
          </div>
        </div>

        {/* sub-total */}
        <div className=" h-[52px] py-3 flex justify-between">
          <span>Subtotal</span>
          <span className=" font-bold">$1234.00</span>
        </div>

        {/* total */}
        <div className=" h-[52px] py-3 flex justify-between">
          <span className=" font-bold">Total</span>
          <span className=" font-bold">$1345.00</span>
        </div>
      </div>

      {/* button */}
      <div>
        <ButtonPrimary text="Checkout" />
      </div>
    </div>
  );
};
