import axios from 'axios';
import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './index.scss';

class Topic extends Component {
  state = {
    isLoaded: false,
    errors: '',
    topics: [],
    showMenu: false
  }

  handleDropDown = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  handleSearch = (e) => {
    this.props.handleQuickSearch(e.target.innerText);
    this.setState({
      showMenu: false
    })
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
    const { error, isLoaded, topics, showMenu } = this.state;

    if (error) {
      return <Error />
    }

    if (!isLoaded) {
      return <Loading />
    }
    return (
      <div className='topicContainer'>
      <button className='quickSearchButton' onClick={this.handleDropDown}>Quick Search</button>
      { showMenu ?
        (<div className='topicDropDown'>
          {topics
            .map(topic => (
              <p
                className=''
                key={topic.id}
                onClick={this.handleSearch.bind(this)}
              >
                {topic.title}
              </p>
            ))}
        </div>)
        : (null)
      }
    </div>
    );
  }
}

export default Topic;