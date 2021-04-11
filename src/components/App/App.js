import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Note from '../Note/Index';
import Challenge from '../Challenge/Index';
import Blog from '../Blog/Index';
import Book from '../Book/Index';
import About from '../About/About';
import BookDetail from '../BookDetail/Index';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/notes' component={Note} />
        <Route exact path='/challenges' component={Challenge} />
        <Route exact path='/blogs' component={Blog} />
        <Route exact path='/books' component={Book} />
        <Route exact path='/about' component={About} />
        <Route exact path='/book-detail' component={BookDetail} />
        <Route component={Error} />
    </Switch>
    );
  }
}

export default App;