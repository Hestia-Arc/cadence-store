import instaIcon from '../assets/Icons/instagram.png'
import fbIcon from '../assets/Icons/fbIcon.png'
import utubeIcon from '../assets/Icons/youtube.png'
import { Link } from 'react-router-dom';


const socialStyles = "h-5 "
const privacyStyle = "font-poppins text-[12px] leading-[20px]  font-semibold ";

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <div className="min-h-[249px] px-8 py-12 sm:px-40 sm:pt-20 sm:pb-8 bg-gray-700">
      <div className="min-h-[137px] flex flex-col gap-8 sm:gap-12 text-gray-300 ">
        {/* Top */}
        <div className="min-h-[32px] flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0 ">
          {/* brand name */}
          <div className=" sm:w-1/3 flex flex-col sm:flex-row gap-5 items-center">
            <Link to="/" className="text-[24px] font-medium font-poppins">
              leCadence<span className="text-gray-400">.</span>
            </Link>
            <hr className='w-5 sm:hidden opacity-40' />
            <span className='hidden sm:block opacity-40'>|</span>
            <span className=" text-capR1 font-light opacity-80">Gifts & Decoration Store</span>
          </div>

          {/* navigation */}
          <div className="flex flex-col items-center sm:flex-row gap-8 sm:gap-10 text-capR1 font-light opacity-80">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* copyright */}
        <div className="min-h-[56px] flex flex-col-reverse sm:flex-row justify-between items-center gap-8 sm:gap-0 py-6 sm:py-0 border-solid border-t-[1px] border-gray-400">
          <div className="flex flex-col-reverse items-center sm:flex-row gap-7">
            <span className="text-[12px] leading-5 text-gray-300 font-poppins opacity-80">
              Copyright © {currentDate} leCadence. All rights reserved
            </span>

            <div className='flex gap-7'>
            <span className={privacyStyle}>Privacy Policy</span>
            <span className={privacyStyle}>Terms of Use</span>
            </div>
           
          </div>

          {/* social icons */}
          <div className='flex items-center gap-6'>
            <img src={instaIcon} alt="icon" className={socialStyles} />
            <img src={fbIcon} alt="icon" />
            <img src={utubeIcon} alt="icon" className={socialStyles}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

//
