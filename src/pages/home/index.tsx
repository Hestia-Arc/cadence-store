import NotificationBar from '../../components/NotificationBar'
import NavigationBar from '../../components/NavigationBar'
import { Hero } from './Hero'
import { BannerGrid } from './BannerGrid'
import { ProductCarrousel } from '../../components/ProductCarrousel'
import { Values } from './Values'
import { SaleBanner } from './SaleBanner'
import { Blog } from './Blog'
import { Newsletter } from '../../components/Newsletter'
import { Footer } from '../../components/Footer'

function Home() {
  return (
    <div className=' bg-white text-gray-700'>
        <NotificationBar/>
        <NavigationBar/>
        <Hero/>
        <BannerGrid/>
        <ProductCarrousel/>
        <Values/>
        <SaleBanner/>
        <Blog/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home