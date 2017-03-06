import React, { Component } from 'react'

export default class Zoom extends Component {
  render() {
    const {
      location: {
        query: {
          image = '',
          download = '',
        } = {}
      } = {}
    } = this.props || {}

    return (
      <div className="zoomp">
        <button className="zoomp__btn back" onClick={(e) => { history.go(-1) } }>
          <i className="material-icons">arrow_back</i>
          Back
        </button>

        <ul className="zoomp__list">

          <li className="zoomp__item">
            <a href={download || "#"} className="zoomp__btn">
              <i className="material-icons">file_download</i>
              Download
            </a>
          </li>

          <li className="zoomp__item">
            <button className="zoomp__btn">
              <i className="material-icons">favorite</i>
              Favorite
            </button>
          </li>

          <li className="zoomp__item">
            <button className="zoomp__btn">
              <i className="material-icons">assignment</i>
              License
            </button>
          </li>
        </ul>
        <img src={image} className="zoomp__image" role="presentation" />
      </div>
    )
  }
}
