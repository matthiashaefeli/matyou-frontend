import React, { Component } from 'react';
import axios from 'axios';
import Detail from './Detail';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class Book extends Component {
  state = {
    books: [],
    isLoaded: false,
    error: ''
  };

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/books')
    .then(
      result => {
        this.setState({
          isLoaded: true,
          books: result.data
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
    const { error, isLoaded, books } = this.state;

    if (error) {
      return <Error />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <>
        <p>{this.state.books.length} Books</p>
        <div>
          {books.map(book => (
            <Detail key={book.id} detail={book} type='book' />
          ))}
        </div>
      </>
    );
  }
}

export default Book;