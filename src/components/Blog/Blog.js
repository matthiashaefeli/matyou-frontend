import axios from 'axios';
import React, { Component } from 'react';
import './blog.scss';
import Detail from './Detail';

class Blog extends Component {
  state = {
    error: null,
    isLoaded: false,
    blogs: [],
  }

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/blogs')
    .then(
      result => {
        this.setState({
          isLoaded: true,
          blogs: result.data
        })
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  componentDidMount = () => {
    this.loadDataFromServer();
  }

  render() {
    const { error, isLoaded, blogs } = this.state;

    if (error) {
      // return <NetworkError />
    }

    if (!isLoaded) {
      // return <Loading />
    }

    return (
      <>
        <p >{this.state.blogs.length} Blogs</p>
        <div>
          {blogs.map(blog => (
            <Detail key={blog.id} blog={blog} type='blog' />
          ))}
        </div>
      </>
    );
  }
}

export default Blog;