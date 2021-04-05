import React, { Component } from 'react';
import './challenge.scss';
import Title from '../Title/Title';
import Detail from './Detail';

class Challenge extends Component {
  render() {
    const titleText = "On my journey to learn to code I used a lot of different challenges. Here are some Ruby and Javascript challenges. Have fun!"

    return (
      <article className='challengeHome'>
        <Title title={titleText} color={'black'} />
        <Detail />
      </article>
    )
  }
}

export default Challenge;