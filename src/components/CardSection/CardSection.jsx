import React from 'react'
import Cards from '../Cards/Cards'
import style from './CardSection.module.css'
export default function CardSection({color,theme}) {
  return (
    <div className={style.row} style={{backgroundColor:theme==='Dark'?'white':'#3e3c3c'}}>
      <h1 style={{textAlign:'center',marginTop:0,paddingTop:'40px',marginBottom:0,color:theme==='Dark'?'#3e3c3c':'white'}}>Portfolio</h1>
      <Cards theme = {theme} color ={color}/>
    </div>
  )
}
