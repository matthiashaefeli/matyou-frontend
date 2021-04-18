import axios from 'axios';
import React, { Component } from 'react';
import Detail from './Detail';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './blog.scss';

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
      return <Error />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <div>
        <p className='blogCount'>{this.state.blogs.length} Blogs</p>
        <div className='blogContainer'>
          <div>
            {blogs.map(blog => (
              <Detail key={blog.id} blog={blog} type='blog' />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;