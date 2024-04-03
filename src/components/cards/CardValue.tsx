import { FC } from "react";

interface IProp {
  img: string;
  title: string;
  tag: string;
}

export const CardValue: FC<IProp> = ({ img, title, tag }) => {
  return (
    <div className="h-[198px] sm:h-[220px] w-1/2 sm:w-[260px] flex flex-col gap-4 px-4 py-8 sm:px-8 sm:py-12 bg-gray-200">
      <img src={img} alt="" className=" h-12 w-12" />

      <div className="h-[70px] sm:h-[60px] flex flex-col gap-1 sm:gap-2">
        <h6 className=" capitalize text-capS1 sm:text-h7 font-bold ">{title}</h6>
        <p className=" w-4/5 sm:w-full text-capR1 text-gray-400">{tag}</p>
      </div>
    </div>
  );
};
