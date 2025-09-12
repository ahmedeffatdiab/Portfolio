// import React from 'react'
// import {data} from "../lib/projectsApi";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import Visibility from '@mui/icons-material/Visibility';
// const work = ({darkMode}) => {
//   return (
//     <div className='container mx-auto px-4 py-1'>
//       <div className='mb-8'>
//         <h2 className="text-3xl font-bold text-center">My Projects</h2>
//         <div className="w-36 h-1 bg-black dark:bg-white mx-auto mb-8 rounded"></div>
//       </div>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {data.map((project, index) => (
//           <div key={index} className={`bg-white ${
//               darkMode=="dark" ? 'shadow-[0_0_15px_3px_rgba(255,255,255,0.3)]' : 'shadow-lg'
//             } shadow-lg rounded-lg overflow-hidden flex flex-col`}>
//             <div className="w-full h-48 relative group">
//                 <img src={`/projects-image/${project.image}`} alt={project.title} className="w-full h-full object-cover"  />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="text-white text-lg font-bold flex items-center space-x-3">
//                     <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
//                         <Visibility sx={{ fontSize: 30 }} className="transform transition-transform duration-300 hover:scale-110" />
//                     </a>
//                     <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <GitHubIcon sx={{ fontSize: 30 }} className="transform transition-transform duration-300 hover:scale-110"/>
//                     </a>
//                     </div>
//                 </div>
//                 </div>
//             <div className='p-4 flex flex-col flex-grow'>
//               <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
//               <p className='text-sm text-gray-600 mb-3'>{project.description}</p>
//               <p className='text-sm text-gray-800 font-medium mb-4'>
//                 <span className="font-semibold">Technologies:</span> {project.technologies}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

    



    
//   )
// }

// export default work


import React from 'react';
import { data } from "../lib/projectsApi";
import GitHubIcon from '@mui/icons-material/GitHub';
import Visibility from '@mui/icons-material/Visibility';

const Work = ({ darkMode }) => {
  return (
    <div className='container mx-auto px-4 py-1'>
      <div className='mb-8'>
        <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-black'}`}>
          My Projects
        </h2>
        <div className={`w-36 h-1 mx-auto mb-8 rounded ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden flex flex-col border 
                        ${darkMode ? ' border-gray-600 shadow-[0_0_15px_3px_rgba(255,255,255,0.3)] text-white' : 'bg-white border-gray-300 shadow-lg text-black'}`}
          >
            <div className="w-full h-48 relative group">
              <img
                src={`/projects-image/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-lg font-bold flex items-center space-x-3">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live demo link">
                    <Visibility
                      sx={{ fontSize: 30 }}
                      className="transform transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository link">
                    <GitHubIcon
                      sx={{ fontSize: 30 }}
                      className="transform transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-4 flex flex-col flex-grow'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 text-sm`}>
                {project.description}
              </p>
              <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-sm font-medium mb-4`}>
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
