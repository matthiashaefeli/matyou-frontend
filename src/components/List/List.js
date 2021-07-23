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

  showLinks = (e, id) => {
    const class_name = 'linkList_' + id
    const link_id = 'link_' + id
    let list = document.getElementsByClassName(class_name)
    let link = document.getElementById(link_id)
    for (let item of list) {
      if (item.classList.contains('listHidden')) {
        item.classList.remove("listHidden")
        link.style.color = 'green'
        link.style.fontWeight = '700';
      } else {
        item.classList.add("listHidden")
        link.style.color = 'black'
        link.style.fontWeight = '400';
      }
  }
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
                <div
                  className='listText'
                  key={li.id}
                >
                  <div
                    onClick={(e) => this.showLinks(e, li.id)}
                    className='linkListTitle'
                    id={`link_${li.id}`}
                  >
                    {li.title}
                  </div>
                  {li.comments.map(c => (
                    <ul
                      className={`listHidden listLink linkList_${li.id}`}
                      key={c.id}
                      dangerouslySetInnerHTML={{ __html: c.body.replace(/href/g, "target='_blank' href") }}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default List;