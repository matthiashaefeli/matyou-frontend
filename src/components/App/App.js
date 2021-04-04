import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Note from '../Note/Note';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/notes' component={Note} />
        <Route component={Error} />
    </Switch>
    );
  }
}

export default App;