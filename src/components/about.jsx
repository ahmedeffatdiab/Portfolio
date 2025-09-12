import React from 'react'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';

const About = ({darkMode}) => {
  return (
    <div className='mb-3'>
     <div className=''>
        <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-black'}`}>
          About Me
        </h2>
        <div className={`w-36 h-1 mx-auto mb-8 rounded ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
      </div>
       <div className='w-full  flex flex-col md:flex-row justify-center items-center gap-10 p-6'>
      
      {/* Left Image Section */}
      <div className="w-72 border shadow-md rounded-3xl p-5">
        <img
          alt="Ahmed Effat"
          className="w-full h-full object-cover rounded-2xl"
          src="/1677362519625.JPG"
        />
      </div>

      {/* Right Text Section */}
      <div className="max-w-xl text-center md:text-left space-y-8">

        <Typography variant="body1" color="textPrimary">
          I am a Software Engineer with experience in both front-end and back-end development,
          specializing in front-end technologies. My expertise lies in leveraging modern tools such as
          React, Next.js, JavaScript, and TypeScript to build scalable and user-friendly applications.
          My work includes seamless API integration and meticulous performance optimization, allowing me
          to contribute effectively across the entire software development lifecycle.
        </Typography>

        <Typography variant="body2" color="textPrimary">
          Collaborating with diverse teams has honed my communication skills and enhanced my ability
          to approach problems creatively and strategically.
        </Typography>

        <Typography variant="body1" color="textPrimary">
          Currently based in Cairo, I am open to relocation and dedicated to continuous learning.
          My focus is on enhancing my English proficiency and advancing my skills in web development.
        </Typography>
         <a href="/Ahmed-Effat (Frontend developer)_CV (1).pdf" download style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        sx={{
          fontSize: '17px',
          backgroundColor: 'black',
          padding: '10px 20px',
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Download CV <DescriptionIcon sx={{ ml: 1 }} />
      </Button>
    </a>
      </div>
    </div>
    </div>
   
  )
}

export default About
