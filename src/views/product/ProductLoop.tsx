import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ProductDetails } from "./ProductDetails";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { getProduct, productsSelector } from "./productSlice";

export const ProductLoop = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId, dispatch]);

  return (
    <div className="sm:h-[1042px] flex flex-col gap-3 pt-3 text-gray-700">
      <BreadCrumbs product={product?.id?.slice(0,2)} />
      <ProductDetails product={product} />
    </div>
  );
};
