import { FC, useEffect, useState } from "react";
import wishIcon from "../../assets/Icons/wish-gray.png";
import checkedIcon from "../../assets/Icons/item-check.png";
import { useNavigate } from "react-router-dom";
import { NewItem } from "../NewItem";
import { useAppDispatch, useAppSelector } from "../../store";
import { addToCart } from "../../views/cart/cartSlice";
import { addWishList, userSelector } from "../../views/user/userSlice";
import { RatingMain } from "../Elements/Rating";

interface Props {
  index: string | number;
  img: string | undefined;
  tag: string;
  price: number;
  product?: any;
  slashP?: string;
  className?: string;
  imgStyle?: string;
  mainImgStyle?: string;
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
  mainImgStyle,
  promo,
  // slashP,
}): JSX.Element => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const userData = useAppSelector(userSelector);
  const { wishList } = userData;
  const [wish, setWish] = useState<any>({});
  // const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const filterWishList = wishList?.filter((item) => item.tag === tag);

    setWish(filterWishList[0]);
  }, [wishList]);

  const handleHover = () => {
    setActive(true);
  };

  const handleButtonClick = () => {
    // console.log(product)
    setIsAdded(true);
    dispatch(addToCart(product));
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleWishClick = () => {
    // setColor(!color);
    dispatch(addWishList(product));
    // setTimeout(() => {
    //   setColor(false);
    // }, 1500);
  };

  const handleNavigate = () => {
    navigate(`/product/${index}`);
  };

  return (
    <div
      key={index}
      className={` h-[433px] w-[262px] flex flex-col gap-2 ${className}`} >

      <div className={`h-[349px] w-[262px] relative bg-gray-200 ${imgStyle}`}>

        {img && (
          <img
            src={img}
            alt="product"
            className={`h-[349px] ${mainImgStyle}`}
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
          className={`w-[32px] h-[32px] absolute top-3 right-2 sm:right-4 ${
            active ? "flex" : "hidden"
          } justify-center items-center rounded-2xl bg-white`}
        >
          {wish?.tag === tag ? "❤" : <img src={wishIcon} alt="product" />}
        </div>

        {/* Add to cart button */}
        <button
          onMouseEnter={handleHover}
          onMouseLeave={() => setActive(false)}
          onClick={handleButtonClick}
          className={`w-[140px] sm:w-[230px] h-[40px] sm:h-[46px] absolute bottom-2 sm:bottom-4 right-2 sm:right-4 transition-all duration-500 shadow-md border ${
            active || isAdded ? "flex" : "hidden"
          } justify-center items-center rounded-lg bg-gray-700 text-white text-[12px] sm:text-btnSm `}
          style={{
            // backgroundColor: isAdded ? "#38cb8998" : "",
            backgroundColor: isAdded ? "transparent" : "",
            color: isAdded ? "#38cb89" : "",

            // color: isAdded ? "#e8ecef" : "",
          }}
        >
          {isAdded && <img src={checkedIcon} className="h-10 w-10" />}
          {isAdded ? "Item Added" : "Add to cart"}
        </button>
      </div>

      {/* content */}
      <div className="h-[72px] w-full flex flex-col gap-[3px] ">
        <RatingMain rv={product?.reviews} />

        {/* tag */}
        <p className={`capitalize font-bold text-[15px] sm:text-body2Semi  `}>
          {tag?.length > 25 ? `${tag?.slice(0, 25)}...` : tag}
        </p>

        {/* price $*/}
        <div className="text-capS1">
          <p>${price}.00</p>
        </div>
      </div>
    </div>
  );
};
