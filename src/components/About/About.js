import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Title from '../Title/Title';
import './about.scss';
import Navbar from '../Navbar/Navbar';

class About extends Component {
  titleText = "Hi! I'm Mat"

  render() {
    return (
      <article className='aboutHome'>
        <Navbar navTitle='About'/>
        <Title title={this.titleText} color={'black'} />
        <div className='aboutText'>
          This is my Notebook. I'm working as a Software Engineer @ <a href="https://get.popmenu.com/" target="_blank" rel="noopener noreferrer">PopMenu</a> and here is my journey.
          If I struggle with something or learn something new, I write it down here.
          My Blog is the result of a little bit more research.
          The Notes are a reminder of stuff that I'm using and I do not remember how.
          Link List contains all my links like bookmarks on the Web Browser.
          And finally my Coding Challenges. On my journey to learn to code I used a lot of different challenges, and here are some of them.
          HAVE FUN!
        </div>
        <div className='aboutLinks'>
          <a href='https://github.com/matthiashaefeli' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.linkedin.com/in/matthias-haefeli/' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='loginLink'>
          <a href='https://warm-anchorage-02243.herokuapp.com/' target='_blank' rel="noopener noreferrer">.</a>
        </div>
      </article>
    )
  }
}

export default About;