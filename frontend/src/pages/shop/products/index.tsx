import { CardCarrousel } from "../../../components/cards";
import pdt1 from "../../../assets/products/product-2.png";

function Products() {
  return (
    <div className="h-[1707px] flex pt-[60px] pb-[100px]">
      {/* filter */}
      <div className="w-[200px] h-[582px] flex flex-col gap-8 border"></div>

      {/* products */}
      <div className="h-[1547px] w-[820px] flex flex-col gap-10 border">
        <div className="h-[40px] w-full border border-green"> tag</div>
        {/* list */}
        <div className="flex gap-[10px] flex-wrap">
        {Array(9)
          .fill(9)
          ?.map((_, i) => (
            <CardCarrousel
              img={pdt1}
              tag="loveseat sofa"
              price="199.00"
              slashP={400.0}
              
            />
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default Products;
