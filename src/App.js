import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Search from './components/Search'
import Zoom from './components/Zoom'
import NoMatch from './components/NoMatch'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home} />
          <Route path="/search/" component={Search}/>
          <Route path="/search/zoom" component={Zoom}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}

export default App
