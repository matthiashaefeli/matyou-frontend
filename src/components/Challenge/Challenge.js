import axios from 'axios';
import React, { Component } from 'react';
import Detail from './Detail';
import Loading from '../Loading/Loading';
import './challenge.scss';

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
      return <Loading />
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