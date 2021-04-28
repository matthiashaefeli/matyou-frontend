import React, { Component } from 'react';
import Title from '../Title/Title';
import Challenge from './Challenge';
import './challenge.scss';
import Navbar from '../Navbar/Navbar';

class Index extends Component {
  render() {
    const titleText = "On my journey to learn to code I used a lot of different challenges. Here are some Ruby and Javascript challenges. Have fun!"

    return (
      <article className='challengeHomeContainer'>
        <Navbar  navTitle='Challenge'/>
        <Title title={titleText} color={'black'} />
        <Challenge />
      </article>
    )
  }
}

export default Index;