import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  link?: string;
}
export const Card: FC<Props> = ({ img, title }): JSX.Element => {
  return (
    <div className="w-[311px] sm:w-[307px]  flex flex-col gap-5">
      <Link to="/blog/002" className="h-[283px] sm:h-[300px] bg-gray-200">
        <img src={img} alt="blog" className="h-[283px] sm:h-[300px] sm:w-[307px] " />
      </Link>

      {/*contents  */}
      <div className="min-h-[56px] flex flex-col gap-2 ">
        <p className="text-h7">{title} </p>
        <p className=" text-capR2 text-gray-400">
            October 18, 2024
        </p>
      </div>
    </div>
  );
};
