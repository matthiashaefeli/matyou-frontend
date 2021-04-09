import axios from 'axios';
import React, { Component } from 'react';
import './note.scss';
import ReactPaginate from 'react-paginate';

class Note extends Component {
  state = {
    error: null,
    isLoaded: false,
    notes: [],
    searchText: '',
    noteCount: 0,
    offset: 0,
    perPage: 10,
    currentPage: 0
  }

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/notes')
    .then(
      response => {
        const data = response.data;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const notes = slice.map(note => <>
          <p key={note.id} onClick={() => window.open(note.url, "_blank")}>{note.title}</p>
        </>
        )
        this.setState({
          isLoaded: true,
          noteCount: response.data.length,
          pageCount: Math.ceil(data.length / this.state.perPage),
          notes
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

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadDataFromServer()
    });
  };

  componentDidMount = () => {
    this.loadDataFromServer();
  }

  handleSearch = (e) => {
    let filteredNotes
    filteredNotes = this.state.notes
    .filter(note => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
    console.log(e.target.value)
    this.setState({
      searchText: e.target.value,
      noteCount: filteredNotes.length
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
        {/* <div className='searchTextInput'>
          <input
            type='text'
            value={this.state.searchText}
            onChange={this.handleSearch.bind(this)}
            placeholder='Search....'
          />
          <p className='noteLength'>{noteCount} Notes</p>
        </div> */}
        <div className='noteContainer'>
        {this.state.notes}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
      </>
    )
  }
}

export default Note;