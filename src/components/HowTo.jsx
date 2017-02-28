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
        <button className="howtop__button" onClick={this.handleHowtoClick}>HOW IT WORKS</button>
        <ul className="howtop__list">
          <li className="howtop__item">1.COPY/paste <span>UR</span> post URL</li>
          <li className="howtop__item intro">2.press<span>-</span>INTRO</li>
          <li className="howtop__item">3.DOWNLOAD <span>images</span></li>
          <li className="howtop__item enjoy">& ENJOY</li>
        </ul>
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
