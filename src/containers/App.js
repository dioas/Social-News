import React, { Component } from 'react';
import '../App.css';
import '../styles/style.css'
import { Route, Switch } from "react-router-dom";
import Homepage from './Homepage'
import Profile from './UserProfile'
import Photos from './PhotosUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/users/:userId" component={Profile} />
          <Route path="/albums" component={Profile} />
          <Route path="/yourphotos/:albumId" component={Photos} />
        </Switch>
      </div>
    );
  }
}

export default App;
