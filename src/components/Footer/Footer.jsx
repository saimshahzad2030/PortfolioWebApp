import React from 'react'
import style from './Footer.module.css'
export default function Footer({theme,color}) {
  return (
    <footer className={style.footer} style={{backgroundColor:color}}>
        <h4 style={{color:theme==='Dark'?'black':'white'}}>copyright@SaimShahzad</h4>
    </footer>
  )
}
