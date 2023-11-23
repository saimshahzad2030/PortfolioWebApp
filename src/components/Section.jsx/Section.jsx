// import React from 'react'
import List from '../List/List'
import style from './Section.module.css'
import { Link } from 'react-router-dom';

function Section({theme,lightColorSelected}) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
      <>
        <ul className={style.nav_ul}>
          <List items={['Home', 'About', 'Contact','Faq']} render={(items) => (
            items.map((item) => (
              <li key={item}>
                
              <Link  to={`/${item}`} className={style.anchor} style={{color:((theme==='Dark') && lightColorSelected ===true)?'black':'white'}}  onClick={()=>{ scrollToTop();scrollToSection(`${item}`)}}>{item}</Link>
              </li>
            ))
          )} />
        </ul>
       
      </>
    );
  }
  
  export default Section;