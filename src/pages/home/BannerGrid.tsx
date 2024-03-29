import pt1 from "../../assets/products/product-1.png";
import pt2 from "../../assets/products/product-6.png";
import pt3 from "../../assets/products/product-5.png";


export const BannerGrid = () => {
  return (
    <section className='h-[600px] flex gap-6 px-40'>
        <div className="w-1/2 ">
        <img src={pt1} alt="icon" className="h-[586px] w-[600px]"/>

        </div>

        {/*  */}
        <div className="w-1/2 flex flex-col gap-6 ">
        <img src={pt2} alt="icon" className="h-[280px]" />
        <img src={pt3} alt="icon" className="h-[280px]" />
        </div>
    </section>
  )
}
