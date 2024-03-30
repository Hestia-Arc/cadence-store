import pt1 from "../../assets/products/product-1.png";
import pt2 from "../../assets/products/product-6.png";
import pt3 from "../../assets/products/product-5.png";
import { FC } from "react";
import { ButtonDark } from "../../components/Elements";

export const BannerGrid = () => {
  return (
    <section className="min-h-[600px] flex gap-6 px-40 xs:px-8 xs:flex-col">
      <div className="w-1/2 xs:w-full relative">
        <img src={pt1} alt="icon" className="h-[586px] w-[600px] xs:h-[390px] xs:w-full " />
        <Tag tag="living room" posB="top-6" />

      </div>

      {/*  */}
      <div className="w-1/2 xs:w-full flex flex-col gap-6 ">
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
    <div className={`h-[75px] absolute ${posT ? posT : ""} ${posB ? posB : ""} left-6 xs:left-4 flex flex-col items-start gap-1 `}>
      <div className="text-h5 capitalize">{tag} </div>
      <ButtonDark text="shop now" />
    </div>
  );
};

const GridItem: FC<Props> = ({ img, tag }): JSX.Element => {
  return (
    <div className="h-[280px] xs:h-[180px] relative">
      <img src={img} alt="icon" className="h-[280px] xs:h-[180px]" />
      <Tag tag={tag} posB="bottom-6" />
    </div>
  );
};
