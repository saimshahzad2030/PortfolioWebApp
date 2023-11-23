import React from 'react'
import style from './AboutLower.module.css'
import AboutLowerCard from '../AboutLowerCard/AboutLowerCard'
export default function AboutLower() {
  
  const path = process.env.PUBLIC_URL;
  return (
    <div className={style.mainDiv}>
      <AboutLowerCard images = {[path+'/Assets/AboutPics/coding.png',path+'/Assets/AboutPics/react.png',path+'/Assets/AboutPics/WebDevelopment.png',path+'/Assets/AboutPics/teacher.png'] } name={['Express/Node','React','Web Development','Teaching']} heading={['Skills',path+'/Assets/AboutPics/magic-wand.png']}/>
      <AboutLowerCard images = {[path+'/Assets/AboutPics/artificial-intelligence.png',path+'/Assets/AboutPics/amazon.png',path+'/Assets/AboutPics/python.png',path+'/Assets/AboutPics/asp.png'] } name={['Artificial Intelligence','Amazon Web Service','Python','Asp.Net MVC']} heading={['Side Skills',path+'/Assets/AboutPics/magic-wand.png']}/>
      <AboutLowerCard images = {[path+'/Assets/AboutPics/iot.png',path+'/Assets/AboutPics/gaming.png',path+'/Assets/AboutPics/logic.png'] } name={['Internet Of Things','Gaming','Logic Building']} heading={['Interests',path+'/Assets/AboutPics/star.png']}/>
      <AboutLowerCard images = {[path+'/Assets/AboutPics/mortarboard.png',path+'/Assets/AboutPics/mortarboard.png',path+'/Assets/AboutPics/mortarboard.png' ]} name={['Matriculation','Intermediate','BSCS Continue..']} heading={['Education',path+'/Assets/AboutPics/mortarboard.png']}/>
    
    </div>
  )
}
