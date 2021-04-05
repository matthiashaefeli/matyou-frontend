import React, { Component } from 'react';
import './book.scss';
import Title from '../Title/Title';
import Detail from './Detail';

class Book extends Component {
  render() {
    const titleText = "I really try to read a book sometimes. Here are all of the books I've read with some notes."

    return (
      <article className='bookHome'>
        <Title title={titleText} color={'black'} />
        <Detail />
      </article>
    )
  }
}

export default Book;