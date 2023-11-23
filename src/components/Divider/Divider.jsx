import React from 'react'
import style from './Divider.module.css'
export default function Divider({theme}) {
  return (
    <div className={style.div} style={{backgroundColor:theme==='Dark'?'#3e3c3c':'white'}}>
      
    </div>
  )
}
