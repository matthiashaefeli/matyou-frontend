import React, { Component } from 'react';
import './book.scss';
import Title from '../Title/Title';
import Book from './Book';
import Navbar from '../Navbar/Navbar';

class Index extends Component {
  render() {
    const titleText = "I really try to read a book sometimes. Here are all of the books I've read with some notes."

    return (
      <article className='bookHomeContainer'>
        <Navbar  navTitle='Book'/>
        <Title title={titleText} color={'black'} />
        <Book />
      </article>
    )
  }
}

export default Index;