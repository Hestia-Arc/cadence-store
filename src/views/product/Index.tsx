import { ProductCarrousel } from "@components/ProductCarrousel";
import { ProductLoop } from "./ProductLoop";

function Product() {
  
  return (
    <div className=" bg-white text-gray-700">
      <ProductLoop />
      <ProductCarrousel
        tag={<div className="text-h5">You might also like</div>}
      />
    </div>
  );
}

export default Product;
