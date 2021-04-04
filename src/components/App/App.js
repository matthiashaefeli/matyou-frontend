import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Note from '../Note/Note';
import Challenge from '../Challenge/Challenge';
import Blog from '../Blog/Blog';
import Book from '../Book/Book';
import About from '../About/About';

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
        <Route component={Error} />
    </Switch>
    );
  }
}

export default App;