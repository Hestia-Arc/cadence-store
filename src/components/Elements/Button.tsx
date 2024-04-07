import React, { FC } from "react";
import arrowRightIcon from "../../assets/Icons/arrow-right-dark-sm.png";


 interface Prop {
 children: JSX.Element | JSX.Element[]
 }

 interface Prop2 {
  text: string
  }

export const Button = ({children}: Prop) => {
  return (
    <button className='flex justify bg-gray-600 p-2'>
      {children}
    </button>
  )
}

// more product
export const ButtonDark: React.FC<Prop2> = (props): JSX.Element => {
  return (
    <button className="flex justify-center items-center gap-2 text-primary-800 text-btnSm font-semibold border-solid border-b-[1.5px] border-primary-800">
    <p className="capitalize">{props.text}</p>
    <img src={arrowRightIcon} alt="icon" />
    </button>
  )
}

interface IPrimaryBtn {
  text: string
}

// add to cart btn
export const ButtonPrimary:FC<IPrimaryBtn> = ({text}) => {
  return (
    <button className=" h-[50px] w-full flex justify-center items-center text-gray-100 text-btnMd font-semibold bg-gray-700 rounded-lg">
    <p className="">{text}</p>
    </button>
  )
}


// wish btn
export const ButtonWish: React.FC<Prop> = ({children}): JSX.Element => {
  return (
    <button className=" h-[50px] w-full rounded-lg flex justify-center items-center gap-2 text-gray-700 text-btnMd font-semibold border-solid border-[1.5px] border-gray-700">
    {children}
    </button>
  )
}
{/* <p className="capitalize">{props.text}</p>
    <img src={arrowRightIcon} alt="icon" /> */}


// increment/decrement btn
export const ButtonStepper: React.FC<Prop> = ({children}): JSX.Element => {
  return (
    <button className=" h-[50px] w-[180px] rounded-lg flex justify-center items-center gap-5 text-gray-700 text-btnMd font-semibold  bg-[#f5f5f5]">
    {children}
    </button>
  )
}

