import React, { Component } from 'react'
import { Link } from 'react-router'

import HowTo from './HowTo'

export default class Home extends Component {
  render() {
    return (
      <div className="homeP">
        <h5 className="homeP__deck">
          Say Hello, to <b>Samaritan</b>, analize your blog entries and get
        </h5>
        <h1 className="homeP__slogan">Pictures & Inspiration Royalty Free</h1>

        <form action="search/" className="homeP__form">
          <input type="text" name="q" placeholder="paste ur blog entry URL" className="homeP__input"/>
        </form>


        <HowTo />
      </div>
    )
  }
}
