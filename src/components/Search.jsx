import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router'

const demo = [
  "https://images.unsplash.com/reserve/NV0eHnNkQDHA21GC3BAJ_Paris%20Louvr.jpg?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?dpr=1&auto=format&fit=crop&w=1199&h=1799&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?dpr=1&auto=format&fit=crop&w=1199&h=794&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1444653389962-8149286c578a?dpr=1&auto=format&fit=crop&w=1199&h=805&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?dpr=1&auto=format&fit=crop&w=1199&h=803&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1415393495365-a8171b7ae0f7?dpr=1&auto=format&fit=crop&w=1199&h=927&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1469198629071-b7d66775e2fa?dpr=1&auto=format&fit=crop&w=1199&h=794&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1471523094700-e1ec9d935a90?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1487611459768-bd414656ea10?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1479243669563-7633e07b6520?dpr=1&auto=format&fit=crop&w=1199&h=781&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1473167146081-90eecb675695?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1478186172078-2a70949993f0?dpr=1&auto=format&fit=crop&w=1199&h=1796&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1469042363927-a95686d2b78e?dpr=1&auto=format&fit=crop&w=1199&h=803&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1454372087329-9c0c35936854?dpr=1&auto=format&fit=crop&w=1199&h=801&q=80&cs=tinysrgb&crop=",
]

var masonryOptions = {
    transitionDuration: 300
}

export default class Search extends Component {
  render() {
    const { location: { query } } = this.props

    return (
      <div>
        <header className="masonry__header">
          <h1 className="masonry__headline">Inspiration <span className="masonry__deck">with 230 photos</span>
          </h1>
          <ul className="masonry__tagsList">
            <li className="masonry__tags"><h3>Keywords founded!</h3></li>
            <li className="masonry__tags">Business</li>
            <li className="masonry__tags">Time</li>
            <li className="masonry__tags">People</li>
          </ul>
        </header>
        <Masonry
          className={'masonry__list'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {demo.map(image => (
            <li key={image} className="masonry__item">
              <Link to={{ pathname: '/search/zoom/', query: { image } }}>
                <img src={image} className="masonry__image" />
              </Link>
            </li>
          ))}
        </Masonry>

        <div className="searchp__infinite">
          <i className="material-icons">camera_enhance</i>
          <br />
          Loading Something Awesome...
        </div>
      </div>
    )
  }
}
