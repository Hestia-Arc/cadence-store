import { CardCarrousel } from "./cards/CardCarrousel"
import { ButtonDark } from "./Elements"
import pdt1 from '../assets/products/product-2.png'
import pdt2 from '../assets/products/product-7.png'
import pdt3 from '../assets/products/product-8.png'
import pdt4 from '../assets/products/product-10.png'
import pdt5 from '../assets/products/product-9.png'
import { FC } from "react"

interface ICarrouselTagProp {
  tag: JSX.Element
}
export const ProductCarrousel: FC<ICarrouselTagProp> = ({tag}) => {
  return (
    <section className='h-[665px] pt-[48px] ml-8  sm:ml-40 flex flex-col gap-11 border-solid border-b-2 border-gray-600 '>

      <div className="flex justify-between items-end pr-40">
      <div className="text-h4 font-poppins">{tag}</div> 
      <div className="hidden sm:block">
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
