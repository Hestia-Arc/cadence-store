import pdt1 from "../../assets/products/product-10.png";
import { NewItem } from "../../components/NewItem";
import ratingIcon from "../../assets/Icons/Star Icon.png";
import {
  ButtonCart,
  ButtonStepper,
  ButtonWish,
} from "../../components/Elements";

export const ProductDetails = () => {
  return (
    <div className="h-[986px] flex gap-16 px-40">
      <ProductImages />
      <ProductContents />
    </div>
  );
};

// ----------------------------
// COMPONENTS
// ----------------------------

// ------------
// image content
// ------------
const ProductImages = () => {
  return (
    <div className=" w-1/2 flex flex-col gap-6 bg-gray-400">
      {/* large */}
      <div className="relative h-[529px] bg-gray-200">
        <NewItem posT="top-3" posL="left-4" />
        <img src={pdt1} alt="product" className=" h-[529px] w-[450px]" />
      </div>

      {/* small */}
      <div></div>
    </div>
  );
};

// -----------------
// content
// ------------------
const ProductContents = () => {
  return (
    <div className=" w-1/2">
      {/* product description  price */}
      <div className=" h-[248px] flex flex-col gap-4 pb-6 border-solid border-b-[1px] border-gray-300">
        {/* rating */}
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center">
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
            <img src={ratingIcon} alt="rating" />
          </div>
          <p className=" text-capR2">11 Reviews</p>
        </div>

        {/* product name */}
        <h3 className=" text-h4 ">Tray Table</h3>

        {/* description */}
        <p className=" text-body2Reg text-gray-400">
          Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.
        </p>

        {/* price */}
        <div className="flex items-center gap-3">
          <div className=" text-h6">$199.00</div>
          <div className=" text-[20px] font-medium font-poppins leading-7 text-gray-400 ">
            $400.00
          </div>
        </div>
      </div>

      {/* sizes */}
      <div className="h-[268px] flex flex-col gap-3 py-4">
        <h6 className=" text-body2Semi text-gray-400">Measurements</h6>
        <div className=" text-body1Reg font-semibold">17 1/2x20 5/8"</div>

        <h6 className=" text-body2Semi text-gray-400">Choose Color </h6>
        <div className=" text-body1Reg font-semibold">Black</div>

        <div className="h-[72px] bg-gray-300"></div>
      </div>

      {/* add to cart/wish/tabs */}
      <ProductCartWishBtns />
      <ProductMeta />
      <ProductTabs />
    </div>
  );
};

// product wish/cart btns
const ProductCartWishBtns = () => {
  return (
    <div className="h-[160px] flex flex-col gap-3 py-3">
      <div className="flex gap-6">
        <ButtonStepper>
          <p>stepper</p>
        </ButtonStepper>

        <ButtonWish>
          <p>Wish</p>
        </ButtonWish>
      </div>

      <div>
        <ButtonCart />
      </div>
    </div>
  );
};

// product meta
const ProductMeta = () => {
  return <div className="h-[80px] bg-green">ProductDetails</div>;
};

//product tabs
const ProductTabs = () => {
  return <div className="h-[348px] bg-blue">ProductDetails</div>;
};
