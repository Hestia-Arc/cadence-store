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
import { SetStateAction, useEffect, useState } from "react";
import searchIcon from "../../../assets/Icons/search.png";
import Pagination from "../../../components/Pagination";

// import { getProducts } from "../../../features/products/productAPIs";

let PageSize = 9;

function Products() {
  // const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { products } = useAppSelector(productsSelector);
  const [clicked, setClicked] = useState("all rooms");
  const [clickedRange, setClickedRange] = useState<{
    min: number;
    max: number;
  } | null>({ min: 0, max: 999999999 });
  const [query, setQuery] = useState("");

  const handleSearch = (e: any) => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // dispatch(getProducts());
    setPage(1);
  }, [clicked, query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);


  // -------- filter category
  const filteredCategory =
    clicked === "all rooms"
      ? products
      : products?.filter((item) => {
          return item?.category?.includes(clicked);
        });

  // -------- filter price based on category
  const filteredPrice = filteredCategory?.filter((item) => {
    if (clickedRange?.min === 0 && clickedRange?.max === 99) {
      return item.price >= 1 && item.price <= 99;
    } else if (clickedRange?.min === 100 && clickedRange?.max === 199) {
      return item.price >= 100 && item.price <= 199;
    } else if (clickedRange?.min === 200 && clickedRange?.max === 299) {
      return item.price >= 200 && item.price <= 299;
    } else if (clickedRange?.min === 300 && clickedRange?.max === 399) {
      return item.price >= 300 && item.price <= 399;
    } else if (clickedRange?.min === 400 && clickedRange?.max === 999999999) {
      return item.price >= 400 && item.price <= 999999999;
    } else {
      return item.price >= 0 && item.price <= 999999999;
    }
  });

  // -------- filter search based on both category  price
  const filteredSearch =
    query === ""
      ? filteredPrice
      : filteredPrice?.filter((item) => {
          return item?.productName?.toLowerCase().startsWith(query);
        });

  // ---------- current data to display for pagination
  const firstPageIndex = (page - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentPageData = filteredSearch?.slice(firstPageIndex, lastPageIndex);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className=" min-h-28 max-h-[1707px] flex pt-[60px] pb-[100px]">
      {/* filter */}
      <Filter
        clickedCategory={(value: any) => setClicked(value)}
        priceRange={(value: any) => setClickedRange(value)}
      />

      {/* products */}
      <div className="min-h-28 w-[820px] flex flex-col gap-10">
        <div className="h-[40px] w-full flex justify-between">
          {/* tag */}
          <div className=" text-body1Semi font-bold capitalize">{clicked}</div>
          {/* <p>
            {filteredSearch?.length} .... {page}
          </p> */}

          {/* grid */}
          <div className="w-[540px] h-full flex item-end justify-end gap-3">
            {/* sort */}
            {/* <div className="flex items-center gap-1 border rounded shadow-sm text-body2Semi p-1">
              <div>Sort by</div>
              <img src={chevronDown} alt="icon" className="h-[20px] w-[20px]" />
            </div> */}

            {/* search */}
            <div className="w-[250px] flex items-center gap-1 border bg-gray-200 shadow-sm rounded">
              <input
                type="search"
                placeholder="Search products..."
                className=" w-[89%] h-full text-[15px] italic pl-1 bg-gray-200 !text-gray-500 outline-none"
                value={query}
                onChange={handleSearch}
                name=""
                id=""
              />
              <img src={searchIcon} alt="icon" className="h-4 w-4" />
            </div>

            {/* grid type */}
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
        <div className="min-h-28 max-h-[1310px] overflow-y-hidden flex gap-[13px] flex-wrap">
          {filteredSearch?.length > 0 ? (
            currentPageData?.map((item, index) => {
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
          ) : (
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
            <div className=" h-[450px] w-full flex justify-center items-center shadow-2xl bg-gray-300 rounded">
              <div className=" text-[24px] text-gray-400 font-poppins">
                No products available.{" "}
              </div>
            </div>
          )}
        </div>

        {/* see more */}
        {filteredSearch?.length > 0 && (
          <div className="h-[42px] flex justify-center mt-10">
            <Pagination
              totalLength={filteredSearch.length}
              pageSize={PageSize}
              currentPage={page}
              onPageChange={(value: SetStateAction<number>) => setPage(value)}
            />

            {/* <div className="h-[40px] w-[163px] rounded-full flex justify-center items-center text-btnSm border border-gray-700">
              Show more
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
