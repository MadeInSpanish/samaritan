const querystring = require('querystring')
const superagent = require('superagent')
const express = require('express')
const cors = require('cors')
const co = require('co');

const app = express()

const TOKENS = {
  unsplash: process.env.UNSPLASH_ACCESS_TOKEN,
}

function fetchAllAPIs(query) {
  return function* generator() {

    const images = []
    const unsplash = yield superagent
      .get('https://api.unsplash.com/search/photos')
      .timeout({ response: 5000 })
      .query({ access_token: TOKENS.unsplash })
      .query({ query })

    // REALLY SLOW API SPLASHBASE
    //
    // const splashBase = yield superagent
    //   .get('http://www.splashbase.co/api/v1/images/search')
    //   .timeout({ response: 5000 })
    //   .query({ query: 'building' })

    // TODO
    // To get access to our API write us an email to api@pexels.com.
    // Please explain briefly how and where you want to integrate our photos.
    // We're excited to hear about your idea!
    //
    //
    // const pexels = yield superagent
    //   .get('http://api.pexels.com/v1/search')
    //   .set({ Authorization: TOKENS.pexels })
    //   .timeout({ response: 5000 })
    //   .query({ query: 'business' })
    //   .query({ per_page: 15 })
    //   .query({ page: 1 })


    // TODO
    // get pixabay api to work
    // https://pixabay.com/api/docs/

    // TODO
    // get fotolia api to work
    // https://www.fotolia.com/Services/API

    // TODO
    // handle errors with default []

    // TODO
    // normalize all this data to send only with small images
    //
    // {
    //   id
    //   url
    //   download
    //   small
    // }

    // console.log(JSON.parse(splashBase.text).images);

    return images
      .concat(normalizeData(JSON.parse(unsplash.text).results))
      // .concat(normalizeData(JSON.parse(splashBase.text).images))
      // .concat(JSON.parse(pexels.text).photos)
  }
}

app.set('port', (process.env.PORT || 5000))
app.use(cors())

app.get('/', function(req, res, next){
  const query = querystring.parse(req.url.replace('/?', '')) || { word: '' }

  co(fetchAllAPIs(query.word)).then(value => {
    res.json(value)
  })

})

function normalizeData(array) {
  return array.reduce(function(accumulator, element) {

    try {
      return [ ...accumulator, {
        id: element.id,
        url: element.urls.regular,
        download: element.links.download,
        small: element.urls.thumb,
      } ]
    } catch (err) { }

    try {
      return [ ...accumulator, {
        id: element.id,
        url: element.url,
        download: element.large_url,
        small: element.url,
      } ]
    } catch (err) { }

    try {
      return [ ...accumulator, {
        id: element.url,
        url: element.src.large,
        download: element.src.original,
        small: element.src.small,
      } ]
    } catch (err) { }

  }, [])
}

app.listen(app.get('port'), function() {
  console.log('words-to-images is running on port', app.get('port'))
})
