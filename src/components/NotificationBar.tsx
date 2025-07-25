import ticketIcon from "../assets/Icons/ticket-percent-dark.png";
import arrowRightIcon from "../assets/Icons/arrow-right-blue.png";
import closeIcon from "../assets/Icons/close.png";
import { useAppDispatch, useAppSelector } from "../store";
import {
  hideNotice,
  notifySelector,
} from "../views/notification/notifySlice";

const NotificationBar = () => {
  const dispatch = useAppDispatch();
  const notice = useAppSelector(notifySelector);
  // const cardState = useNotification(state => state.card)

  return (
    <section
      className={`h-[40px] relative ${
        notice ? "flex" : "hidden"
      } justify-center items-center bg-gray-200 font-poppins font-semibold `}
    >
      {/*close */}
      <button
        onClick={() => dispatch(hideNotice())}
        className="hidden lg:block absolute top-2 right-3"
      >
        <img src={closeIcon} alt="icon" />
      </button>

      <div className=" flex justify-center items-center gap-[12px]">
        {/* <div className="flex items-center gap-[8px]">
          <div className="text-capS1"> ⚡Notice! Application In Development Mode... 🚧👷‍♀️🛠</div>
        </div> */}
        {/* text */}
        <div className="flex items-center gap-[8px]">
          <img src={ticketIcon} alt="icon" />
          <div className="text-capS1">30% off storewide -- Limited time!</div>
        </div>

        {/* button */}
        <button className="hidden sm:flex justify-center items-center gap-[2px] text-blue text-btnXS border-solid border-b-[1px] border-blue">
          <p>Shop Now</p>
          <img src={arrowRightIcon} alt="icon" />
        </button>

        {/* mobile close btn */}
        <button
          onClick={() => dispatch(hideNotice())}
          className="block lg:hidden"
        >
          <img src={closeIcon} alt="icon" />
        </button>
      </div>
    </section>
  );
};

export default NotificationBar;
