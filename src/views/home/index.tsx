import { Hero } from './Hero'
import { BannerGrid } from './BannerGrid'
import { Values } from './Values'
import { SaleBanner } from './SaleBanner'
import { Blog } from './Blog'
import { ProductCarrousel } from '@components/ProductCarrousel'

function Home() { 
  return (
    <div className=' bg-white text-gray-700 relative '>
      <Hero/>
      <BannerGrid/>
      <ProductCarrousel tag={<div>New <br/> Arrivals</div> }/>
      <Values/>
      <SaleBanner/>
      <Blog/>
    </div>
  )
}

export default Home