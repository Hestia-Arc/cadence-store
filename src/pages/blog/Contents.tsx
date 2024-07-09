import pdt2 from "../../assets/products/blog-2.png";
import { Card } from "./Card";

function Contents() {
  return (
    <div className="h-[1683px] pt-6">
      {/* tag */}
      <div className="h-[40px] flex items-center gap-8">
        <span className="text-[14px] text-gray-700 font-bold border-b-2 border-gray-700">All Blog</span>
        <span className="text-[14px] text-gray-400 font-semibold">Featured</span>
      </div>

      {/* lists */}
      <div className="h-[1619px] flex flex-col gap-20 py-10">
        <div className="flex gap-[42px] flex-wrap">
          {Array(9)
            .fill(9)
            ?.map((_) => (
              <Card img={pdt2} title="Inside a beautiful kitchen organization" link="" />
            ))}
        </div>

        {/* see more */}
        <div className="flex justify-center">
          <div className="h-[40px] w-[163px] rounded-full flex justify-center items-center text-btnSm border border-gray-700">Show more</div>
        </div>
      </div>
    </div>
  );
}

export default Contents;
