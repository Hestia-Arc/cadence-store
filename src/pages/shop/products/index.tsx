import { CardCarrousel } from "../../../components/cards";
// import pdt1 from "../../../assets/products/product-2.png";
import grid9 from "../../../assets/products/grid-9.png";
import grid4 from "../../../assets/products/grid-4.png";
import grid2V from "../../../assets/products/grid-2-vert.png";
import grid2H from "../../../assets/products/grid-2-hoz.png";
import chevronDown from "../../../assets/Icons/chevron-down-dark.png";
import Filter from "./Filter";
import { useAppSelector } from "../../../store";
import { productsSelector } from "../../../features/products/productSlice";
import { useEffect, useState } from "react";
// import { getProducts } from "../../../features/products/productAPIs";

function Products() {
  // const dispatch = useAppDispatch();
  const { products } = useAppSelector(productsSelector);
  const [clicked, setClicked] = useState("all rooms");
  const [clickedRange, setClickedRange] = useState<{min: number, max: number} | null>({min: 0, max: 999999999});

  

  useEffect(() => {
    // dispatch(getProducts());
  }, []);

  const filteredProducts =
    clicked === "all rooms"
      ? products
      : products?.filter((item) => {
          return item?.category?.includes(clicked);
        });

  const sortedProducts = filteredProducts?.filter(item => {

    if(clickedRange?.min === 0 && clickedRange?.max === 99) {
    return item.price >= 1 && item.price <=99
    } else if(clickedRange?.min === 100 && clickedRange?.max === 199) {
      return item.price >= 100 && item.price <=199
      } else if(clickedRange?.min === 200 && clickedRange?.max === 299) {
        return item.price >= 200 && item.price <=299
        }else if(clickedRange?.min === 300 && clickedRange?.max === 399) {
          return item.price >= 300 && item.price <=399
          } else if(clickedRange?.min === 400 && clickedRange?.max === 999999999) {
            return item.price >= 400 && item.price <=999999999
            } else {
            return item.price >= 0 && item.price <=999999999

            }
  })

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
      <Filter clickedCategory={(value: any) => setClicked(value)} priceRange={(value: any) => setClickedRange(value)} />

      {/* products */}
      <div className="min-h-28 w-[820px] flex flex-col gap-10">
        <div className="h-[40px] w-full flex justify-between">
          {/* tag */}
          <div className=" text-body1Semi font-bold capitalize">{clicked}</div>
          <p>{clickedRange?.min}</p>
          <p>{clickedRange?.max}</p>


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
        <div className="min-h-28 max-h-[1310px] overflow-hidden flex gap-[13px] flex-wrap">
          {filteredProducts?.length > 0
            ? sortedProducts?.map((item, index) => {
                return (
                  <div key={index}>
                    <CardCarrousel
                      index={item.id}
                      img={item.image}
                      tag={item.productName}
                      price={item.price}
                      slashP={400.0}
                      product={item}
                      className="!h-[425px] !w-[256px] !shadow"
                      imgStyle="!h-[340px] !w-[256px]"
                      promo={item.new}
                    />
                  </div>
                );
              })
            :
            
            // Array(9)
            //     .fill(9)
            //     ?.map((i) => (
            //       <CardCarrousel
            //         index={i}
            //         img={pdt1}
            //         tag="loveseat sofa"
            //         price="199.00"
            //         slashP={400.0}
            //         // product={item}
            //       />
            //     ))
                (<div>No products available... </div>)
                }
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
