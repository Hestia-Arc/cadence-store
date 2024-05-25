import Pdt1 from "../../assets/products/product-1.png";
// import removeIcon from "../../assets/Icons/close.png";
import { ButtonPrimary } from "../../components/Elements";

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
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            street address *
          </label>
          <input
            type="text"
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
            <input type="text" placeholder="State" className={inputStyle} />
          </div>

          <div className="h-[64px] flex flex-col">
            <label className={labelStyle} htmlFor="">
              zip code
            </label>
            <input type="text" placeholder="Zip Code" className={inputStyle} />
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
    <div className=" h-[862px] w-[413px] border-solid border-[1px] border-[#6C7275] border-opacity-30 rounded p-4">
      <div className=" text-h6 mb-4">Order summary</div>
      {/* ---------- */}
      <div className="h-[556px] relative flex flex-col gap-4 overflow-y-auto">
        <CartListItem />
        <CartListItem />
        <CartListItem />
        {/* <CartListItem /> */}

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
          <div className=" text-gray-600 font-bold">$99.00</div>
        </OrderBelowBox>

        <div className="flex justify-between items-center text-h7 font-semibold pt-[13px]">
          <div>Total</div>
          <div>$234.00</div>
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
