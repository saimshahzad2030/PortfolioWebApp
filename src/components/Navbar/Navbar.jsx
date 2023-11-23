import React from 'react'
import style from './Navbar.module.css'
import SocialLinks from '../SocialLinks/Social'
import Section from '../Section.jsx/Section'
import NameLogo from '../NameLogo/NameLogo'
import DarkThemeToggler from '../DarkThemeToggler/DarkThemeToggler'
function Navbar({setColor,color,theme,lightColorSelected , themeTriggered,setLightColorSelected,setTheme,setThemeTriggered}) {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
        
  return (
    <nav className={`${style.nav} ${scrolled ? style.scrolled : ''}`}  style={{backgroundColor:color}}>
      
        <NameLogo theme = {theme} lightColorSelected = {lightColorSelected} themeTriggered={themeTriggered} color = {color}/>
  
        <Section theme = {theme} lightColorSelected = {lightColorSelected}/>
        <SocialLinks/>
        <DarkThemeToggler setColor = {setColor} lightColorSelected={lightColorSelected} setLightColorSelected = {setLightColorSelected} themeTriggered={themeTriggered} setTheme ={setTheme} theme = {theme} setThemeTriggered = {setThemeTriggered}/>
        
    </nav>
  )
}

export default Navbar
