import { ButtonPrimary, ButtonWish } from "../../../components/Elements";
import Rating from "../../../components/Elements/Rating";
import { NewItem } from "../../../components/NewItem";
import wishIcon from "../../assets/Icons/wish-dark.png";

function ProductCard({ product }: any) {
  return (
    <div className="w-[400px] h-[400px] flex ">
      {/* - img */}
      <div className=" flex-1 relative bg-gray-200">
        <NewItem posT="top-3" posL="left-4" />
        {product?.image && (
          <img
            src={product?.image}
            alt="product"
            className=" h-[565px] w-[450px]"
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

      {/* - content */}
      <div className=" flex-1">
        <Rating />
        {/* product name */}
        <h3 className=" text-h5 capitalize ">{product?.productName}</h3>

        {/* price */}
        <div className="flex items-center gap-3">
          <div className=" text-h6">${product?.price}.00</div>
          <div className=" text-[20px] font-medium font-poppins leading-7 text-gray-400 ">
            $400.00
          </div>
        </div>

        {/* description */}
        <div>
          <p className=" text-body2Reg text-gray-400">{product?.description}</p>
          <p className=" text-body2Reg text-gray-400">{product?.moreInfo}</p>
        </div>

        {/* ---- btns */}
        <div>
          <ButtonPrimary text="Add to Cart" />

          <ButtonWish>
            <img src={wishIcon} alt="" />
            <p>Wishlist</p>
          </ButtonWish>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
