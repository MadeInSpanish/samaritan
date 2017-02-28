import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="AboutP">
        <img src={require('../images/blog.jpg')} alt="computer" className="AboutP__image"/>
        <p className="AboutP__deck">Let our network's images inspire your next blog post...</p>
        <p className="AboutP__description">
          Build more powerful and engaging <b>blogs</b> using the best world's imagery, and
          bring your story to life with the perfect images. We have access to million
          embeddable images.
        </p>
      </div>
    )
  }
}
