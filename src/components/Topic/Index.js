import axios from 'axios';
import React, { Component } from 'react';

class Topic extends Component {
  state = {
    isLoaded: false,
    errors: '',
    topics: []
  }

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/topics')
    .then(
      result => {
        this.setState({
          isLoaded: true,
          topics: result.data,
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
    const { handleQuickSearch } = this.props;
    const { error, isLoaded, topics } = this.state;

    if (error) {
      // return <NetworkError />
    }

    if (!isLoaded) {
      // return <Loading />
    }
    return (
      <div>
      {topics
        .map(topic => (
          <p key={topic.id}  onClick={handleQuickSearch.bind(this)}>{topic.title}</p>
        ))}
    </div>
    );
  }
}

export default Topic;