import React from 'react';
import List from '../List/List';
import style from './Social.module.css';

// Dynamically import all images from the Assets folder
const imageContext = require.context('../../../public/Assets', false, /\.(png)$/);
const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
const urls = ['https://www.facebook.com/sheikh.saim.104','https://github.com/saimshahzad2030','https://instagram.com/saim_shahzad_321?igshid=MzNlNGNkZWQ4Mg==','https://www.linkedin.com/in/saim-shahzad-476bba25b/','https://twitter.com/saimshehzad10']
function Social() {
  return (
    <>
      <ul className={style.nav_ul}>
        <List items={imageNames} render={(items) => (
          items.map((item,index) => (
            <li key={item}>
              <a href={`${urls[index]}`} className={style.anchor}>
                <img className={style.SocialImages} src={process.env.PUBLIC_URL + '/Assets/' + item} alt='fb Logo' />
              </a>
            </li>
          ))
        )} />
      </ul>
    </>
  );
}

export default Social;
