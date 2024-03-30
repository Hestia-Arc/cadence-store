import { ButtonDark } from "../../components/Elements"
import saleBanner from '../../assets/products/product-4.png'

export const SaleBanner = () => {
  return (
    <div className='min-h-[532px] flex xs:flex-col bg-gray-200'>
      <div className="w-1/2 xs:w-full">
      <img src={saleBanner} alt="sales"  className='h-[532px] xs:h-[367px]' />

      </div>

      {/* content */}
      <div className="w-1/2 xs:w-full flex items-center pl-16 xs:px-8 xs:py-14">
        <div className="w-[452px] flex flex-col items-start gap-4">
          <p className="text-hairline1 font-bold uppercase text-blue">sales up to 35% off</p>
          <h4 className="text-h4 font-poppins">HUNDREDS of <br/>
          New lower prices!
          </h4>
          <p className="text-body1Reg">It’s more affordable than ever to give every room in your home a stylish makeover</p>
        <ButtonDark text='shop now'/>
        </div>
      </div>
    </div>
  )
}
