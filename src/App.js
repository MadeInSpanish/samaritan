import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import MainLayout from './components/MainLayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Networks from './components/Networks'
import Search from './components/Search'
import HowTo from './components/HowTo'
import Zoom from './components/Zoom'
import NoMatch from './components/NoMatch'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route path="/networks/" component={Networks} />
          <Route path="/search/" component={Search}/>
          <Route path="/search/zoom" component={Zoom}/>
          <Route path="/how-to/" component={HowTo} />
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}

export default App
