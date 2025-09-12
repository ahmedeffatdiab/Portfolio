import React from 'react'
import { frontedData, backendData, tools } from "../lib/SkillsData"
import Typography from '@mui/material/Typography'

const Skills = ({ darkMode }) => {
  return (
    <div className='my-12'>
      <div className='mb-8'>
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="w-28 h-1 bg-black dark:bg-white mx-auto mb-8 rounded"></div>
      </div>

      <div className='container mx-auto space-y-10'>

        {/* 💻 Frontend */}
        <div className='space-y-4'>
          <Typography variant="h5" className={`${darkMode ? 'text-white' : 'text-black'}`}>
            💻 Frontend Skills
          </Typography>

          <div className='flex flex-row flex-wrap gap-5'>
            {frontedData.map((ele, index) => (
              <div key={index} className='text-center'>
                <img src={ele.imageUrl} alt={ele.title} className='p-3 w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full' />
                <Typography variant="body2" className="mt-1">
                  {ele.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* 🌐 Backend */}
        <div className='space-y-4'>
          <Typography variant="h5">
            🌐 Backend Skills
          </Typography>
          <div className='flex flex-row flex-wrap gap-6'>
            {backendData.map((ele, index) => (
              <div key={index} className='text-center'>
                <img src={ele.imageUrl} alt={ele.title} className='p-3 w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full' />
                <Typography variant="body2" className="mt-1">
                  {ele.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* 🧩 Tools */}
        <div className='space-y-4'>
          <Typography variant="h5">
            🧩 Tools
          </Typography>
          <div className='flex flex-row flex-wrap gap-6'>
            {tools.map((ele, index) => (
              <div key={index} className='text-center'>
                <img src={ele.imageUrl} alt={ele.title} className='p-3 w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full' />
                <Typography variant="body2" className="mt-1">
                  {ele.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
