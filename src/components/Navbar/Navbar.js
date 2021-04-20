import React, { Component } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen,
         faBlog,
         faStickyNote,
         faGrimace,
         faCube,
         faGlasses } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  setActive = (link) => {
    return link === this.props.navTitle ? 'activeLink' : ''
  }

  render() {
    return (
      <div className='links'>
        <a href='/' className={this.setActive('Home')}>
          <FontAwesomeIcon icon={faCube} />
          <span className='fontLink'> Home</span>
        </a>
        <a href='/notes' className={this.setActive('Note')}>
          <FontAwesomeIcon icon={faStickyNote} />
          <span className='fontLink'> Notes</span>
        </a>
        <a href='/books' className={this.setActive('Book')}>
          <FontAwesomeIcon icon={faBookOpen} />
          <span className='fontLink'> Books</span>
        </a>
        <a href='/blogs' className={this.setActive('Blog')}>
          <FontAwesomeIcon icon={faBlog} />
          <span className='fontLink'> Blog</span>
        </a>
        <a href='/challenges' className={this.setActive('Challenge')}>
          <FontAwesomeIcon icon={faGlasses} />
          <span className='fontLink'> Challenge</span>
        </a>
        <a href='/about' className={this.setActive('About')}>
          <FontAwesomeIcon icon={faGrimace} />
          <span className='fontLink'> About</span>
        </a>
      </div>
    )
  }
}

export default Navbar;