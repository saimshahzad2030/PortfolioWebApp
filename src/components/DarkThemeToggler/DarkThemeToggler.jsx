import React from 'react'
import style from './DarkThemeToggler.module.css'
export default function DarkThemeToggler({theme,setTheme,setThemeTriggered,themeTriggered,setColor}) {
    return (
        <div className={style.togglerDiv}>
            <label htmlFor="theme"><h4 style={{color:theme === 'Dark'?'#3e3c3c':'white'}}>{`Enable ${theme} Theme`}</h4></label>
            <label className={style.switch}>
                <input type="checkbox" onChange={(e)=>{setTheme(theme ==='Dark'?'Light':'Dark');setThemeTriggered(!themeTriggered);setColor(theme === 'Dark'?' rgba(56, 3, 121, 0.84)':'rgb(167, 167, 255)')}}/>
                <span className={`${style.slider} ${style.round}`}></span>
            </label>
        </div>
    )
}
