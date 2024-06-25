import ticketIcon from "../assets/Icons/ticket-percent-dark.png";
import arrowRightIcon from "../assets/Icons/arrow-right-blue.png";
import closeIcon from "../assets/Icons/close.png";
import { useNotification } from "../features";


const NotificationBar = () => {
  const hideCard = useNotification(state => state.hideCard)
  const cardState = useNotification(state => state.card)


  return (
    <section className={`h-[40px] relative ${cardState ? "flex" : "hidden"} justify-center items-center bg-gray-200 font-poppins font-semibold `}>
      
      {/*close */}
      <img src={closeIcon} alt="icon" className="absolute top-2 right-3" onClick={() => hideCard()} />


      <div className=" flex justify-center items-center gap-[12px]">
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

      </div>
    </section>
  );
};

export default NotificationBar;
