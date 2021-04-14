import axios from 'axios';
import React, { Component } from 'react';
import Topic from '../Topic/Index';
import Loading from '../Loading/Loading'
import Error from '../Error/Error';
import './note.scss';

class Note extends Component {
  state = {
    error: null,
    isLoaded: false,
    notes: [],
    searchText: '',
    noteCount: 0
  }

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/notes')
    .then(
      result => {
        this.setState({
          isLoaded: true,
          notes: result.data,
          noteCount: result.data.length
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
    this.loadDataFromServer()
  }

  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value,
    }, () => {
      const filteredNotes = this.state.notes
      .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
      this.setState({
        noteCount: filteredNotes.length
      })
    })
  }

  handleQuickSearch = (text) => {
    this.handleSearch({target: { value: text }})
  }

  clearSearch = () => {
    this.handleSearch({target: { value: '' }})
  }

  render() {
    const { error, isLoaded, notes, noteCount } = this.state;

    if (error) {
      return <Error />
    }

    if (!isLoaded) {
      return <Loading />
    }
    return (
      <div className='noteHome'>
        <div className='noteSearch'>
          <p>Showing {noteCount} Notes</p>
          <input
            className='inputField'
            type='text'
            value={this.state.searchText}
            onChange={this.handleSearch.bind(this)}
            placeholder='Search....'
          />
          <button
            className='clearSearch'
            onClick={this.clearSearch}
          >
            Clear Search
          </button>
          <Topic handleQuickSearch={this.handleQuickSearch} />
        </div>
        <div className='noteContainer'>
          <div className='notes'>
            {notes
              .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
              .map(note => (
                <p
                  className='noteText'
                  onClick={() => window.open(note.url, "_blank")}
                  key={note.id}
                >
                  {note.title}
                </p>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Note;