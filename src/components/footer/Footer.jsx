import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// import { Terms, Privacy } from ''

import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { ImFacebook2, ImLinkedin } from 'react-icons/im'
import { FaTwitterSquare } from 'react-icons/fa'

import footer from './Footer.module.css'

const Footer = () => {
  return (
      <footer className={footer.footer}>
        <div className={footer.socialMedia}>
          <BsYoutube color='#fff' />
          <ImFacebook2 color='#ccc' />
          <ImLinkedin color='#ccc' />
          <BsInstagram color='#ccc' />
          <FaTwitterSquare color='#ccc' />
        </div>
        <div className={footer.terms}>
          <Link to='/#Terms'>
           Terms of Service 
           {/* <Terms /> */}
          </Link>
          <Link to='/Privacy'>
          Privacy Policy
          {/* <Privacy /> */}
          </Link>
         
        </div>
        <div className={footer.copyright}>
          <p> Copyright 2021 @ Peddle Technologies. All Righgts Reserved </p>
        </div>
        {/* <div className={footer.circle4}>
        
        </div> */}
        
      </footer>
      
  );
};

export default Footer;