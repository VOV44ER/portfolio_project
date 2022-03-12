import './About.scss';
import { Icon } from '@iconify/react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
AOS.init();

function About() {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isScroll);
    return () => {
        window.removeEventListener('scroll', isScroll);
    };
  });

  const isScroll = (e) => {
    const target = document.querySelector('.about__me-skills').offsetTop - 320;
    const scrollTop = window.scrollY;

    if (target <= scrollTop) {
      setTimeout(() => {
        setCondition(true);
      }, 1000);
    }
  };

  return (
    <div className='about'>
      <h1 className='about__title' data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">about</h1>
      <div className='about__card-wrapper'>
        <div className='about__card' data-aos="flip-right" data-aos-once="true" data-aos-duration="1000">
          <div className="hex hex--mini">
            <Icon className='about__icon' icon="mdi:speedometer" />
          </div>
          <h2>Fast</h2>
          <p className='about__card-text'>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className='about__card' data-aos="flip-right" data-aos-once="true" data-aos-duration="1000" data-aos-delay="300">
          <div className="hex hex--mini">
            <Icon className='about__icon' icon="mdi-cellphone-link" />
          </div>
          <h2 >Responsive</h2>
          <p className='about__card-text'>My layouts will work on any device, big or small.</p>
        </div>
        <div className='about__card' data-aos="flip-right" data-aos-once="true" data-aos-duration="1000" data-aos-delay="600">
          <div className="hex hex--mini">
            <Icon className='about__icon' icon="mdi-lightbulb-outline" />
          </div>
          <h2>Intuitive</h2>
          <p className='about__card-text'>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className='about__card' data-aos="flip-right" data-aos-once="true" data-aos-duration="1000" data-aos-delay="900">
          <div className="hex hex--mini">
            <Icon className='about__icon' icon="mdi-rocket" />
          </div>
          <h2>Dynamic</h2>
          <p className='about__card-text'>Websites don't have to be static, I love making pages come to life.</p>
        </div>
      </div>

      <div className='about__me'>
        <div className='about__me-me' data-aos="flip-right" data-aos-once="true" data-aos-duration="1000">
        <div className="hex">
          <img src="./me.jpg" alt="some" />
        </div>
          <h1 className='about__me-me-title'>Who's this guy?</h1>
          <p className='about__me-me-text'>
            I'm a Front-End Developer from Kyiv, Ukraine.
            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            <br />
            <a href='#contact' className='about__me-link'>Let's make something special.</a>
          </p>
        </div>
        <div className='about__me-skills' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
          <div className='about__me-skills-card'>
            <h1 className='about__me-skills-card-title'>HTML</h1>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress size={80} variant="determinate" value={condition ? 90 : 0} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <Typography variant="h6" component="div" color="primary">
                {condition ? '90%' : ''}
              </Typography>
              </Box>
            </Box>
          </div>
          <div className='about__me-skills-card'>
            <h1 className='about__me-skills-card-title'>CSS</h1>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress  size={80} variant="determinate" value={condition ? 90 : 0} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <Typography variant="h6" component="div" color="primary">
                {condition ? '90%' : ''}
              </Typography>
              </Box>
            </Box>
          </div>
          <div className='about__me-skills-card'>
            <h1 className='about__me-skills-card-title'>JavaScript</h1>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress size={80} variant="determinate" value={condition ? 80 : 0} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <Typography variant="h6" component="div" color="primary">
                {condition ? '80%' : ''}
              </Typography>
              </Box>
            </Box>
          </div>
          <div className='about__me-skills-card'>
            <h1 className='about__me-skills-card-title'>React</h1>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress size={80} variant="determinate" value={condition ? 75 : 0} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <Typography variant="h6" component="div" color="primary">
                {condition ? '75%' : ''}
              </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;