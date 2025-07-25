import { CardCarrousel } from "./cards/CardCarrousel";
import { ButtonDark } from "./Elements";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../store";
// import { productsSelector } from "../features/products/productSlice";
import { products } from "../views/data/ProductsData";

interface ICarrouselTagProp {
  tag: JSX.Element;
}
export const ProductCarrousel: FC<ICarrouselTagProp> = ({ tag }) => {
  const navigate = useNavigate();
  // const { products } = useAppSelector(productsSelector);

  return (
    <section className="h-[665px] pt-[48px] ml-8  sm:ml-40 flex flex-col gap-11 border-solid border-b-2 border-gray-600 ">
      <div className="flex justify-between items-end pr-40">
        <div className="text-h4 font-poppins">{tag}</div>
        <div className="hidden sm:block">
          <ButtonDark
            text="More Products"
            onClick={() => {
              navigate("/shop");
            }}
          />
        </div>
      </div>

      {/* carousel */}
      <div className="h-[433px] flex gap-5 overflow-hidden">
        {products?.slice(0, 4).map((item, index) => {
          return (
            <div key={index}>
              <CardCarrousel
                index={item.id}
                img={item.image}
                tag={item.productName}
                price={item.price}
                product={item}
                slashP={"400.0"}
              />
            </div>
          );
        })}

        {/* <CardCarrousel img={pdt2} tag="table lamp" price="24.99" slashP={0} />
        <CardCarrousel
          img={pdt3}
          tag="beige table lamp"
          price="25.00"
          slashP={0}
        />
        <CardCarrousel
          img={pdt4}
          tag="bamboo basket"
          price="195.00"
          slashP={0}
        />
        <CardCarrousel img={pdt5} tag="itchen lamp" price="30.00" slashP={0} /> */}
      </div>
    </section>
  );
};
