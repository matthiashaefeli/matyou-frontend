import React, { Component } from 'react';
import axios from 'axios';
import Detail from './Detail';

class Book extends Component {
  state = {
    books: [],
    isLoaded: false,
    error: ''
  };

  componentDidMount = () => {
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

  render() {
    const { error, isLoaded, books } = this.state;

    if (error) {
      // return <NetworkError />
    }

    if (!isLoaded) {
      // return <Loading />
    }
console.log(books)
    return (
      <>
        <p className='bookLength'>{this.state.books.length} Books</p>
        <div className='bookContainer'>
          {books.map(book => (
            <Detail key={book.id} detail={book} type='book' />
          ))}
        </div>
      </>
    );
  }
}

export default Book;