import { CardCarrousel } from "./CardCarrousel"
import { ButtonDark } from "./Elements"

export const ProductCarrousel = () => {
  return (
    <section  className='h-[665px] pt-[48px] ml-40 flex flex-col gap-11 border-solid border-b-2 border-gray-600 '>

      <div className="flex justify-between items-end pr-40">
      <div className="text-h4">New <br/> Arrivals</div>
      <ButtonDark text="More Products" />
      </div>

      {/* carousel */}
      <div className="h-[433px] flex gap-5 overflow-hidden">

        {/* card */}
       <CardCarrousel/>
       <CardCarrousel/>
       <CardCarrousel/>
       <CardCarrousel/>
       <CardCarrousel/>
       </div>
      
    </section>
  )
}
