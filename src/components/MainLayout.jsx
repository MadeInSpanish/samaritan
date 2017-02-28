import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div className="lay1">
        <header className="lay1__header">
          <div className="lay1__headerLeft">
            <a href="/" className="logo">
              <i className="material-icons">group_work</i>
              Samaritan
            </a>

          </div>
          <ul className="lay1__list">
            <li className="lay1__item">
              <Link to="/about/" className="lay1__link">About</Link>
            </li>
            <li className="lay1__item">
              <Link to="/contact/" className="lay1__link">Contact Us</Link>
            </li>
            <li className="lay1__item">
              <Link to="/networks/" className="lay1__link">Networks</Link>
            </li>
          </ul>
          <form action="/search/" className="lay1__search">
            <input type="search" name="q" placeholder="Paste url" className="lay1__input" />
          </form>
        </header>

        <div className="lay1__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
