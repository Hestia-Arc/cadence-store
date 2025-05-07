import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ProductDetails } from "./ProductDetails";
// import { useAppDispatch, useAppSelector } from "../../store";
// import {
//   getProduct,
//   productsSelector,
// } from "../../features/products/productSlice";
import { useEffect, useState } from "react";
import { newProducts } from "../../features/data/newProducts";

export const ProductLoop = () => {
  const { productId } = useParams();
  // const dispatch = useAppDispatch();
  // const { product } = useAppSelector(productsSelector);
  const [productData, setProductData] = useState<{} | any>({});

  useEffect(() => {
    // dispatch(getProduct(productId));
    const filtered = newProducts?.find((item: { id: string | undefined }) => {
      return item?.id === productId;
    });

    setProductData(filtered);
  }, [productId]);

  return (
    <div className="h-[1042px] flex flex-col gap-3 pt-3 text-gray-700">
      <BreadCrumbs product={productData?.id?.slice(0,2)} />
      <ProductDetails product={productData} />
    </div>
  );
};
