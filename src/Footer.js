import { Link, useLocation  } from 'react-router-dom'

import React from 'react';

const FooterLink = (props) => {

    const { link } = props
    let location = useLocation().pathname;
    return (
      <Link to={`/${link}`}>
      <div className="footer-link">
       <div>{link}</div>
      {location.includes(link) && <div className='dot'></div>}
    </div>
    </Link>
    );
  
}


function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className='footer-container'>
        <Link to={'/'}>
        <h1>PHIRST</h1>
        </Link>
        
        <div className="footer-row">
          <FooterLink link='team' />
          <FooterLink link='service' />
          <FooterLink link='training' />
          <FooterLink link='research' />
          <FooterLink link='contact' />

        </div>
        </div>
      </footer>
      <div className="base">
       <p> © 2020  PHIRST all rights reserved</p>

        </div>
      
    </React.Fragment>
  )
}

export default Footer
