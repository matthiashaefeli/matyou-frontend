import React, { Component } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,
         faBookOpen,
         faBlog,
         faStickyNote,
         faGrimace,
         faCube,
         faGlasses } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <div className='links'>
        <a href='/'><FontAwesomeIcon icon={faCube} />
          <span className='fontLink'> Home</span>
        </a>
        <a href='/notes'><FontAwesomeIcon icon={faStickyNote} />
          <span className='fontLink'> Notes</span>
        </a>
        <a href='/books'><FontAwesomeIcon icon={faBookOpen} />
          <span className='fontLink'> Books</span>
        </a>
        <a href='/blogs'><FontAwesomeIcon icon={faBlog} />
          <span className='fontLink'> Blog</span>
        </a>
        <a href='/challenges'><FontAwesomeIcon icon={faGlasses} />
          <span className='fontLink'> Challenge</span>
        </a>
        <a href='/about'><FontAwesomeIcon icon={faGrimace} />
          <span className='fontLink'> About</span>
        </a>
      </div>
    )
  }
}

export default Navbar;