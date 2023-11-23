import React from 'react'
import style from './HeaderBio.module.css'
export default function HeaderBio({theme}) {
  return (
    <div className={style.headerBio}>
      <h4 style={{color:theme === 'Dark'?'black':'white'}}>A Meta Certified Backend and Frontend Developer </h4>
      <h4 style={{color:theme === 'Dark'?'black':'white'}}>Meta Certified JavaScript Developer and also Ibm Certified React Developer</h4>

    </div>
  )
}
