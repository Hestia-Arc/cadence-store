import { CardCarrousel } from "./CardCarrousel"
import { ButtonDark } from "./Elements"
import pdt1 from '../assets/products/product-2.png'
import pdt2 from '../assets/products/product-7.png'
import pdt3 from '../assets/products/product-8.png'
import pdt4 from '../assets/products/product-10.png'
import pdt5 from '../assets/products/product-9.png'


export const ProductCarrousel = () => {
  return (
    <section  className='h-[665px] pt-[48px] ml-40 xs:ml-8 flex flex-col gap-11 border-solid border-b-2 border-gray-600 '>

      <div className="flex justify-between items-end pr-40">
      <div className="text-h4 font-poppins">New <br/> Arrivals</div>

      <div className="xs:hidden">
      <ButtonDark text="More Products"  />
      </div>
      </div>

      {/* carousel */}
      <div className="h-[433px] flex gap-5 overflow-hidden">

        {/* card */}
       <CardCarrousel img={pdt1} tag='loveseat sofa' price='199.00' slashP={400.00}  />
       <CardCarrousel img={pdt2} tag='table lamp' price='24.99' slashP={0} />
       <CardCarrousel img={pdt3} tag='beige table lamp' price='25.00' slashP={0}/>
       <CardCarrousel img={pdt4} tag='bamboo basket' price='195.00' slashP={0}/>
       <CardCarrousel img={pdt5} tag='itchen lamp' price='30.00' slashP={0}/>
       </div>
      
    </section>
  )
}
