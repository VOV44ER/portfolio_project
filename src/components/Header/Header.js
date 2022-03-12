import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'animate.css';

import './Header.scss';

const Header = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const buttonProps = {
    size: isSmallScreen ? "small" : "large"
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x90914
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const scrolling = () => {
    const about = document.querySelector('.about');
    window.scrollTo({
      top: about.offsetTop,
      behavior: "smooth"
  });
  }

  return (
  <div ref={myRef} className='header'>
    <div className='header__container'>
      <h1 className='header__title animate__animated animate__backInDown'>
        Hi, I'm <span className='header__title-name'>Alputov Vova</span>
        <br />
        I'm a Front-end web developer
      </h1>
        <Button
          {...buttonProps}
          className='animate__animated animate__bounceIn'
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          color="secondary"
          onClick={scrolling}
        >
          View my work
        </Button>
    </div>
  </div>
  )
}

export default Header;