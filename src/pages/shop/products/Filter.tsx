import filt from "../../../assets/products/filter.svg";

const rooms = [
  "all rooms",
  "living room",
  "bedroom",
  "kitchen",
  "bathroom",
  "dinning",
  "outdoor",
];

const priceList = [
  "all price",
  "$0.00 - $99.99",
  "$100.00 - $199.99",
  "$200.00 - $299.99",
  "$300.00 - $399.99",
  "$400.00+",
];

function Filter() {
  return (
    <div className="w-[200px] h-[582px] flex flex-col gap-8">
      <div className="flex gap-1 items-center">
        <img src={filt} alt="icon" />
        <div className=" text-body1Semi font-bold">Filter</div>
      </div>

      {/* rooms  */}
      <div className=" flex flex-col gap-2">
        <h6 className=" text-body2Semi uppercase font-bold">categories</h6>

        {/*  */}
        <div className="flex flex-col gap-2">
          {rooms.map((item, index) => {
            return (
              <div
                key={index}
                className={` capitalize text-[14px] text-[#807e7e] font-semibold`}
              >
                <span
                  className={` ${
                    index === 2 ? "border-b-2 border-gray-500" : ""
                  }`}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* prices */}
      <div className=" flex flex-col gap-2">
        <h6 className=" text-body2Semi uppercase font-bold">prices</h6>

        {/*  */}
        <div className="flex flex-col gap-2 mr-5">
          {priceList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between capitalize text-[14px] text-[#807e7e] font-semibold"
              >
                <span>{item}</span>

                <input type="checkbox" name="" id="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
