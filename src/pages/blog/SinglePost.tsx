import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import { Blog } from "../home/Blog";
import b1 from "../../assets/products/blog-tub.png";
import b2 from "../../assets/products/blog-tub2.png";
import b3 from "../../assets/products/blog-tub3.png";
import b4 from "../../assets/products/blog-towel.png";

function SinglePost() {
  const [isCartBarOpen, setIsCartBarOpen] = useState(false);

  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen);
  };

  return (
    <div className=" bg-white text-gray-700">
      <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
      <div className="  px-40">
        <BreadCrumb />
        <Header />
        <Content />
      </div>
      <Blog tag="You might also like " />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default SinglePost;

// ===========================
import chevronRight from "../../assets/Icons/chevron-right-gray.png";

const grayStyle = " text-gray-400";
const imgStyle = " h-[20px]";

const BreadCrumb = () => {
  return (
    <div className=" h-6 flex items-center gap-3 text-btnXS">
      <span className={grayStyle}>Home</span>
      <img src={chevronRight} alt="icon" className={imgStyle} />

      <span className={grayStyle}>Blog</span>
      <img src={chevronRight} alt="icon" className={imgStyle} />

      <span className=" font-semibold">
        How to make a busy bathroom a place to relax
      </span>
    </div>
  );
};

//======================== HEADER
const Header = () => {
  return (
    <div className=" h-[202px] flex flex-col gap-6 mt-[56px] mb-10">
      <div className=" text-hairline2 font-semibold uppercase">article</div>

      <h2 className=" text-h3 w-[834px]">
        How to make a busy bathroom a place to relax
      </h2>

      <div className="h-[26px] flex gap-12 border"></div>
    </div>
  );
};

//======================== CONTENT
const Content = () => {
  return (
    <div className="text-[16px] font-semibold mt-[56px] mb-10 ">
      {/* -------------- 1 */}
      <div className=" mb-10">
        <div className="min-h-[446px]">
          <img src={b1} alt="icon" />
        </div>

        {/*  */}
        <p className="mt-4">
          Your bathroom serves a string of busy functions on a daily basis. See
          how you can make all of them work, and still have room for comfort and
          relaxation.
        </p>

        <div className="mt-4">
          <h6 className="text-h6">A cleaning hub with built-in ventilation</h6>
          <p className="mt-2">
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>
        </div>
      </div>

      {/* ------------ 2 */}
      <div className="mb-10">
        <div className="min-h-[429px] flex gap-6">
          <div className="flex-1 h-full bg-gray-200">
            {" "}
            <img src={b2} alt="icon" className=""/>
          </div>
          <div className="flex-1 h-full bg-gray-200">
            {" "}
            <img src={b3} alt="icon" />
          </div>
        </div>

        {/*  */}
        <div className="mt-4">
          <h6 className="text-h6">Storage with a calming effect</h6>
          <p>
            Having a lot to store doesn’t mean it all has to go in a cupboard.
            Many bathroom items are better kept out in the open – either to be
            close at hand or are nice to look at. Add a plant or two to set a
            calm mood for the entire room (and they’ll thrive in the humid air).
          </p>
        </div>

        <div className=" mt-4">
          <h6 className="text-h6">Kit your clutter for easy access</h6>
          <p>
            Even if you have a cabinet ready to swallow the clutter, it’s worth
            resisting a little. Let containers hold kits for different
            activities – home spa, make-up, personal hygiene – to bring out or
            put back at a moment’s notice.
          </p>
        </div>
      </div>

      {/* ----------------- 3 */}
      <div className=" flex gap-6">
        <div className="flex-1 h-full bg-gray-200">
          <img src={b4} alt="icon" />
        </div>

        {/*  */}
        <div className="flex-1">
          <div className="">
            <h6 className="text-h6">An ecosystem of towels</h6>
            <p>
              Racks or hooks that allow air to circulate around each towel
              prolong their freshness. They dry quick and the need for frequent
              washing is minimized.
            </p>
          </div>

          <div className=" mt-4">
            <h6 className="text-h6">Make your mop disappear</h6>
            <p>
              Having your cleaning tools organized makes them easier to both use
              and return to. When they’re not needed, close the curtain and feel
              the peace of mind it brings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
