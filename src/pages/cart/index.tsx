import { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import { Footer } from "../../components/Footer";
import { Steps } from "./CartHeader";
import { CartDisplay } from "./CartDisplay";
import { useFlyMenu } from "../../contexts/FlyMenuContext";

function CartPage() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);
  const { active, id } = useFlyMenu();

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div>
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />

      <div className="min-h-[500px] sm:min-h-[1097px] px-4 sm:px-40 py-20 bg-gray-100">
        {/* <CartHeader /> */}
        <div className="h-[166px] w-[832] flex flex-col sm:items-center gap-10 overflow-hidden">
          <h3 className=" text-h3 font-poppins text-center">Cart</h3>

          {/* Cart Process */}
          <div className=" h-[68px] hidden sm:flex gap-8 ">
            <button>
              {" "}
              <Steps tag="Shopping cart" active={active} step={1} />
            </button>

            <button>
              {" "}
              <Steps tag="Checkout details" active={active} step={2} />
            </button>

            <button>
              {" "}
              <Steps tag="Order complete" active={active} step={3} />
            </button>
          </div>

          {/* mobile */}
          <div className="h-[68px] flex  ">
            {active === 1 && (
              <div className="flex gap-8">
              <Steps tag="Shopping cart" active={active} step={1} />
              <Steps tag="Checkout details" active={active} step={2} />

              </div>)}

            {active === 2 && (
              <div className="flex gap-8">
              <Steps tag="Checkout details" active={active} step={2} />
              <Steps tag="Order complete" active={active} step={3} />

              </div>
            )}

            {active === 3 && (
              <Steps tag="Order complete" active={active} step={3} />
            )}


          </div>
        </div>

        <CartDisplay id={id} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default CartPage;
