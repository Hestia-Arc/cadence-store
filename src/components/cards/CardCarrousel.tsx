import { FC, useState } from "react";
import rating from "../../assets/Icons/Star Icon.png";
import wishIcon from "../../assets/Icons/wish-gray.png";
// import { useCartStore } from "../../features";
import { useNavigate } from "react-router-dom";
import { NewItem } from "../NewItem";
import { useAppDispatch } from "../../store";
import { addToCart } from "../../features/cart/cartSlice";
import { IProduct } from "../../features/types";

interface Props {
  index: string;
  img: string | undefined;
  tag: string;
  price: number;
  product?: IProduct;
  slashP?: number;
  className?: string;
  imgStyle?: string;
  promo?: string;
}

export const CardCarrousel: FC<Props> = ({
  index,
  img,
  tag,
  price,
  product,
  className,
  imgStyle,
  promo,
  // slashP,
}): JSX.Element => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const addToCart = useCartStore((state) => state.addToCart);

  const handleHover = () => {
    setActive(true);
  };

  const handleButtonClick = () => {
    // console.log(product)
    dispatch(addToCart(product));
  };

  const handleWishClick = () => {
    setColor(!color);
  };

  const handleNavigate = () => {
    navigate(`/product/${index}`);
  };

  return (
    <div
      key={index}
      className={`h-[433px] w-[262px] flex flex-col gap-2 ${className}`}
    >
      <div className={`h-[349px] w-[262px] relative bg-gray-200 ${imgStyle}`}>
        {img && (
          <img
            src={img}
            alt="product"
            className="h-[349px]"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => handleNavigate()}
          />
        )}

        {!img && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => handleNavigate()}
            className="h-full w-full flex items-center justify-center text-gray-300 text-[12px] font-bold"
          >
            <div className="flex items-center justify-center bg-gray-400 bg-opacity-50 rounded-full h-[80px] w-[80px]">
              No Image
            </div>
          </div>
        )}

        {/* hover contents */}
        {/* ------------------------ */}
        {/* new */}
        {promo?.length === 0 && <NewItem posT="top-3" posL="left-4" />}

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
          onClick={handleButtonClick}
          className={`w-[230px] h-[46px] absolute bottom-4 right-4 ${
            active ? "flex" : "hidden"
          } justify-center items-center rounded-lg bg-gray-700 text-white text-btnSm `}
        >
          Add to cart
        </button>
      </div>

      {/* content */}
      <div className="h-[72px] w-[262px] flex flex-col gap-[3px] ">
        <div className="flex gap-[2px] mt-1">
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

        {/* price $*/}
        <div className="text-capS1">
          <p>${price}.00</p>
        </div>
      </div>
    </div>
  );
};
