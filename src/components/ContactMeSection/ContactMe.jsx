
import React from 'react'
import Basic from '../Form/Form'

export default function ContactMe({color,theme}) {
  return (
    <section className='contactMe' style={{paddingTop:'10px',backgroundColor:theme === 'Dark'?'white':'#3e3c3c',height:'auto',paddingBottom:'50px'}}>
        <Basic theme = {theme} color={color}/>
    </section>
  )
}
