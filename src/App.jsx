// src/App.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/header';
import Home from './components/home';
import About from "./components/about";
import Work from "./components/work";
import Skills from "./components/skills";
import Footer from "./components/footer"
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? '#90caf9' : '#1976d2',
        },
      },
    }), [darkMode]
  );

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
      easing:"ease-in-out"
    })
  },[])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div id="home" >
        <Home darkMode={darkMode}/>
      </div>
      
      <div id="about" className="section mt-16">
        <div data-aos="fade-up">
          <About darkMode={darkMode} />
        </div>
      </div>
      <div id="work" className="section">
        <div data-aos="fade-up">
          <Work darkMode={darkMode}/>
        </div>
      </div>

       <div id="skills" className="section">
        <div data-aos="fade-up">
          <Skills darkMode={darkMode} />
        </div>
      </div>

      <div id="contact" className="section">
        <div data-aos="fade-up">
          <Footer/>
        </div>
      </div>
      
    </ThemeProvider>
  );
};

export default App;



