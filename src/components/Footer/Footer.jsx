import React from 'react';
import './Footer.css'

function Footer() {
    return (
      <div className='footer'>
        <p>{(new Date()).getFullYear()}@Права типа защищены</p>
      </div>
    );
  }
  
  export default Footer;