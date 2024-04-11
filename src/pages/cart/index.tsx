import { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import { Footer } from "../../components/Footer";
import { Steps } from "./CartHeader";
import { CartDisplay, StepOne, StepThree, StepTwo } from "./CartDisplay";

function CartPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [id, setId] = useState(<StepOne />);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div>
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />

      {/* cart */}
      <div className=" h-[1097px] px-40 py-20 bg-gray-100">
        {/* <CartHeader /> */}
        <div className="h-[166px] w-[832] flex flex-col items-center gap-10">
          <h3 className=" text-h3 font-poppins">Cart</h3>

          {/* Cart Process */}
          <div className="h-[68px] flex gap-8">
            <button
              onClick={() => {
                setId(<StepOne />);
                setActive(1);
              }}
            >
              {" "}
              <Steps tag="Shopping cart" active={active} step={1} />
            </button>

            <button
              onClick={() => {
                setId(<StepTwo />);
                setActive(2);
              }}
            >
              {" "}
              <Steps tag="Checkout details" active={active} step={2} />
            </button>

            <button
              onClick={() => {
                setId(<StepThree />);
                setActive(3);
              }}
            >
              {" "}
              <Steps tag="Order complete" active={active} step={3} />
            </button>
          </div>
        </div>

        {/* <CartDisplay /> */}
        <CartDisplay id={id} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default CartPage;
