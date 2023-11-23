import {TextField,Button} from '@mui/material/';
import style from './Form.module.css'
import { useState } from 'react';
export default function Form({theme,color}) {
  const [qstError,setQstError] = useState(false);
  const [nameError,setNameError] = useState(false); 
  const [name,setName] = useState('');
  const [question,setQuestion] = useState('');
  const handleSubmit = (e)=>{
    if (!name){
      setNameError(true);
    }
    else if(!question){
      setQstError(true)
    }
    else{
      setName('');
      setQuestion('');
    }
    e.preventDefault();
  }
  return (<>
   <div className={style.mainDiv}>
    <form onSubmit={handleSubmit} className={style.formDiv}>
   <h1 style={{textAlign:'center',marginLeft:'70px',color:theme === 'Dark'?'#3e3c3c':'white'}}>CONTACT ME</h1>
   
    <div className={style.row}>
    <TextField id="outlined-basic" label="Your Name" value={name} variant="outlined" onChange={(e)=>{setName(e.target.value);setNameError(false)}} className={style.field} InputLabelProps={{
    style: { color:theme === 'Dark'?'#3e3c3c':'white' },
  }}
  InputProps={{
    style: { color:theme === 'Dark'?'#3e3c3c':'white' },
  }}
  sx={{
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme === 'Dark'?'#3e3c3c':'white',
    }
  }}/>
    <p style={{display:nameError===false?'none':'',color:'red'}}>Name field cannot be blank</p>
    </div>
      <div className={style.row}>
      <TextField
          id="outlined-multiline-static"
          label="Question"
          multiline
          value={question} 
          rows={4}
          onChange={(e)=>{setQuestion(e.target.value);setQstError(false)}}
          className={style.field}
          InputLabelProps={{
            style: { color:theme === 'Dark'?'#3e3c3c':'white' },
          }}
          InputProps={{
            style: { color:theme === 'Dark'?'#3e3c3c':'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme === 'Dark'?'#3e3c3c':'white',
            }
          }}
        />
        <p style={{display:qstError===false?'none':'',color:'red'}}>Question must have been filled</p>
      </div>
    <Button variant="outlined" type='submit' className={style.button} style={{backgroundColor:color==='white'?'blue':color,color:theme === 'Dark'?'black':'white'}}>Contact</Button>
   </form>
   </div></>
  );
}