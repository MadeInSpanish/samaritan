import React, { Component } from 'react'
import cx from 'classnames'

export default class HowTo extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.handleHowtoClick = this.handleHowtoClick.bind(this)
  }

  render() {
    const howtoClasses = cx('howtop', {
      open: this.state.open,
    })

    return (
      <div className={howtoClasses}>
        <button className="howtop__button" onClick={this.handleHowtoClick}>How it works</button>
      </div>
    )
  }

  handleHowtoClick(event) {
    event.preventDefault()

    this.setState({
      open: !this.state.open,
    })
  }
}
