import React from 'react'

const Loading = () => (
  <div className="loading">
    <i className="material-icons">camera_enhance</i>
    <br />
    Loading Something Awesome&nbsp;
    <span className="loading__dots">
      <span className="loading__dot bounce1" />
      <span className="loading__dot bounce2" />
      <span className="loading__dot bounce3" />
    </span>
  </div>
)

export default Loading
