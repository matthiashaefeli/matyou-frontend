import axios from 'axios';
import React, { Component } from 'react';
import Loading from '../Loading/Loading'
import Error from '../Error/Error';
import './list.scss';

class List extends Component {
  state = {
    error: null,
    isLoaded: false,
    list: [],
    searchText: '',
    listCount: 0
  }

  loadDataFromServer = () => {
    axios.get('https://warm-anchorage-02243.herokuapp.com/data/lists')
    .then(
      result => {
        console.log(result.data)
        this.setState({
          isLoaded: true,
          list: result.data,
          listCount: result.data.length
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
      const filteredList = this.state.list
      .filter(list => list.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
      this.setState({
        listCount: filteredList.length
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
    const { error, isLoaded, list, listCount } = this.state;

    if (error) {
      return <Error />
    }

    if (!isLoaded) {
      return <Loading />
    }
    return (
      <div className='listHome'>
        <div className='listSearch'>
          <p>Showing {listCount} Lists</p>
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
        </div>
        <div className='listContainer'>
          <div className='list'>
            {list
              .filter(li => li.title.toLowerCase().includes(this.state.searchText.toLowerCase()))
              .map(li => (
                <p
                  className='listText'
                  key={li.id}
                >
                  {li.title}:
                  {li.comments.map(
                    c => (
                      <div className='listLink' dangerouslySetInnerHTML={{ __html: c.replace(/href/g, "target='_blank' href") }} />
                    )
                  )}
                </p>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default List;