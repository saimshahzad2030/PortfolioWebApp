import React from 'react'
import style from './LandingSection.module.css'
import LandingPic from '../LandingPic/LandingPic'
import LandingText from '../LandingText/LandingText'
export default function LandingSection({theme,text}) {
  return (
    <section className={style.section}  style={{backgroundColor:theme === 'Dark'?'white':'#3e3c3c'}}>
        <LandingPic theme = {theme}/>
        <LandingText theme = {theme} text = {text}/>
    </section>
  )
}
