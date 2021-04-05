import React, { Component } from 'react';
import './note.scss';
import Title from '../Title/Title';
import Detail from './Detail'

class Note extends Component {
  render() {
    const titleText = "Learning something new is a good feeling, not remembering it afterwards is not a good feeling. You know that you've seen it before and you google it over and over again. I write it down for myself and save it here. These are all my little notes."

    return (
      <article className='noteHome'>
        <Title title={titleText} color={'black'} />
        {/* <Detail /> */}
      </article>
    )
  }
}

export default Note;
