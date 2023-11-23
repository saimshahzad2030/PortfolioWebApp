import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BookOutlined from '@mui/icons-material/BookOutlined';
import style from './Cards.module.css'
export default function Cards({color,theme}) {
    
 
    const [titles,Details,link]=[['Book Library App (Backend )', 'Products Posting App ', 'Book Review App (Backend)'],['It is a proper Book Library backend with login Signup and Authentication','A simple products posting app with (Get-Delete-Put-Post) API Database server','A simple Book review offline App with login and signup authentication(backend without Db)'],['https://github.com/saimshahzad2030/MidTermBookLib.git','https://github.com/saimshahzad2030/APIS.git','https://github.com/saimshahzad2030/expressBookReviews.git']]
    const handleButtonClick = (index) => {
        // Set the new URL here
        window.location.href = link[index];
      };
      
    return(
        <div className={style.cardDiv} style={{backgroundColor:theme==='Dark'?'white':'#3e3c3c'}}>
            {titles.map((title,index)=>(
        (  <Card
        className = {style.card}
              key = {title}
              size='sm'
                data-resizable
                sx={{
                  textAlign: 'center',
                  alignItems: 'center',
                  width: 250,
                  marginLeft:'00px',
                  marginTop:'50px',
                  marginBottom:'50px',
                  // to make the demo resizable
                  overflow: 'auto',
                  
                  '--icon-size': '100px',
                }}
              >
                <CardOverflow variant="solid" sx={{backgroundColor:color}}>
                  <AspectRatio
                    variant="outlined"
                    color="primary"
                    ratio="1"
                    sx={{
                      m: 'auto',
                      transform: 'translateY(50%)',
                      borderRadius: '70%',
                      width: 'var(--icon-size)',
                      boxShadow: 'sm',
                      bgcolor: 'background.surface',
                      position: 'relative',
                    }}
                  >
                    <div>
                      <BookOutlined color="warning" sx={{ fontSize: '3rem' ,color:color}} />
                    </div>
                  </AspectRatio>
                </CardOverflow>
                <Typography level="title-md" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                  {title}
                </Typography>
                <CardContent sx={{ maxWidth: '30ch' }}>
                  {Details[index]}
                </CardContent>
                <CardActions
                  orientation="vertical"
                  buttonFlex={1}
                  sx={{
                    '--Button-radius': '30px',
                    width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                  }}
                >
                  <Button variant="solid" onClick={()=>handleButtonClick(index)} style={{color:theme === 'Dark'?'#3e3c3c':'white',fontWeight:'bold',backgroundColor:color==='white'?'blue':color}}>
                    view
                  </Button>
                  {/* <Button variant="plain" color="neutral">
                    Skip
                  </Button> */}
                </CardActions>
              </Card>)
      ))}
        </div>
    )
  
}