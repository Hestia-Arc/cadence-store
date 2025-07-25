import banner from "../../assets/products/shop-hero.png";
import chevronRight from "../../assets/Icons/chevron-right-gray.png";

const grayStyle = " text-gray-400";
const imgStyle = " h-[20px]";

export const Header = () => {
  return (
    <div
      className={`min-h-[392px] flex justify-center items-center bg-gray-200  bg-center bg-no-repeat bg-cover   `}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex flex-col items-center gap-6 justify-center">
        {/* 1 */}
        <div className=" flex items-center gap-3 text-btnXS">
          <span className={grayStyle}>Home</span>
          <img src={chevronRight} alt="icon" className={imgStyle} />

          <span className=" font-semibold">Shop</span>
        </div>

        {/* 2 */}
        <h3 className=" text-[36px] font-semibold sm:text-h3">Shop Page</h3>

        {/* 3 */}
        <p className="text-center text-body1Reg">
          Let’s design the place you always imagined.
        </p>
      </div>
    </div>
  );
};
