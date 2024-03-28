import React from 'react'

 interface Prop {
 children: JSX.Element | JSX.Element[]
 }

export const Button = ({children}: Prop) => {
  return (
    <button className='flex justify bg-gray-600 p-2'>
      {children}
    </button>
  )
}

