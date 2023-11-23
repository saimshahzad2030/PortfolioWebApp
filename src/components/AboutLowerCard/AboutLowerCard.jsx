import React from 'react'
import style from './AboutLowerCard.module.css'
export default function AboutLowerCard({images,heading,name}) {
  console.log(name,images)
  return (
    <div className={style.card}>
      <div className={style.rowHead}>

<h2>{heading[0]}</h2>
<img className={style.imgHead} src={heading[1]} alt="" />

</div>

  {name.map((itemName,index)=>(
    <>
    <div className={style.row} key={name}>
    <img className={style.img} src={images[index]} alt={images[index]} />
    <h5>{itemName}</h5>
</div> </>
  ))}

    </div>
  )
}
