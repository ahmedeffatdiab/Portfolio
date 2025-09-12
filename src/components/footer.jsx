import React from 'react';
import { IconButton, Tooltip, Typography, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10 px-6 text-center mt-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top: Name + Social + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          {/* Left: Name + Bio */}
          <div className="text-left space-y-2">
            <Typography variant="h6" className="text-white dark:text-white font-semibold">
              Ahmed Effat
            </Typography>
            <Typography variant="body2" className="text-white dark:text-gray-400 max-w-xs">
              Software Engineer specializing in front-end development with React, TypeScript, and Next.js.
            </Typography>
          </div>

          {/* Center: Quick Nav */}
          <div className="flex flex-col items-center space-y-1">
            <Typography variant="subtitle2" className="text-white dark:text-gray-300 font-medium">
              Quick Links
            </Typography>
            <ul className="space-y-1 text-sm text-white dark:text-gray-400">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#work" className="hover:text-primary transition">Work</a></li>
              <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
            </ul>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center space-y-2">
            <Typography variant="subtitle2" className="text-white dark:text-gray-300 font-medium">
              Connect
            </Typography>
            <div className="flex space-x-3">
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/ahmedeffatdiab"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'inherit' }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/ahmed-effat-787a7a243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'inherit' }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  component="a"
                  href="ahmedeffatdiab@gmail.com"
                  sx={{ color: 'inherit' }}
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>

        <Divider  sx={{ borderColor: 'white', backgroundColor: 'white',}}/>

        {/* Bottom: Scroll Up + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <Typography
            variant="body2"
            className="text-white dark:text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Ahmed Effat. Made with ❤️ using React & Tailwind CSS & Material Ui.
          </Typography>

          <Tooltip title="Back to Top">
            <IconButton onClick={scrollToTop} sx={{ color: 'inherit' }}>
              <ArrowUpwardIcon />
            </IconButton>
          </Tooltip>
        </div>

    
      </div>
    </footer>
  );
};

export default Footer;
