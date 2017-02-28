import React, { Component } from 'react'
import NetworkItem from './NetworkItem'

export default class Networks extends Component {
  render() {
    return (
      <div className="NetworksP">
        <h5 className="NetworksP__deck">
          <b>The Machine</b> has been possible using:
        </h5>
        <ul className="NetworksP__list">
          <NetworkItem network="unsplash"/>
          <NetworkItem network="pexels"/>
          <NetworkItem network="pixabay"/>
        </ul>
      </div>
    )
  }
}
