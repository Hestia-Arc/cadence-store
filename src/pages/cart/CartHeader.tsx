import { FC } from "react";



// B1B5C3
interface IPropStep {
  tag: string;
  active: number;
  step: number;
}

export const Steps: FC<IPropStep> = ({ tag, active, step }) => {
  return (
    <div className={`w-[230px] sm:w-[256px] h-[68px] ${active === step ? "border-solid border-b-4 border-gray-700" : ""} focus:bg-gray-400 focus:outline-none `}
     >
      <div className="h-[42px] w-full flex items-center gap-4">
        <div
          className={` h-[42px] w-[42px] flex items-center justify-center font-semibold ${
            active  === step
              ? "bg-gray-700 text-gray-200"
              : "bg-gray-400 bg-opacity-50 text-gray-200 "
          } rounded-3xl `}
        >
          {step}
        </div>
        <div
          className={` text-body2Semi ${
            active  === step ? "text-gray-700" : "text-gray-400 text-opacity-50"
          } `}
        >
          {tag}
        </div>
      </div>
    </div>
  );
};
