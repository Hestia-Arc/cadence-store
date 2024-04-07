import { CartProcess } from "./CartProcess"

export const CartHeader = () => {
  return (
    <div className="h-[166px] w-[832] flex flex-col items-center gap-10 bg-gray-300">
      <h3 className=" text-h3">Cart</h3>
      <CartProcess/>
    </div>
  )
}
