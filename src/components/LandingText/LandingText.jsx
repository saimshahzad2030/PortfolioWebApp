import React, { useEffect, useState } from 'react';
import style from './LandingText.module.css';

export default function LandingText({theme,text}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);
console.log(theme)
  return (
    <div className={`${style.bio} ${showContent ? style.show : ''}`}>
      <h1 className={style.text} style={{fontSize:'30px' , color:theme === 'Dark'?'#3e3c3c':'white'}} >{text}</h1>
      <p className={style.text}  style={{fontSize:'16px', color:theme === 'Dark'?'#3e3c3c':'white'}}>
      Hi, I'm Saim, I'm Currently undergraduate, it's my last year of Bachelors in Computer Science and I'm passionate about Programming, Web Development and newly coming technologies. Explore my site to discover my achievements my goals and also feel free to contac me for any queries and questions regarding building the website.
      </p>
      <a href="/" className={style.text}>Collab with me</a>
    </div>
  );
}
