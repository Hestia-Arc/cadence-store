import { useState } from "react";
import filt from "../../../assets/products/filter.svg";

const rooms = [
  "all rooms",
  "living room",
  "bedroom",
  "kitchen",
  "bathroom",
  "dinning",
  "outdoors",
];

const priceList = [
  "all price",
  [0, 99],
  [100, 199],
  [200, 299],
  [300, 399],
  "400",
];

function Filter({ clickedCategory, priceRange }: any) {
  const [clicked, setClicked] = useState(0);
  const [isChecked, setIsChecked] = useState(0);


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
                onClick={() => {
                  setClicked(index);
                  clickedCategory(item);
                }}
                className={` capitalize text-[14px] text-[#807e7e] font-semibold cursor-pointer`}
              >
                <span
                  className={` ${
                    index === clicked ? "border-b-2 border-gray-500" : ""
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
              <PriceItem item={item} index={index} priceRange={priceRange} isChecked={isChecked} setIsChecked={setIsChecked} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;

const PriceItem = ({ item, index, priceRange, isChecked, setIsChecked }: any) => {

  return (
    <div
      key={index}
      className="flex justify-between capitalize text-[14px] text-[#807e7e] font-semibold"
    >
      {item === "all price" && <span>{item}</span>}
      {item !== "all price" && item !== "400" ? (
        <span>
          ${item[0]}.00 - ${item[1]}.99
        </span>
      ) : (
        ""
      )}
      {item === "400" && <span>${item}.00+</span>}

      <input
        type="checkbox"
        name=""
        id=""
        checked={index === isChecked ? true : false}
        onChange={() => {
          setIsChecked(index)
          if (item === "all price") {
            priceRange({ min: 0, max: 999999999 });
          } else if (typeof item === "object") {
            priceRange({ min: item[0], max: item[1] });
          } else {
            priceRange({ min: Number(item), max: 999999999 });
          }
        }}
      />
    </div>
  );
};
