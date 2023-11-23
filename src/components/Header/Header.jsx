import React from 'react'
import HeaderBio from '../HeaderBio/HeaderBio'
import style from './Header.module.css'

export default function Header({theme,color}) {
  return (
    <header className={style.header} style={{backgroundColor:color}}>
        <HeaderBio theme = {theme}/>
       </header>
  )
}
