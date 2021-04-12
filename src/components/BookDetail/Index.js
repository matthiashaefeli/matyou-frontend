import React, { Component } from 'react';
import axios from 'axios';
import Comment from '../Comment/Index';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      book: {},
      error: '',
      comments: []
    }
  }

  componentDidMount = () => {
    axios.get(`https://warm-anchorage-02243.herokuapp.com/data/book/${this.props.location.state.id}`)
      .then(
        result => {
          this.setState({
            isLoaded: true,
            book: result.data,
            comments: result.data.comments
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

  render() {
    const { error, isLoaded, comments } = this.state
    const { title, url } = this.state.book

    let sectionStyle = {
      backgroundImage: `url(${url})`,
      width: '11em',
      height: '17em',
      cursor: 'pointer',
      margin: '10px',
      color: 'black',
    }

    if (error) {
      return  <Error />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <article className='commentHome'>
        <div className='commentContainer'>
          <div className='commentImage'>
            <img src={url} alt={title} style={sectionStyle} />
          </div>
          <div>
            <p><b>Title: {title}</b></p>
            <p><b>Notes: </b></p>
            <ul className='commentComment'>
              <p >
              {comments.map(comment => (
                <Comment key={comment.id} comment={comment} type='comment' />
              ))}
              </p>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}

export default Index;