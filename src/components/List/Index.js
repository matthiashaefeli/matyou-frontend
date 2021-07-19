import React, { Component } from 'react';
import Title from '../Title/Title';
import List from './List';
import './list.scss';
import Navbar from '../Navbar/Navbar';

class Index extends Component {
  render() {
    const titleText = "Here are all my links, like the bookmarks on the Internet Browser"

    return (
      <article className='noteContainerHome'>
        <Navbar navTitle='List'/>
        <Title title={titleText} color={'black'} />
        <List />
      </article>
    )
  }
}

export default Index;