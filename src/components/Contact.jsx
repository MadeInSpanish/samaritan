import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="ContactP">
        <h5 className="ContactP__deck">
          Contact Form
        </h5>
        <div className="ContactP__form">
          <form action="https://formspree.io/anamariasosam@gmail.com" method="POST">
            <input
              type="email"
              name="_replyto"
              placeholder="Email here"
              className="ContactP__input"
            />
            <textarea
              name="name"
              placeholder="I love The Machine"
              className="ContactP__input"
              rows="7"
            />
            <input
              type="submit"
              value="Send"
              className="ContactP__send"
            />
          </form>
        </div>
      </div>
    )
  }
}
