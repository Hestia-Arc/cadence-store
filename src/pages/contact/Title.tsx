import chevronRight from "../../assets/Icons/chevron-right-gray.png";

const grayStyle = " text-gray-400";
const imgStyle = " h-[20px]";

function Title() {
  return (
    <div className="lg:h-[340px] flex flex-col gap-10 ">
      {/* 1 */}
        <div className=" flex items-center gap-3 text-btnXS">
          <span className={grayStyle}>Home</span>
          <img src={chevronRight} alt="icon" className={imgStyle} />

          <span className=" font-semibold">Contact Us</span>
        </div>

      {/* 2 */}
      <h2 className="lg:w-[834px] text-[30px] font-semibold lg:text-h3">
        We believe in sustainable <br className="hidden lg:block" /> decor. We’re passionate about life at
        home.
      </h2>

      {/* 3 */}
      <p className="lg:w-[834px] text-body2Reg">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
    </div>
  );
}

export default Title;
