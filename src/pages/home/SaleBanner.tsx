import { ButtonDark } from "../../components/Elements";
import saleBanner from "../../assets/products/product-4.png";
import { useNavigate } from "react-router-dom";

export const SaleBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[532px] flex flex-col sm:flex-row bg-gray-200">
      <div className="w-full sm:w-1/2 ">
        <img src={saleBanner} alt="sales" className="h-[367px] sm:h-[532px] " />
      </div>

      {/* content */}
      <div className="w-full sm:w-1/2 flex items-center  px-8 sm:px-0 sm:pl-16 py-14 sm:py-0">
        <div className="w-[452px] flex flex-col items-start gap-4">
          <p className="text-hairline1 font-bold uppercase text-blue">
            sales up to 35% off
          </p>
          <h4 className="text-h4 font-poppins">
            HUNDREDS of <br />
            New lower prices!
          </h4>
          <p className="text-body1Reg">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <ButtonDark
            text="shop now"
            onClick={() => {
              navigate("/shop");
            }}
          />
        </div>
      </div>
    </div>
  );
};
