import React, { Component } from 'react'

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
          <textarea
            name="q"
            placeholder="Paste your blog entry "
            className="homeP__textarea"
            ref={node => { this.input = node; }}
            rows="10"
            cols="50"
          />
          <br />
          <input type="submit" value="Submit" className="homeP__submit"/>
        </form>

        <HowTo />
      </div>
    )
  }
}
