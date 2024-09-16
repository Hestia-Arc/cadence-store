import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ProductDetails } from "./ProductDetails";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  getProduct,
  productsSelector,
} from "../../features/products/productSlice";
import { useEffect } from "react";

export const ProductLoop = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(productsSelector);

  useEffect(() => {
    // console.log(productId);
    dispatch(getProduct(productId));
  }, [productId]);

  return (
    <div className="h-[1042px] flex flex-col gap-3 pt-3 text-gray-700">
      <BreadCrumbs />
      <ProductDetails product={product} />
    </div>
  );
};
