import React from 'react'
import style from './SingleFaq.module.css'
import Faq from './Faq'
export default function SingleFaq({theme}) {
    
  const path = process.env.PUBLIC_URL;
     return (

        <>
            <Faq render={(dataQ = ['What are Saim`s Experties?', 
            'What are Saim`s Side Skills?',
             'What is Saim`s Education background?', 
             'Is Saim a Gamer?'],
             dataImg = [path+'/Assets/FaqImages/pic1.jpg',
              path+'/Assets/FaqImages/pic2.jpg', 
              path+'/Assets/FaqImages/pic3.jpg',
               path+'/Assets/FaqImages/pic4.jpg'], 
            dataAnswer= ['Basically I am so much dedicated to programming, building logics, Solving Puzzles. My Expertise are Web Development both frontend and backend, also i have a deep knowledge of Artificial Intelligence and Deep Learning',
             'I have grapped some benificial side skills as well which include: Amazon Web Service(S3 Bucket, Cloud9,Elastic Beans, VPC`s, E2 Instance)',
             'I have Completed my matriculation in 2016 from Arshi Publich School, Passes Intermediate from Govt Formen College Formend Nazimabad and currently doing Bachelors in Computer Science from FUUAST, Karachi. It`s my final year :)', 
            'Yup I am not supposed to be a proper gamer but i do gaming on my free hours. The games that i play include: Valorant, CS 2, Assasin`s Creed 3']) => (
                dataQ.map((data, index) => (
                   <>
                   

<div className={style.mainDiv}  style={{backgroundColor:theme === 'Dark'?'white':'#3e3c3c'}}>
    <div className={style.imageDiv}><img src={dataImg[index]} alt=""/></div>
    <div className={style.faqText}>
  <h4 style={{color:theme === 'Dark'?'#3e3c3c':'white'}}>{data}</h4>
  <p  style={{color:theme === 'Dark'?'#3e3c3c':'white'}}>{dataAnswer[index]}</p>
</div>
</div></>
    ))) } />
        </>

    )
}
