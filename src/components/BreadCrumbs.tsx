import chevronRight from '../assets/Icons/chevron-right-gray.png'

const grayStyle = " text-gray-400"
const imgStyle = " h-[20px]"

export const BreadCrumbs = ({product}: {product: string}) => {

  return (
    <div className=" px-4 sm:px-40">
      <div className=' flex items-center gap-1 lg:gap-3 text-btnXS'>
        <span className={grayStyle}>Home</span>
        <img src={chevronRight} alt="icon" className={imgStyle} />

        <span className={grayStyle}>Shop</span>
        <img src={chevronRight} alt="icon" className={imgStyle}/>

        <span className={grayStyle}>
          {product === "LR" && "Living Room"}
          {product === "BR" && "Bed Room"}
          {product === "KT" && "Kitchen"}
          {product === "OD" && "Outdoors"}
          {/* {product === "LR" && "Living Room"} */}
          </span>
        <img src={chevronRight} alt="icon" className={imgStyle} />

        <span className=' font-semibold'>Product</span>
      </div>
    </div>
  )
}
