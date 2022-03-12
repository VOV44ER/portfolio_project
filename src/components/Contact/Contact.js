import './Contact.scss'
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

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
      </Box>
    </div>
  );
}

export default Contact;