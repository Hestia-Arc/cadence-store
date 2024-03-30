import pt1 from "../../assets/products/product-1.png";
import pt2 from "../../assets/products/product-6.png";
import pt3 from "../../assets/products/product-5.png";
import { FC } from "react";
import { ButtonDark } from "../../components/Elements";

export const BannerGrid = () => {
  return (
    <section className="min-h-[600px] flex flex-col sm:flex-row gap-6  px-8 sm:px-40 ">
      <div className=" w-full sm:w-1/2 relative">
        <img src={pt1} alt="icon" className="h-[390px] w-full sm:h-[586px] sm:w-[600px]  " />
        <Tag tag="living room" posB="top-6" />

      </div>

      {/*  */}
      <div className="w-full sm:w-1/2 flex flex-col gap-6 ">
        <GridItem img={pt2} tag="bedroom" />
        <GridItem img={pt3} tag="kitchen" />
      </div>
    </section>
  );
};

// ===============================
interface Props {
  img: string;
  tag: string
}

interface TagProps {
  posT?: string;
  posB?: string;
  tag: string;
}

const Tag: FC<TagProps> = ({ posT, tag, posB }): JSX.Element => {
  // const position = pos

  return (
    <div className={`h-[75px] absolute ${posT ? posT : ""} ${posB ? posB : ""} left-4 sm:left-6  flex flex-col items-start gap-1 `}>
      <div className="text-h5 capitalize">{tag} </div>
      <ButtonDark text="shop now" />
    </div>
  );
};

const GridItem: FC<Props> = ({ img, tag }): JSX.Element => {
  return (
    <div className="h-[180px] sm:h-[280px]  relative">
      <img src={img} alt="icon" className="h-[180px] sm:h-[280px] " />
      <Tag tag={tag} posB="bottom-6" />
    </div>
  );
};
