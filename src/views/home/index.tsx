import { Hero } from './Hero'
import { BannerGrid } from './BannerGrid'
import { ProductCarrousel } from '../../components/ProductCarrousel'
import { Values } from './Values'
import { SaleBanner } from './SaleBanner'
import { Blog } from './Blog'

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