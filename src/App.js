
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Divider from './components/Divider/Divider';
import LandingSection from './components/LandingSection/LandingSection';
import CardSection from './components/CardSection/CardSection';
import ContactMe from './components/ContactMeSection/ContactMe';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import AllFaqs from './components/Faq/AllFaqs';
import Contact from './components/Contact/Contact';
function App() {
  const [color,setColor] =  useState('rgb(167, 167, 255)');
  const [themeToChange,setTheme] = useState('Dark')
  const [themeTriggered,setThemeTriggered] = useState(false);
  const [lightColorSelected,setLightColorSelected] = useState(true)
  // console.log(color)
  console.log(themeTriggered)
  return (
   <> <Router>
   
   <Navbar  themeTriggered={themeTriggered} color={color} theme={themeToChange} themetriggered={themeTriggered} lightColorSelected = {lightColorSelected}
    setColor = {setColor}
    setTheme={setTheme} setThemeTriggered={setThemeTriggered} 
   setLightColorSelected={setLightColorSelected}/>
             <Divider theme={themeToChange} />
     <Routes>
       <Route
         path="/"
         element={
           <>
         
           <Header theme={themeToChange} color={color}/>
           <Divider theme={themeToChange} />
             <Divider theme={themeToChange} />
             <LandingSection theme={themeToChange} />
             <Divider theme={themeToChange} />
             <CardSection color={color} theme={themeToChange} />
             <Divider theme={themeToChange} />
             <ContactMe theme={themeToChange} color={color} />
             <Divider theme={themeToChange} />
             <Footer color={color} theme={themeToChange} />
           </>
         }
       />
       <Route
         path="/Home"
         element={
           <>
         <Header theme={themeToChange} color={color}/>
           <Divider theme={themeToChange} />
             <Divider theme={themeToChange} />
             <LandingSection theme={themeToChange} text = 'Welcome to my Website'/>
             <Divider theme={themeToChange} />
             <CardSection color={color} theme={themeToChange} />
             <Divider theme={themeToChange} />
             <ContactMe theme={themeToChange} color={color} />
             <Divider theme={themeToChange} />
             <Footer color={color} theme={themeToChange} />
           </>
         }
       />
       <Route path="/About" element={<><About theme = {themeToChange}/><Divider  theme={themeToChange} /><Footer color={color} theme={themeToChange} /></>
       
      } />
       <Route path="/Faq" element={<><AllFaqs theme={themeToChange}/><Divider  theme={themeToChange} /><Footer color={color} theme={themeToChange} /></>} />
       <Route path="/Contact" element={<><Contact color={color} theme = {themeToChange}/><Divider  theme={themeToChange} /><Footer color={color} theme={themeToChange} /></>} />
    
     </Routes>
   
 </Router>
   </>
  );
}

export default App;
