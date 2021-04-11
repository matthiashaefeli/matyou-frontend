import axios from 'axios';
import React, { Component } from 'react';
import './challenge.scss';
import Detail from './Detail';

class Challenge extends Component {
  state = {
    error: null,
    isLoaded: false,
    challenges: [],
  }

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/challenges')
      .then(
        result => {
          this.setState({
            isLoaded: true,
            challenges: result.data
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
    const { error, isLoaded, challenges } = this.state;

    if (error) {
      // return <NetworkError />
    }

    if (!isLoaded) {
      // return <Loading />
    }

    return (
      <>
        <p>{this.state.challenges.length} Challenges</p>
        <div>
          {challenges.map(challenge => (
            <Detail key={challenge.id} detail={challenge} type='challenge' />
          ))}
        </div>
      </>
    )
  }
}

export default Challenge;