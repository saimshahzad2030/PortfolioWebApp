import React from 'react'
import SingleFaq from './SingleFaq'
import style from './AllFaq.module.css'
export default function AllFaqs({theme}) {
  return (
    
    <div className={style.allFaqDiv} style={{backgroundColor:theme === 'Dark'?'white':'#3e3c3c'}}>
    <h1 style={{textAlign:'center',margin:0,color:theme === 'Dark'?'#3e3c3c':'white'} }>Frequent Ask Questions</h1>
   
   <SingleFaq theme = {theme}/>
    </div>
  )
}
