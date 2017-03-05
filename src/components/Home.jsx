import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import HowTo from './HowTo'

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return false
    }
  }

  render() {
    return (
      <div className="homeP">
        <h5 className="homeP__deck">
          Say Hello, to <b>The Machine</b>, analize your blog entries and get
        </h5>
        <h1 className="homeP__slogan">Pictures & Inspiration Royalty Free</h1>
        <form action="search/" className="homeP__form" onSubmit={this.handleSubmit}>
          <textarea
            name="q"
            placeholder="Paste your blog entry "
            className="homeP__textarea"
            ref={node => { this.input = node; }}
            rows="10"
            cols="50"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" className="homeP__submit"/>
        </form>

        <HowTo />
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      text: event.currentTarget.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch(`https://microservices-samaritan.now.sh/?body=${this.state.text}`, { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        browserHistory.push(`/search/?q=${encodeURIComponent(json.words.join())}`)
      })

  }
}
