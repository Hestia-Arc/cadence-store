// import pdt2 from "../../assets/products/product-11.png";
// import pdtRed from "../../assets/products/p-size-1.png";
// import pdtNude from "../../assets/products/p-size-2.png";
// import pdt3 from "../../assets/products/product-13.png";
// import pdt1 from "../../assets/products/product-10.png";

import { NewItem } from "../../components/NewItem";
import wishIcon from "../../assets/Icons/wish-dark.png";
import minusIcon from "../../assets/Icons/Minus.png";
import plusIcon from "../../assets/Icons/Add.png";
import {
  ButtonPrimary,
  ButtonStepper,
  ButtonWish,
} from "../../components/Elements";
import { FC } from "react";
import { IProduct } from "../../features/types";
import { useAppSelector } from "../../store";
import { productsSelector } from "../../features/products/productSlice";
import Rating from "../../components/Elements/Rating";

export const ProductDetails = ({ product }: { product: IProduct | null }) => {
  return (
    <div className="h-fit sm:h-[986px] flex flex-col sm:flex-row gap-16 px-4 sm:px-40">
      <ProductImages product={product} />
      <ProductContents product={product} />
    </div>
  );
};

// ----------------------------
// COMPONENTS
// ----------------------------

// ------------
// image content
// ------------
const ProductImages = ({ product }: { product: IProduct | null }) => {
  return (
    <div className=" w-full sm:w-1/2 flex flex-col gap-4">
      {/* large */}
      <div className="relative h-[414px] md:h-[565px] bg-gray-200">
        <NewItem posT="top-3" posL="left-4" isNew={product?.new} />
        {product?.image && (
          <img
            src={product?.image}
            alt="product"
            className=" h-[414px] md:h-[565px] w-fit" //w-[450px]
          />
        )}

        {!product?.image && (
          <div className="h-full w-full flex items-center justify-center text-gray-300 text-[12px] font-bold">
            <div className="flex items-center justify-center bg-gray-400 bg-opacity-50 rounded-full h-[80px] w-[80px]">
              No Image
            </div>
          </div>
        )}
      </div>

      {/* <hr /> */}

      {/* small */}
      <div className=" h-[349px] hidden sm:flex flex-wrap gap-4 ">
        {product?.image2 && (
          <img
            src={product?.image2}
            alt="product"
            className="w-[226px] h-[185px]"
          />
        )}
        {product?.image3 && (
          <img
            src={product?.image3}
            alt="product"
            className="w-[226px] h-[185px]"
          />
        )}{product?.image4 && (
          <img
            src={product?.image4}
            alt="product"
            className="w-[226px] h-[185px]"
          />
        )}{product?.image5 && (
          <img
            src={product?.image5}
            alt="product"
            className="w-[226px] h-[185px]"
          />
        )}
        {/* <img src={pdt3} alt="product" className="w-[226px] h-[185px]" />
        <img src={pdt2} alt="product" className="w-[226px] h-[185px]" />
        <img src={pdt2} alt="product" className="w-[226px] h-[185px]" /> */}

        {/* <img src={pdt3} alt="product" className="w-[230px]" /> */}
      </div>
    </div>
  );
};

// -----------------
// content
// ------------------
const ProductContents = ({ product }: { product: IProduct | null }) => {
  return (
    <div className=" w-full sm:w-1/2">
      {/* product description  price */}
      <div className=" md:h-[205px] flex flex-col gap-1 pb-4 border-solid border-b-[1px] border-gray-300">
        {/* rating */}
        <Rating rv={product?.reviews} />

        {/* product name */}
        <h3 className=" text-h5 capitalize ">{product?.productName}</h3>

        {/* description */}
        <div>
          <p className=" text-body2Reg text-gray-400">{product?.description}</p>
          {/* <p className=" text-body2Reg text-gray-400">{product?.moreInfo}</p> */}
        </div>

        {/* price */}
        <div className="flex items-center gap-3">
          <div className=" text-h6">${product?.price}.00</div>
          {/* <div className=" text-[20px] font-medium font-poppins leading-7 text-gray-400 ">
            $400.00
          </div> */}
        </div>
      </div>

      {/* sizes */}
      <div className="h-[235px] flex flex-col gap-1 py-2">
        <h6 className=" text-body2Semi text-gray-400">Measurements</h6>
        <div className=" text-body1Reg font-semibold">
          {product?.measurement === "" ? "None" : product?.measurement}
        </div>
        {/* 17 1/2x20 5/8" */}

        <h6 className=" text-body2Semi text-gray-400">Choose Color </h6>
        <div className=" text-body1Reg font-semibold">
          {product?.color?.map((item, i) => (
            <span key={i} className="capitalize">
              {`${item} `}{" "}
            </span>
          ))}
        </div>

        <div className="h-[72px] bg-gray-300"></div>
      </div>

      {/* add to cart/wish/tabs */}
      <ProductCartWishBtns />
      <ProductMeta />
      <ProductTabs productData={product} />
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
        <ButtonPrimary text="Add to Cart" />
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
const ProductTabs = (productData: {productData: IProduct | null}) => {
  return (
    <div className="h-[332px]">
      <TabItems tag="Additional Info" active={true} content={productData} />
      <TabItems tag="Questions" active={false} />
      <TabItems tag="Reviews(11)" active={false} />
    </div>
  );
};

interface ITabProps {
  tag: string;
  active: boolean;
  content?: any
}

const TabItems: FC<ITabProps> = ({ tag, active, content}) => {
  const { product } = useAppSelector(productsSelector);

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
              {content?.moreInfo}
              {/* You can use the removable tray for serving. The design makes it
              easy to put the tray back after use since you place it directly on
              the table frame without having to fit it into any holes. */}
            </p>
          </div>

          {/* -------v */}
          <div>
            <h6 className=" text-gray-400">Packaging</h6>
            <div className=" font-normal mt-1">
              <p>
                Width: {product?.width} " Height: {product?.height} " Length:{" "}
                {product?.length} "
              </p>
              <p>Weight: {product?.weight}</p>
              <p>Package(s): 1</p>
              {/* <p>Width: 20 " Height: 1 ½ " Length: 21 ½ "</p>
              <p>Weight: 7 lb 8 oz</p>
              <p>Package(s): 1</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
