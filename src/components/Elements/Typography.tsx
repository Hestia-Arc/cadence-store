import React from 'react'

interface Props {
    weight?: string
    size?: string
    family?: string
    text: string
}
export const Typography = ({weight, size, family, text }: Props) => {
  
  
    return (
    <div className='' style={{fontFamily: `'${family}' 'sans-serif'`}} >{text}</div>
  )
}
