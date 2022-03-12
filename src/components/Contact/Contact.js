import './Contact.scss'
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#e4e4e4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e4e4e4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e4e4e4',
    },
    '&:hover fieldset': {
      borderColor: '#e4e4e4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e4e4e4',
    },
  },
});

function Contact() {
  return (
    <div className="contact" id='contact'>
      <h1 className="contact__title">contact</h1>
      <h3 className='contact__question'>Have a question or want to work together?</h3>
      <Box
        className='contact__form'
        component="form"
        sx={{
          '& > :not(style)': { m: 1.5, width: '40ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        <CssTextField InputProps={{ style: { color: '#fff' } }} InputLabelProps={{ style: { color: '#fff' } }} label="Name" id="custom-css-outlined-input" />
        <CssTextField InputProps={{ style: { color: '#fff' } }} InputLabelProps={{ style: { color: '#fff' } }} label="Enter email" id="custom-css-outlined-input" />
        <CssTextField InputProps={{ style: { color: '#fff' } }} InputLabelProps={{ style: { color: '#fff' } }} label="Your message" id="custom-css-outlined-input" multiline rows={4} />
        <Button variant="text" color='secondary' endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
      <div className='contact__socialMedia'>
        <Link href="https://www.linkedin.com/in/alputov-vova/"><LinkedInIcon sx={{ fontSize: '40px' }} color='secondary'></LinkedInIcon></Link>
        <Link href="https://github.com/VOV44ER"><GitHubIcon sx={{ fontSize: '40px' }} color='secondary'></GitHubIcon></Link>
        <Link href="#"><InstagramIcon sx={{ fontSize: '40px' }} color='secondary'></InstagramIcon></Link>
      </div>
      <h5 className='contact__miniTitle'>Alputov Vova &copy; 2022</h5>
    </div>
  );
}

export default Contact;