import avatarIcon from "../assets/Icons/avatar-dark.png";
import cartIcon from "../assets/Icons/shopping bag.png";
import searchIcon from "../assets/Icons/search.png";
import { Badge } from "./Badge";
import { NavLink } from "react-router-dom";
// import Icon from "../assets/Icons/arrow-right.png";

const menuClass = 'text-[14px] font-medium'

const NavigationBar = () => {
  return (
    <nav className='h-[60px] flex justify-between items-center  px-8 sm:px-40 bg-white overflow-hidden'>
      <div className="text-h7 font-bold text-gray-500 font-poppins ">leCadence.</div>

      {/* menus */}
      <div className="w-[324px] hidden sm:flex justify-between items-center">
        <NavLink to='/'><span className={menuClass}>Home</span></NavLink> 
        <NavLink to='/shop'><span className={menuClass}>Shop</span></NavLink>
        <NavLink to='/product'><span className={menuClass}>Product</span></NavLink>
        <NavLink to='/contact'><span className={menuClass}>Contact Us</span></NavLink>

      </div>

      {/* icons */}
      <div className="flex items-center gap-3">
        <img src={searchIcon} alt="icon" />
        <img src={avatarIcon} alt="icon" />
        <div className="flex items-center gap-[2px]">
        <img src={cartIcon} alt="icon" />
        <Badge/>
        </div>
       
      </div>
    </nav>
  )
}

export default NavigationBar 