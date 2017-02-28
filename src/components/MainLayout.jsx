import React, { Component } from 'react'

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
            <li className="lay1__item">About</li>
            <li className="lay1__item">Support</li>
            <li className="lay1__item">Contact Us</li>
            <li className="lay1__item">Networks</li>
          </ul>
          <form action="" className="lay1__search">
            <input type="search" placeholder="Search" className="lay1__input" />
          </form>
        </header>

        <div className="lay1__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
