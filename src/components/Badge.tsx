// import { useCartStore } from "../features"

import { cartSelector } from "../views/cart/cartSlice"
import { useAppSelector } from "../store"

export const Badge = () => {
  const {cart} = useAppSelector(cartSelector )
  return (
    <div className='w-5 h-5 flex items-center justify-center bg-primary-800 rounded-3xl text-white text-[10px] font-bold'>{cart.length ? cart.length : 0}</div>
  )
}
