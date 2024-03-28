import ticketIcon from "../assets/Icons/ticket-percent.png";
import arrowRightIcon from "../assets/Icons/arrow-right.png";

const NotificationBar = () => {
  return (
    <section className="h-[40px] flex justify-center items-center bg-gray-200 font-poppins font-semibold ">
      <div className="flex justify-center items-center">
        {/* text */}
        <div className="flex">
          <img src={ticketIcon} alt="icon" />
          <p className="">30% off storewide -- Limited time!</p>
        </div>

        {/* button */}
        <button className="flex justify-center items-center text-justify text-blue">
          <p>Shop Now</p>
          <img src={arrowRightIcon} alt="icon" />
        </button>
      </div>
    </section>
  );
};

export default NotificationBar;
