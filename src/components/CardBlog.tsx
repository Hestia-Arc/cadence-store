import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonDark } from "./Elements";

interface Props {
  img: string;
  title: string;
  link?: string;
}
export const CardBlog: FC<Props> = ({ img, title }): JSX.Element => {
  return (
    <div className="w-[311px] sm:w-[357px]  flex flex-col gap-5">
      <div className="h-[283px] sm:h-[320px] bg-gray-200">
        <img src={img} alt="blog" className="h-[283px] sm:h-[320px] " />
      </div>

      {/*contents  */}
      <div className="h-[64px] flex flex-col gap-2 ">
        <p className="text-h7">{title} </p>
        <Link to="/blog">
          <ButtonDark text="Read More" />
        </Link>
      </div>
    </div>
  );
};
