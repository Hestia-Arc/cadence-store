// import Pdt1 from "../../assets/products/product-1.png";
import { useState } from "react";
import removeIcon from "../../assets/Icons/close.png";
import { ButtonPrimary, Stepper } from "../../components/Elements";
import { cartSelector } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../store";

export const inputStyle =
  "  h-[40px] w-[285px] px-4 py-2 rounded border-solid border-[1px] border-[#6C7275] border-opacity-30 mt-2";
export const labelStyle = " uppercase text-hairline2 font-bold text-gray-400";
const sectionStyle =
  "min-h-[372px] w-full flex flex-col gap-6 py-8 px-6 border-solid border-[1.8px] border-[#6C7275] border-opacity-30 rounded";
const titleStyle = " h-7 text-h7 font-semibold";

const PayIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="4"
        stroke="#141718"
        stroke-width="1.5"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(1 0 0 -1 10 14)"
        stroke="#141718"
        stroke-width="1.5"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        transform="matrix(1 0 0 -1 17 13)"
        fill="#141718"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        transform="matrix(1 0 0 -1 5 13)"
        fill="#141718"
      />
    </svg>
  );
};

export const CheckoutInfo = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" h-[1474px] w-[643px] flex flex-col gap-6 "
    >
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
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First name"
              className={inputStyle}
            />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              last name
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last name"
              className={inputStyle}
            />
          </div>
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            phone number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
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
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email address"
            className={`${inputStyle} w-full`}
          />
        </div>
      </div>

      {/* ============ shipping section */}
      <div className={sectionStyle}>
        <div className={titleStyle}>Shipping Address</div>

        {/* 1 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            street address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Street Address"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            country *
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Country"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            town/city *
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Town/City"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 4 */}
        <div className="flex gap-6">
          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              state
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              className={inputStyle}
            />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              zip code
            </label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className={inputStyle}
            />
          </div>
        </div>

        {/* 5 */}
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <div>Use a different billing address (optional)</div>
        </div>
      </div>

      {/* =================== payment section */}
      <div className={sectionStyle}>
        <div className={titleStyle}>Payment Method</div>

        {/* 1a */}
        <div className="h-[54px] flex item-center justify-between px-4 py-[13px] border-solid border border-[#6C7275] border-opacity-30 rounded hover:bg-[#6C727512] ">
          <div>
            <input type="radio" name="method" id="card credit" />
            <label className=" pl-2 text-[15px]" htmlFor="card credit">
              Pay by Card Credit
            </label>
          </div>

          <PayIcon />
        </div>

        {/* 1b */}
        <div className="h-[54px] flex justify-between item-center px-4 py-[13px] border-solid border border-[#6C7275] border-opacity-30 rounded hover:bg-[#6C727512] ">
          <div>
            <input type="radio" name="method" id="paypal" />
            <label className=" pl-2 text-[15px]" htmlFor="paypal">
              Paypal
            </label>
          </div>

          <PayIcon />
        </div>

        <hr className="border-solid border border-[#6C7275] border-opacity-15" />

        {/* 2 */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            card number
          </label>
          <input
            type="text"
            placeholder="1234 1234 1234"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* 3 */}
        <div className="flex gap-6">
          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              expiration date
            </label>
            <input type="date" className={inputStyle} />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              cvc
            </label>
            <input type="text" placeholder="CVC code" className={inputStyle} />
          </div>
        </div>
      </div>

      <ButtonPrimary text="Place Order" onClick={handleSubmit} />
    </form>
  );
};

// order summary
export const OrderSummary = () => {
  const { cart, totalPrice, subTotal } = useAppSelector(cartSelector);

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
    <div className=" h-[862px] w-[413px] border-solid border-[1px] border-[#6C7275] border-opacity-30 rounded p-4">
      <div className=" text-h6 mb-4">Order summary</div>
      {/* ---------- */}
      <div className="h-[556px] relative flex flex-col gap-4 ">
        <div
          className={`h-[495px] flex flex-col gap-4 overflow-y-auto ${
            cart?.length !== 0 && "pr-2"
          }`}
        >
          {cart?.length !== 0 ? (
            cart?.map((item) => {
              return <CartListItem item={item} />;
            })
          ) : (
            <div className=" h-full w-full italic bg-gray-200 rounded text-gray-400 flex justify-center items-center">
              {" "}
              Cart is empty.{" "}
            </div>
          )}
        </div>

        <div className="h-[52px] bg-[#fff] sticky bottom-0 flex gap-2">
          <input
            type="text"
            placeholder="Input"
            className="h-[52px] w-[258px] p-2 border-solid border border-[#e7e7e7] rounded"
          />
          <ButtonPrimary text="Apply" />
        </div>
      </div>

      {/* fields */}
      <div className="h-[208px]">
        <OrderBelowBox>
          <div className=" ">JenkateMW</div>
          <div className=" text-green font-semibold">-$25.00 [Remove]</div>
        </OrderBelowBox>

        {/*  */}
        <OrderBelowBox>
          <div>Shipping</div>
          <div className=" text-gray-600 font-bold">Free</div>
        </OrderBelowBox>

        <OrderBelowBox>
          <div>Subtotal</div>
          <div className=" text-gray-600 font-bold">${subTotal}.00</div>
        </OrderBelowBox>

        <div className="flex justify-between items-center text-h7 font-semibold pt-[13px]">
          <div>Total</div>
          <div>${totalPrice}.00</div>
        </div>
      </div>
    </div>
  );
};

// =============== boxes
interface Prop {
  children: JSX.Element | JSX.Element[];
}
const OrderBelowBox = ({ children }: Prop) => {
  return (
    <div className=" h-[52px] w-full py-[13px] flex justify-between text-[16px] text-gray-400 border-solid border-b border-[#6C7275] border-opacity-15 ">
      {children}
    </div>
  );
};

// item
const CartListItem = ({ item }: any) => {
  return (
    <div className=" h-[144px] flex py-5 border-solid border-b-2 ">
      {/* product/remove btn  */}
      <div className=" w-[70%] flex gap-4">
        <div>
          {item?.image && (
            <img
              src={item?.image}
              alt="product"
              className=" h-24 w-20 object-cover"
            />
          )}

          {!item?.image && (
            <div className="h-24 w-20 flex items-center justify-center bg-gray-300  bg-opacity-70 text-gray-400  text-opacity-40 rounded-[5px] text-[12px] font-bold">
              <div className="flex items-center justify-center text-center h-full w-full ">
                No <br /> Image
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className=" text-capS1 font-bold capitalize">
            {item.productName?.length > 15
              ? `${item.productName?.slice(0, 12)}...`
              : item.productName}
          </span>
          <span className=" text-capR2 text-gray-400 font-light">
            Color: {item?.color}
          </span>
          <div className=" w-[72px] h-6 flex items-center justify-center gap-3 rounded  px-2 border-solid border-[1px] border-gray-400 opacity-70 ">
            <Stepper item={item} />
          </div>
        </div>
      </div>

      {/* price/stepper/subtotal */}
      <div className="w-[30%] flex flex-col justify-start items-end">
        {/* subtotal */}
        <span className="  text-body2Semi font-bold">
          ${item?.price * item?.piece}.00
        </span>
        <button className=" inline-flex items-center text-[11.5px] text-gray-400 font-bold">
          <img src={removeIcon} alt="icon" className="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
};
