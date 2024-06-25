import { CardValue } from "../../components/cards/CardValue";
import vanIcon from '../../assets/Icons/fast delivery.png'
import cashIcon from '../../assets/Icons/money.png'
import lockIcon from '../../assets/Icons/lock 01.png'
import callIcon from '../../assets/Icons/call-1.png'

export const Values = () => {
  return (
    <section className="min-h-[316px] w-full flex flex-col sm:flex-row gap-5 items-center px-8 sm:px-40 py-12 bg-gray-200">
     <div className="w-full flex gap-2 sm:gap-5 " >
     <CardValue img={vanIcon} title="free shipping" tag="Order above $200" />
      <CardValue img={cashIcon} title="money-back" tag="30 days guarantee" />
     </div>
      
      <div className="w-full flex gap-2 sm:gap-5">
      <CardValue img={lockIcon} title="secure payments" tag="Secured by Stripe" />
      <CardValue img={callIcon} title="24/7 support" tag="Phone and Email support" />
      </div>
      
    </section>
  );
};
