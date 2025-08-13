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

interface FilterProps {
  clickedCategory: (category: string) => void;
  priceRange: (range: { min: number; max: number }) => void;
}

function Filter({ clickedCategory, priceRange }: FilterProps) {
  const [clicked, setClicked] = useState(0);
  const [isChecked, setIsChecked] = useState(0);

  return (
    <div className="w-[200px] h-[582px] hidden sm:flex flex-col gap-8">
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
              <PriceItem
                item={item}
                index={index}
                priceRange={priceRange}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;

const PriceItem = ({
  item,
  index,
  priceRange,
  isChecked,
  setIsChecked,
}: any) => {
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
          setIsChecked(index);
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

export const MobileFilter = ({ clickedCategory, priceRange }: FilterProps ) => {
  const [clicked, setClicked] = useState("living room");
  const [isChecked, setIsChecked] = useState(0);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState(false);
const [openPriceDropdown, setOpenPriceDropdown] = useState(false);

const formatPriceRange = (range: [number, number] | number[]): string => {
  return `${range[0].toFixed(2)} - ${(range[1] + 0.99).toFixed(2)}`;
};


  return (
    <div className="w-full h-fit flex sm:hidden flex-col gap-4">
      <div className="flex gap-1 items-center">
        <img src={filt} alt="icon" />
        <div className=" text-body1Semi  font-bold">Filter</div>
      </div>

      {/* rooms  */}
      <div className=" flex flex-col gap-2 relative">
        <h6 className=" text-body2Semi !text-[13px] text-gray-400 uppercase font-bold">
          categories
        </h6>

        <button
          onClick={() => setOpenCategoryDropdown(!openCategoryDropdown)}
          className="h-[48px] w-full capitalize flex items-center justify-between p-2 pl-4 border border-gray-500 rounded-lg"
        >
          <div>{clicked}</div>

          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
              fill="#6C7275"
            />
          </svg>
        </button>

        {/*  */}
        {openCategoryDropdown && (
          <div className="absolute top-full z-[999999] w-full flex flex-col gap-2 bg-[#fff] shadow-lg border border-gray-200 rounded-lg p-2 mt-2">
            {rooms.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setClicked(item);
                    clickedCategory(item);
                    setOpenCategoryDropdown(false);
                  }}
                  className={` h-[42px] ${
                    item === clicked
                      ? "bg-gray-200 text-gray-500 rounded-md"
                      : ""
                  } capitalize p-2 text-[14px] text-[#807e7e] font-semibold cursor-pointer`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* prices */}
      <div className="  flex flex-col gap-2 relative">
        <h6 className=" text-body2Semi text-gray-400 !text-[13px] uppercase font-bold">prices</h6>

        <button
          onClick={() => setOpenPriceDropdown(!openPriceDropdown)}
          className="h-[48px] capitalize flex items-center justify-between p-2 pl-4 border border-gray-500 rounded-lg">
          <div>{isChecked === 0 ? "all price" : isChecked === 5 ? "400.00+" : formatPriceRange(priceList[isChecked])  }</div>

          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
              fill="#6C7275"
            />
          </svg>
        </button>

        {/*  */}
        {openPriceDropdown && (
        <div 
        className="absolute top-full z-[999999] w-full flex flex-col gap-2 bg-[#fff] shadow-lg border border-gray-200 rounded-lg p-2 mt-2"
>        {priceList.map((item, index) => {
            return (
              <MobilePriceItem
                item={item}
                index={index}
                priceRange={priceRange}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                closeDropdown={() => setOpenPriceDropdown(false)}
              />
            );
          })}
        </div>)}
      </div>
    </div>
  );
};

interface MobilePriceItemProps {
  item: string | [number, number];
  index: number;
  priceRange: (range: { min: number; max: number }) => void;
  isChecked: number;
  setIsChecked: React.Dispatch<React.SetStateAction<number>>;
  closeDropdown: () => void;
}

const MobilePriceItem = ({
  item,
  index,
  priceRange,
  isChecked,
  setIsChecked,
  closeDropdown,
}: MobilePriceItemProps) => {
  return (
    <div
      key={index}
      className={` h-[42px] ${
        index === isChecked
          ? "bg-gray-200 text-gray-500 rounded-md"
          : ""
      } hover:bg-gray-200 hover:text-gray-500 hover:rounded-md capitalize p-2 text-[14px] text-[#807e7e] font-semibold cursor-pointer flex justify-between`}
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
          setIsChecked(index);
          if (item === "all price") {
            priceRange({ min: 0, max: 999999999 });
          } else if (typeof item === "object") {
            priceRange({ min: item[0], max: item[1] });
          } else {
            priceRange({ min: Number(item), max: 999999999 });
          }
          closeDropdown();
        }}
      />
    </div>
  );
};