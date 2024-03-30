import React from "react";
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

export const ButtonDark: React.FC<Prop2> = (props): JSX.Element => {
  return (
    <button className="flex justify-center items-center gap-2 text-primary-800 text-btnSm font-semibold border-solid border-b-[1.5px] border-primary-800">
    <p className="capitalize">{props.text}</p>
    <img src={arrowRightIcon} alt="icon" />
    </button>
  )
}


