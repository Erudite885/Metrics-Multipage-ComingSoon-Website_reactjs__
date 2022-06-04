import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css'

const Navigation = () => {
  return (
    
      <nav className='navigation'>
        <div className='container'>

          <NavLink className='navbar-brand' to='/'>
            Metrics Multi Page  
          </NavLink>

          <div className='navbar-items'>
            <ul className='navbar-lists'>
            
              <li className='nav-list_item'>
                <NavLink className='nav-link' to='/about'>
                  About Us
                </NavLink>
              </li>
              <li className='nav-list_item'>
                <NavLink className='nav-link' to='/blog/Blog'>
                  Blog
                </NavLink>
              </li>
              <li className='nav-list_item'>
                <NavLink className='nav-link contact-us' to='/contact'>
                  Contact Us
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
    
      </nav>
      
  )
}

export default Navigation;