import pdt1 from "../../assets/products/product-10.png";
import pdt2 from "../../assets/products/product-11.png";
import pdtRed from "../../assets/products/p-size-1.png";
import pdtNude from "../../assets/products/p-size-2.png";
import pdt3 from "../../assets/products/product-13.png";
// import pdt1 from "../../assets/products/product-10.png";

import { NewItem } from "../../components/NewItem";
import ratingIcon from "../../assets/Icons/Star Icon.png";
import wishIcon from "../../assets/Icons/wish-dark.png";
import minusIcon from "../../assets/Icons/Minus.png";
import plusIcon from "../../assets/Icons/Add.png";
import {
  ButtonCart,
  ButtonStepper,
  ButtonWish,
} from "../../components/Elements";
import { FC } from "react";

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
    <div className=" w-1/2 flex flex-col gap-4">
      {/* large */}
      <div className="relative h-[565px] bg-gray-200">
        <NewItem posT="top-3" posL="left-4" />
        <img src={pdt1} alt="product" className=" h-[565px] w-[450px]" />
      </div>

      {/* <hr /> */}

      {/* small */}
      <div className=" h-[349px] flex flex-wrap gap-4 ">
        <img src={pdt2} alt="product" className="w-[226px] h-[185px]" />
        <img src={pdt3} alt="product" className="w-[226px] h-[185px]" />
        <img src={pdt2} alt="product" className="w-[226px] h-[185px]" />
        <img src={pdt2} alt="product" className="w-[226px] h-[185px]" />

        {/* <img src={pdt3} alt="product" className="w-[230px]" /> */}
      </div>
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
      <div className=" h-[205px] flex flex-col gap-1 pb-4 border-solid border-b-[1px] border-gray-300">
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
        <h3 className=" text-h5 ">Tray Table</h3>

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
      <div className="h-[235px] flex flex-col gap-1 py-2">
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
    <div className="h-[142px] flex flex-col gap-3 py-2">
      <div className="flex gap-4">
        <ButtonStepper>
          <img src={minusIcon} alt="" />
          <p>1</p>
          <img src={plusIcon} alt="" />
        </ButtonStepper>

        <ButtonWish>
          <img src={wishIcon} alt="" />
          <p>Wishlist</p>
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
  return (
    <div className="h-[76px] flex flex-col gap-2 py-2 text-capR2">
      <div className="flex gap-24">
        <span className=" text-gray-400">SKU</span>
        <span>1117</span>
      </div>

      <div className="flex gap-14">
        <span className=" text-gray-400">CATEGORY</span>
        <span className="capitalize">Living room, bedroom</span>
      </div>
    </div>
  );
};

//product tabs
const ProductTabs = () => {
  return (
    <div className="h-[332px]">
      <TabItems tag="Additional Info" active={true} />
      <TabItems tag="Questions" active={false} />
      <TabItems tag="Reviews(11)" active={false} />
    </div>
  );
};

interface ITabProps {
  tag: string;
  active: boolean;
}

const TabItems: FC<ITabProps> = ({ tag, active }) => {
  return (
    <div>
      {/* tab title */}
      <div className=" border-solid border-b-[1px] border-gray-700 pb-1 text-btnMd font-semibold">
        {tag}
      </div>

      {/* tab contents */}
      {active && (
        <div className=" h-[212px] py-1 flex flex-col gap-3 text-capR2">
          <div>
            <h6 className=" text-gray-400">Details</h6>
            <p className=" font-normal mt-1">
              You can use the removable tray for serving. The design makes it
              easy to put the tray back after use since you place it directly on
              the table frame without having to fit it into any holes.
            </p>
          </div>

          {/* -------v */}
          <div>
            <h6 className=" text-gray-400">Packaging</h6>
            <div className=" font-normal mt-1">
              <p>Width: 20 " Height: 1 ½ " Length: 21 ½ "</p>
              <p>Weight: 7 lb 8 oz</p>
              <p>Package(s): 1</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
