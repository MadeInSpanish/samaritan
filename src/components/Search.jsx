import React, { Component, PropTypes } from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router'
import cx from 'classnames'

import Loading from './Loading'

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
  "https://images.unsplash.com/photo-1480217741525-f06b2728f650?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1464225951723-4cd81a298434?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?dpr=1&auto=format&fit=crop&w=1500&h=866&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1482117050945-43fd39c9b0b5?dpr=1&auto=format&fit=crop&w=1500&h=2248&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1445282847990-42f666f865e2?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1429080542360-e39b1a6c57c2?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1483287076295-ef1be82e7c67?dpr=1&auto=format&fit=crop&w=1500&h=2244&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/29/night-square.jpg?dpr=1&auto=format&fit=crop&w=1500&h=988&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1425036458755-dc303a604201?dpr=1&auto=format&fit=crop&w=1500&h=773&q=80&cs=tinysrgb&crop=",
  "https://images.unsplash.com/photo-1484036218807-91efe1baff2f?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
]

var masonryOptions = {
    transitionDuration: 300
}

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      words: [],
      images: [],
      loadingWords: true,
      loadingImages: false,
      currentWord: null,
      totalImages: 0,
    }

    this.handleWordClick = this.handleWordClick.bind(this)
    this.handleImagesResponse = this.handleImagesResponse.bind(this)
  }

  componentDidMount() {
    this.setInitialFetch()
  }

  render() {
    const {
      currentWord,
      loadingImages,
      totalImages,
    } = this.state

    return (
      <div>
        <h3>Keywords founded! <small className="masonry__deck">Click words to change inspiration</small></h3>
        <ul className="masonry__tagsList">
          {this.state.words.map((word, index) => {
            const classNames = cx('masonry__wordBtn', {
              current: currentWord === word,
            })

            return (
              <li className="masonry__tags" key={`${word}${index}`}>
                <button className={classNames} onClick={this.handleWordClick}>{word}</button>
              </li>
            )
          })}
        </ul>

        <h1 className="masonry__headline">Inspiration&nbsp;
          <small className="masonry__deck">for <b>{currentWord}</b> with {totalImages} photos</small>
        </h1>

        {loadingImages && <Loading />}

        <Masonry
          className={'masonry__list'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad
        >
          {this.state.images.map(image => {
            return(
            <li key={image.id} className="masonry__item">
              <Link to={{
                pathname: '/search/zoom/',
                query: {
                  image: image.url,
                  download: image.download,
                }
              }}>
                <img src={image.small} className="masonry__image" role="presentation" />
              </Link>
            </li>
          )})}

          {demo.map(image => (
            <li key={image} className="masonry__item">
              <Link to={{ pathname: '/search/zoom/', query: { image } }}>
                <img src={image} className="masonry__image" role="presentation" />
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

  setInitialFetch() {
    const {
      location: {
        query: {
          q = null,
        } = {}
      } = {}
    } = this.context.router

    const words = decodeURIComponent(q).split(',') || []
    const currentWord = encodeURIComponent(words[0])

    this.fetchImages(currentWord)
    this.setState({ words })
  }

  fetchImages(currentWord) {
    this.setState({
      currentWord,
      loadingImages: true,
    })

    fetch(`http://localhost:5000/unsplash?word=${currentWord}`)
      .then(res => res.json())
      .then(this.handleImagesResponse)

    fetch(`http://localhost:5000/pixabay?word=${currentWord}`)
      .then(res => res.json())
      .then(this.handleImagesResponse)

    // Additional to the performance issues introduced by this API
    // they also use repeated id on some pictures because the search
    // is not different sometimes, this conflicts with react key prop on li
    //
    // fetch(`http://localhost:5000/splashbase?word=${currentWord}`)
    //   .then(res => res.json())
    //   .then(this.handleImagesResponse)
  }

  handleImagesResponse(images) {
      this.setState({
        images: this.state.images.concat(images),
        loadingImages: false,
        totalImages: this.state.totalImages + images.length || 0,
      })
  }

  handleWordClick(e) {
    // buttons should only have the word and not any html tags
    const currentWord = encodeURIComponent(e.currentTarget.innerHTML)

    // Make sure the images array is clean on every new search
    this.setState({
      images: [],
      totalImages: 0,
    }, () => {
      this.fetchImages(currentWord)
    })
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired,
}
