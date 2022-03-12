import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Nav.scss';

export default function Nav() {
  const [headerPosition, setHeaderPosition] = useState(0);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const breadcrumbProps = {
    separator: isSmallScreen ? "|" : "/"
  };
  const linkProps = {
    variant: isSmallScreen ? 'subtitle2' : 'subtitle1'
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  useEffect(() => {
    setHeaderPosition(document.querySelector('.nav').offsetTop);
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector('.nav');
    const scrollTop = window.scrollY;
    scrollTop >= headerPosition ? header.classList.add('sticky') : header.classList.remove('sticky');
  };

  const scrolling = (to) => {
    const where = document.querySelector(`.${to}`);
    window.scrollTo({
      top: where.offsetTop,
      behavior: "smooth"
  });
  }

  return (
    <nav className='nav'>
      <Breadcrumbs {...breadcrumbProps} aria-label="breadcrumb" color='secondary'>
      <Link
          {...linkProps}
          className='nav__link'
          color="secondary"
          underline='none'
          component='button'
          onClick={() => scrolling('header')}
        >
          HOME
        </Link>
        <Link
          {...linkProps}
          className='nav__link'
          color="secondary"
          underline='none'
          component='button'
          onClick={() => scrolling('about')}
        >
          ABOUT
        </Link>
        <Link
          {...linkProps}
          className='nav__link'
          color="secondary"
          underline='none'
          component='button'
          onClick={() => scrolling('projects')}
        >
          PORTFOLIO
        </Link>
        <Link
          {...linkProps}
          className='nav__link'
          color="secondary"
          underline='none'
          component='button'
          onClick={() => scrolling('contact')}
        >
          CONTACT
        </Link>
      </Breadcrumbs>
    </nav>
  );
}
