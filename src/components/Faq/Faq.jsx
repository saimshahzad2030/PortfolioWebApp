import React from 'react'


export default function Faq({render,dataq,dataImg,dataAnswer}) {
  
    return(<>{render(dataq,dataImg,dataAnswer)}</>)
  
}
