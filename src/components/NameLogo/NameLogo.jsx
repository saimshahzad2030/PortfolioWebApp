import React from 'react'
import style from './NameLogo.module.css'
function NameLogo({theme,lightColorSelected, themeTriggered,color}) {
  return (
    < >
    <div className={style.logoContainer}>
    <img className={style.logoImg} src={process.env.PUBLIC_URL + '/Assets/NameLogo/profile.png'} alt="Logo" />
    <h3 className={style.logoHeading}  style={{color:theme ==='Dark'?'black':'white'}}>Mirza Saim Shahzad</h3>
    </div>
    </>
    )
}

export default NameLogo
