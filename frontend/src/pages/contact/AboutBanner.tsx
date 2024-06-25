import { ButtonDark } from "../../components/Elements"
import saleBanner from '../../assets/products/product-4.png'

export const AboutBanner = () => {
  return (
    <div className='min-h-[413px] border flex flex-col sm:flex-row bg-gray-200'>
      <div className="w-full sm:w-1/2 ">
      <img src={saleBanner} alt="sales"  className='h-[367px] sm:h-[413px] ' />

      </div>

      {/* content */}
      <div className="w-full sm:w-1/2 flex items-center  px-8 sm:px-0 sm:pl-10 py-14 sm:py-0">
        <div className="w-[452px] flex flex-col items-start gap-4">
          <h4 className="text-h4 font-poppins">About Us
          </h4>
          <div>
            <p className="text-body1Reg">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
            <p className="text-body1Reg">Our customer service is always prepared to support you 24/7.</p>

          </div>
        <ButtonDark text='shop now'/>
        </div>
      </div>
    </div>
  )
}
