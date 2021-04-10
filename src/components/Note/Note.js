import axios from 'axios';
import React, { Component } from 'react';
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
  render() {
    const { error, isLoaded, notes, noteCount } = this.state;

    if (error) {
      // return <NetworkError />
    }

    if (!isLoaded) {
      // return <Loading />
    }
    return (
      <>
        <div>
          <input
            type='text'
            value={this.state.searchText}
            onChange={this.handleSearch.bind(this)}
            placeholder='Search....'
          />
          <p>{noteCount} Notes</p>
        </div>
        <div>
          {notes
            .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
            .map(note => (
              <p onClick={() => window.open(note.url, "_blank")} key={note.id}>{note.title}</p>
            ))}
        </div>
      </>
    )
  }
}

export default Note;