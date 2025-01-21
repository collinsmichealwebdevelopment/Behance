import React, { useState, useEffect} from 'react'
import './Footer.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
const Footer = () => {
  
  return (
    <>
      <h2 className='head-text'>Contact us <span>we ready at </span>your service!</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile'></img>
          <a href='tel: +1234567890' className='p-text'>+1234567890</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.email} alt='email'></img>
          <a href='mailto:companysgmail@gmail.com' className='p-text'>companysgmail@gmail.com</a>
        </div>
      </div>
     
    </>
  )
}

export default AppWrap( 
  MotionWrap(Footer, 'app__footer'),
  'contact', "app__whitebg");