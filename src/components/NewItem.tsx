import { FC } from "react";

interface INewProps {
    posT: string
    posL: string
    isNew?: any
}
export const NewItem: FC<INewProps> = ({posT, posL, isNew}) => {
  return (
    <div className={`w-[71px] h-[56px] absolute ${posT ? posT : " "} ${posL ? posL : " "} flex flex-col justify-center items-center gap-[6px]`}>
      <div className="flex justify-center items-center text-hairline1 px-3 py-1 uppercase bg-white text-primary-800 font-bold rounded">
        new
      </div>
      <div className="flex justify-center items-center text-hairline1 px-3 py-1 bg-green text-white font-bold rounded">
        {isNew }
        {/* ? isNew : "-50%" */}
      </div>
    </div>
  );
};
