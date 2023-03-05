import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='Footer'>
      <span className='rect'></span>
      <p className='contact'>hello@workoholics.es<br></br>
      +34 944 059 957 </p>
      <h3 className='h3'>We love what we do.<br></br>We are Worköholics.</h3>
      <p className='mail'>Email</p><hr2 />
      <div><span className='tic'></span><p className='terms'>I have read and accepted the Terms and Conditions.</p></div>
      <div className='submit'><p>Sumbit</p></div><span className="arrow" ><FontAwesomeIcon icon={faArrowRight} /></span>
      
    </div>
  )
}

export default Footer;

