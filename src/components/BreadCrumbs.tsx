import chevronRight from '../assets/Icons/chevron-right-gray.png'

const grayStyle = " text-gray-400"
const imgStyle = " h-[20px]"

export const BreadCrumbs = () => {
  return (
    <div className=" px-40">
      <div className=' flex items-center gap-3 text-btnXS'>
        <span className={grayStyle}>Home</span>
        <img src={chevronRight} alt="icon" className={imgStyle} />

        <span className={grayStyle}>Shop</span>
        <img src={chevronRight} alt="icon" className={imgStyle}/>

        <span className={grayStyle}>Living Room</span>
        <img src={chevronRight} alt="icon" className={imgStyle} />

        <span className=' font-semibold'>Product</span>
      </div>
    </div>
  )
}
