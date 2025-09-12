import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import personImage from "/1677362519625.JPG";
import Typography from '@mui/material/Typography';

const Home = ({darkMode}) => {
  const phrases = ['Frontend developer', 'ReactJS developer', 'NextJS developer'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    let timeout;
    if (!isDeleting && charIndex < currentPhrase.length) {

      setTypingSpeed(100);
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      setTypingSpeed(50);
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true); 
        } else {
          setIsDeleting(false); 
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 1500); 
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex]);

  return (
<div className={`w-full h-auto min-h-screen sm:py-12 flex flex-col-reverse md:flex-row justify-center items-center p-6 gap-10 
    mt-12 md:mt-0 ${
  darkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'
}`}>
  {/* Text Section */}
  <div className="max-w-md text-center md:text-left">
    <Typography variant="h4" component="h4">
      Hi!👋, I'm Ahmed Effat
    </Typography>
    <Typography variant="h5" component="h5">
      and I'm a <span className="text-blue-500">{displayedText}</span>
      <span className="blinking-cursor">|</span>
    </Typography>
    <Typography variant="body1" component="p" sx={{ my: 1 }}>
      Full-Stack Web Developer Specializing in Front-End Applications.
      Currently focused on crafting dynamic front-end applications while
      expanding my expertise in back-end technologies.
    </Typography>
    <Button sx={{ my: 1 }} variant="outlined">
      Contact Me
    </Button>
  </div>

  {/* Image Section */}
  <div className="w-72 h-96 overflow-hidden shadow-lg animate-blob transition-all duration-1000 ease-in-out border-[8px] border-white rounded-[30.2232%_69.7768%_40.1116%_30.1674%/59.8326%_59.9442%_69.8326%_40.1116%]">
    <img
      src={personImage}
      alt="Ahmed Effat"
      className="w-full h-full object-fill"
    />
  </div>
</div>

    
  );
};

export default Home;


{/* <div className={`w-full h-screen flex flex-col md:flex-row justify-center items-center p-6 gap-10 transition-colors duration-500 ${
  darkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'
}`}></div> */}