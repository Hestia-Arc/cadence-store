import newsBanner from "../assets/products/footer-bg.png";
import mailIcon from "../assets/Icons/mail.png";

export const Newsletter = () => {
  return (
    <div
      className={`min-h-[360px] flex justify-center items-center bg-gray-100  bg-center bg-no-repeat bg-cover   `}
      style={{ backgroundImage: `url(${newsBanner})` }}
    >
      <div className="h-[166px] xs:h-fit w-[540px] xs:w-[311px] flex flex-col items-center gap-7">
        <div className="h-[82px] xs:h-fit w-full flex flex-col items-center gap-1 xs:text-center">
          <h4 className="capitalize text-h4 xs:text-h6 font-semibold font-poppins">
            join our newsletter
          </h4>
          <p className="text-[18px] xs:text-[16px] font-normal font-inter">
            Sign up for deals, new products and promotions
          </p>
        </div>

        {/* form */}
        <form
          action=""
          className="h-[52px] w-[488px] xs:w-full border-solid border-b-2 border-gray-400 bg-primary-200"
        >
          <div className="h-[28px] flex justify-center items-center gap-2 ">
            <img src={mailIcon} alt="" />
            <input
              type="email"
              placeholder="Email address"
              className="h-[28px] w-[396px] bg-gray-200 outline-none"
            />
            <button className="text-gray-400 text-btnSm font-semibold">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
