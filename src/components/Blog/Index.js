import React, { Component } from 'react';
import './blog.scss';
import Title from '../Title/Title';
import Blog from './Blog';
import Navbar from '../Navbar/Navbar';

class Index extends Component {
  render() {
    const titleText = "I've read a lot of blogs but I don't have a favorite. Sometimes I bookmark a good blog, but if I need it again I certainly won't find it. Writing a blog and doing more research on something helps me to better understand and learn. This section is a mix of Blogs, Tutorials, and Information."

    return (
      <article className='blogHomeContainer'>
        <Navbar navTitle='Blog'/>
        <Title title={titleText} color={'black'} />
        <Blog />
      </article>
    )
  }
}

export default Index;