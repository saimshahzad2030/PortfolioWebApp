import * as React from 'react';

import style from './ToggleGroupToolbar.module.css'
export default function ToggleGroupToolbar({color, setColor,theme, setLightColorSelected,lightColorSelected}) {
 
  
  React.useEffect(()=>{
    console.log(color);
  },[color])

    return (
      <div className={style.toggleThemeDiv}>
        <label htmlFor="theme"><h4 style={{color:theme==='Dark'?'black':'white'}}>Select Custom Theme</h4></label>
        
        <div className={style.toggleDiv} style={{backgroundColor:'transparent', border:`2px ${theme ==='Dark'?'black':'white'} solid`}}>
          <button className={style.btn} style={{backgroundColor:'#042790',borderColor: theme ==='Dark'?'black':'white'}} onClick={(e)=>{setColor(e.target.style.backgroundColor) ;setLightColorSelected(false)}}></button>
          <button className={style.btn} style={{backgroundColor:'#320774',borderColor: theme ==='Dark'?'black':'white'}}  onClick={(e)=>{setColor(e.target.style.backgroundColor);setLightColorSelected(false)}}></button>
          <button className={style.btn} style={{backgroundColor:'#45d3ca',borderColor: theme ==='Dark'?'black':'white'}}  onClick={(e)=>{setColor(e.target.style.backgroundColor);setLightColorSelected(true)}}></button>
          <button className={style.btn} style={{backgroundColor:'#ecdb22',borderColor: theme ==='Dark'?'black':'white'}}  onClick={(e)=>{setColor(e.target.style.backgroundColor);setLightColorSelected(true)}}></button>
          
        </div>
   
      </div>  
      );
}