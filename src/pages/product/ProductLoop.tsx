import { BreadCrumbs } from "../../components/BreadCrumbs"
import { ProductDetails } from "./ProductDetails"

export const ProductLoop = () => {
  return (
    <div className="h-[1042px] flex flex-col gap-3 pt-3 text-gray-700">
      <BreadCrumbs/>
      <ProductDetails/>
    </div>
  )
}
