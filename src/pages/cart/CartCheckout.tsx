// import { useState } from "react";
import Pdt1 from "../../assets/products/product-1.png";
// import removeIcon from "../../assets/Icons/close.png";
import { ButtonPrimary } from "../../components/Elements";

const inputStyle =
  "  h-[40px] w-[285px] px-4 py-2 rounded border-solid border-[1px] border-[#6C7275] border-opacity-30 mt-2";
const labelStyle = " uppercase text-hairline2 font-bold text-gray-400";
const sectionStyle =
  "min-h-[372px] w-full flex flex-col gap-6 py-8 px-6 border-solid border-[1.8px] border-[#6C7275] border-opacity-30  rounded";
const titleStyle = " h-7 font-bold";

export const CheckoutInfo = () => {
  return (
    <div className=" h-[1474px] w-[643px] flex flex-col gap-6 ">

      {/* ========== contact section */}
      <div className={sectionStyle}>
        <div className={titleStyle}>Contact Information</div>

        {/* 1 */}
        <div className="flex gap-6">
          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              first name
            </label>
            <input
              type="text"
              placeholder="First name"
              className={inputStyle}
            />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              last name
            </label>
            <input type="text" placeholder="Last name" className={inputStyle} />
          </div>
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            phone number
          </label>
          <input
            type="text"
            placeholder="Phone number"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            email address
          </label>
          <input
            type="text"
            placeholder="Email address"
            className={`${inputStyle} w-full`}
          />
        </div>
      </div>

      {/* ============ shipping section */}
       <div className={sectionStyle}>
        <div className={titleStyle}>Shipping Address</div>

        {/* 1 */}
        <div className="flex gap-6">
          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              first name
            </label>
            <input
              type="text"
              placeholder="First name"
              className={inputStyle}
            />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              last name
            </label>
            <input type="text" placeholder="Last name" className={inputStyle} />
          </div>
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            phone number
          </label>
          <input
            type="text"
            placeholder="Phone number"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            email address
          </label>
          <input
            type="text"
            placeholder="Email address"
            className={`${inputStyle} w-full`}
          />
        </div>
      </div>

      {/* =================== payment section */}
       <div className={sectionStyle}>
        <div className={titleStyle}>Payment Method</div>

        {/* 1 */}
        <div className="flex gap-6">
          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              first name
            </label>
            <input
              type="text"
              placeholder="First name"
              className={inputStyle}
            />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              last name
            </label>
            <input type="text" placeholder="Last name" className={inputStyle} />
          </div>
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            phone number
          </label>
          <input
            type="text"
            placeholder="Phone number"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            email address
          </label>
          <input
            type="text"
            placeholder="Email address"
            className={`${inputStyle} w-full`}
          />
        </div>
      </div>

      <ButtonPrimary text="Place Order" />

    </div>
  );
};

// order summary
export const OrderSummary = () => {
  // const [openTagBox, setOpenTagBox] = useState<boolean>(false);
  // const [tag, setTag] = useState<any>(null);
  // const [tagColor, setTagColor] = useState<any>(null);

  // const handleCates = (value: string, color: string) => () => {
  //   setTag(value);
  //   setTagColor(color)
  //   setOpenTagBox(false)

  //   console.log(tag)
  // };

  return (
    <div className=" h-[862px] w-[413px] border-solid border-[1px] border-gray-700 border-opacity-30 rounded p-4">
      <div className=" text-h6 mb-4">Order summary</div>
      {/* ---------- */}
      <div className="h-[556px] mb-4 relative flex flex-col gap-4 overflow-y-auto">
        <CartListItem />
        <CartListItem />
        <CartListItem />
        {/* <CartListItem /> */}

        <div className="h-[52px] bg-[#fff] sticky bottom-0 flex gap-2">
          <input
            type="text"
            placeholder="Input"
            className="h-[52px] w-[258px] p-2 border-solid border border-[#e7e7e7]"
          />
          <ButtonPrimary text="Apply" />
        </div>
      </div>

      {/* fields */}
      <div className="h-[208px] bg-gray-400 "></div>
    </div>
  );
};

// item
const CartListItem = () => {
  return (
    <div className=" h-[144px] flex py-5 border-solid border-b-2 ">
      {/* product/remove btn  */}
      <div className=" w-1/2 flex gap-4">
        <img src={Pdt1} alt="product" className=" h-24 w-20 object-cover" />

        <div className="flex flex-col gap-2">
          <span className=" text-capS1 font-bold">Tray Table</span>
          <span className=" text-capR2 text-gray-400 font-light">
            Color: Black
          </span>
          <div className=" w-[72px] h-6 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
            <span>-</span>
            <span className=" text-[12px]">2</span>
            <span>+</span>
          </div>
          {/* <span className=" inline-flex items-center text-capR2 text-gray-400 font-bold">
            <img src={removeIcon} alt="icon" className="h-[18px] w-[18px]" />
            <span> Remove</span>
          </span> */}
        </div>
      </div>

      {/* price/stepper/subtotal */}
      <div className="w-1/2 flex justify-end">
        {/* subtotal */}
        <span className="  text-body2Semi font-bold">$38.00</span>
      </div>
    </div>
  );
};
