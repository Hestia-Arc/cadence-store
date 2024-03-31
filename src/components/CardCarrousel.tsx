import { FC, useState } from "react";
import rating from "../assets/Icons/Star Icon.png";
import wishIcon from "../assets/Icons/wish-gray.png";
import { useCartStore } from "../store";

interface Props {
  img: string;
  tag: string;
  price: string;
  slashP?: number;
}

export const CardCarrousel: FC<Props> = ({
  img,
  tag,
  price,
  // slashP,
}): JSX.Element => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleHover = () => {
    setActive(true);
  };

  const handleButtonClick = (tag:string) => {
    addToCart({name: tag});
  };

  const handleWishClick = () => {
    setColor(!color);
  };

  return (
    <div className="h-[433px] w-[262px] flex flex-col gap-2">
      <div className="h-[349px] w-[262px] relative bg-gray-200">
        <img
          src={img}
          alt="product"
          className="h-[349px]"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />

        {/* hover contents */}
        {/* ------------------------ */}
        {/* new */}
        <div className="w-[71px] h-[56px] absolute top-3 left-4 flex flex-col justify-center items-center gap-[6px]">
          <div className="flex justify-center items-center text-hairline1 px-3 py-1 uppercase bg-white text-primary-800 font-bold rounded">
            new
          </div>
          <div className="flex justify-center items-center text-hairline1 px-3 py-1 bg-green text-white font-bold rounded">
            -50%
          </div>
        </div>

        {/* wish icon */}
        <div
          onMouseEnter={handleHover}
          onClick={handleWishClick}
          className={`w-[32px] h-[32px] absolute top-3 right-4 ${
            active ? "flex" : "hidden"
          } justify-center items-center rounded-2xl bg-white`}
        >
          {color ? "❤" : <img src={wishIcon} alt="product" />}
        </div>

        {/* Add to cart button */}
        <button
          onMouseEnter={handleHover}
          onMouseLeave={() => setActive(false)}
          onClick={() => handleButtonClick(tag)}
          className={`w-[230px] h-[46px] absolute bottom-4 right-4 ${
            active ? "flex" : "hidden"
          } justify-center items-center rounded-lg bg-gray-700 text-white text-btnSm `}
        >
          Add to cart
        </button>
      </div>

      {/* content */}
      <div className="h-[72px] w-[262px] flex flex-col gap-[3px] ">
        <div className="flex gap-[2px]">
          {" "}
          <img src={rating} alt="product" />
          <img src={rating} alt="product" />
          <img src={rating} alt="product" />
          <img src={rating} alt="product" />
        </div>

        {/* tag */}
        <p
          className={`capitalize font-bold text-body2Semi ${
            color ? "text-blue" : ""
          }`}
        >
          {tag}
        </p>

        {/* price */}
        <div className="text-capS1">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};
