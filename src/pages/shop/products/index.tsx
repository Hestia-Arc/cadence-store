import { CardCarrousel } from "../../../components/cards";
import pdt1 from "../../../assets/products/product-2.png";
import grid9 from "../../../assets/products/grid-9.png";
import grid4 from "../../../assets/products/grid-4.png";
import grid2V from "../../../assets/products/grid-2-vert.png";
import grid2H from "../../../assets/products/grid-2-hoz.png";
import chevronDown from "../../../assets/Icons/chevron-down-dark.png";
import Filter from "./Filter";
import { useAppSelector } from "../../../store";
import { productsSelector } from "../../../features/products/productSlice";
import { useEffect } from "react";
// import { getProducts } from "../../../features/products/productAPIs";

function Products() {
  // const dispatch = useAppDispatch();
  const { products } = useAppSelector(productsSelector);

  useEffect(() => {
    // dispatch(getProducts());
  }, []);

  // console.log(products)

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className=" min-h-28 max-h-[1707px] flex pt-[60px] pb-[100px]">
      {/* filter */}
      <Filter />

      {/* products */}
      <div className="min-h-28 w-[820px] flex flex-col gap-10">
        <div className="h-[40px] w-full flex justify-between">
          {/* tag */}
          <div className=" text-body1Semi font-bold">Living Room</div>

          {/* grid */}
          <div className="w-[290px] h-full flex item-end justify-between">
            <div className="flex items-center gap-1 text-body2Semi">
              <div>Sort by</div>
              <img src={chevronDown} alt="icon" className="h-[20px] w-[20px]" />
            </div>

            <div className="w-[184px] h-full rounded-sm border border-gray-300 flex items-center">
              <div className="w-[46px] h-full bg-gray-200 flex justify-center items-center">
                {" "}
                <img src={grid9} alt="icon" />
              </div>
              <div className="w-[46px] h-full border-x-[1px] border-gray-300  flex justify-center items-center">
                {" "}
                <img src={grid4} alt="icon" />
              </div>

              <div className="w-[46px] h-full border-r-[1px] border-gray-300   flex justify-center items-center">
                {" "}
                <img src={grid2V} alt="icon" />
              </div>

              <div className="w-[46px] h-full  flex justify-center items-center">
                {" "}
                <img src={grid2H} alt="icon" />
              </div>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="flex gap-[10px] flex-wrap">
          {products?.length > 0
            ? products?.map((item, index) => {
                return (
                  <div key={index}>
                    <CardCarrousel
                    index={item.id}
                      img={item.image}
                      tag={item.productName}
                      price={item.price}
                      slashP={400.0}
                      product={item}
                    />
                  </div>
                );
              })
            : Array(9)
                .fill(9)
                ?.map(( i) => (
                  <CardCarrousel
                  index={i}
                    img={pdt1}
                    tag="loveseat sofa"
                    price="199.00"
                    slashP={400.0}
                    // product={item}

                  />
                ))}
        </div>

        {/* see more */}
        <div className="flex justify-center mt-10">
          <div className="h-[40px] w-[163px] rounded-full flex justify-center items-center text-btnSm border border-gray-700">
            Show more
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
