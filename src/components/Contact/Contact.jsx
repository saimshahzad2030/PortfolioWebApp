import React from 'react'
import ContactMe from '../ContactMeSection/ContactMe'
import style from './Contact.module.css'
import AboutLowerCard from '../AboutLowerCard/AboutLowerCard'
import Divider from '../Divider/Divider'
export default function Contact({theme,color}) {
  const path = process.env.PUBLIC_URL;

  return (
     <>
      <ContactMe  theme={theme} color={color} />
      <Divider theme={theme}/>
      <div className={style.mainDiv}>
      <AboutLowerCard images = {[path+'/Assets/Contacts/facebook.png',path+'/Assets/Contacts/instagram.png',path+'/Assets/Contacts/twitter.png'] } name={['Facebook','Instagram','Twitter']} heading={['Socially Available',path+'/Assets/Contacts/social-media.png']}/>
      <AboutLowerCard images = {[path+'/Assets/Contacts/phone-call.png',path+'/Assets/Contacts/gmail.png'] } name={['+92 3142274 221','saimshehzad2030@gmail.com']} heading={['Private Contacts',path+'/Assets/Contacts/privacy.png']}/>
      <AboutLowerCard images = {[path+'/Assets/Contacts/github.png',path+'/Assets/Contacts/linkedin.png'] } name={['Github','Linkedin']} heading={['Professional Space',path+'/Assets/Contacts/badge.png']}/>
     
    </div></>
  )
}
