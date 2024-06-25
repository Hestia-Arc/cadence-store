import { ButtonPrimary } from "../../components/Elements";

const list = [
  {
    img: "",
    tag: "Address",
    text: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
  },
  {
    img: "",
    tag: "Contact Us",
    text: "+84 234 567 890",
  },
  {
    img: "",
    tag: "Email",
    text: "hello@3legant.com",
  },
];


export const inputStyle =
  "  h-[40px] w-[285px] px-4 py-2 rounded border-solid border-[1px] border-[#6C7275] border-opacity-30 mt-2";
export const labelStyle = " uppercase text-hairline2 font-bold text-gray-400";

function Map() {
  return (
    <div className="h-[684px] flex flex-col gap-10 ">
      <h4 className=" text-h4 text-center">Contact Us</h4>
      {/* 1 */}
      <div className="h-[156px] flex items-center gap-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-[357px] h-[156px] bg-gray-200 rounded-sm flex flex-col items-center justify-center gap-3 px-8 py-4"
          >
            <div className="h-[32px] w-[32px] bg-gray-400"></div>
            <h6 className=" uppercase text-hairline1">{item.tag}</h6>
            <p className=" text-body2Semi text-center">{item.text}</p>
          </div>
        ))}
      </div>

      {/* 2 */}
      <div className="h-[404px] flex gap-10 ">
        {/* form */}
        <div className="flex-1 flex flex-col gap-5">
          {/* a */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            full name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* b */}
        <div className="h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            email address
          </label>
          <input
            type="text"
            placeholder="Your Email"
            className={`${inputStyle} w-full`}
          />
        </div>

        {/* c */}
         <div className="min-h-[64px] flex flex-col">
          <label className={labelStyle} htmlFor="">
            message
          </label>
          <textarea
            placeholder="Your Message"
            className={`${inputStyle} w-full !h-[140px]`}
          ></textarea>
        </div>

        <ButtonPrimary text="Send Message" style="w-[200px]" />

        </div>

        {/*  */}
        <div className="flex-1 bg-gray-200"></div>
      </div>
    </div>
  );
}

export default Map;
