const querystring = require('querystring')
const superagent = require('superagent')
const express = require('express')
const cors = require('cors')
const co = require('co');

const normalizers = require('./normalize-data')
const app = express()

const TOKENS = {
  unsplash: process.env.UNSPLASH_ACCESS_TOKEN,
  pixabay: process.env.PIXABAY_ACCESS_TOKEN,
}

function fetchAllAPIs(query = 'business') {
  return function* generator() {
    let unsplash = [], pixabay = []

    const images = []
    try {
      unsplash = yield superagent
        .get('https://api.unsplash.com/search/photos')
        .timeout({ response: 5000 })
        .query({ access_token: TOKENS.unsplash })
        .query({ query })
    } catch (e) {
      console.log('unsplash', e)
    }

    // Comment this api because is ========= REALLY SLOW API =============
    // all images on the results are HD and takes forever to load
    // on the page search, ideally we will use it when they provide thumbs
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
    // const pexels = yield superagent
    //   .get('http://api.pexels.com/v1/search')
    //   .set({ Authorization: TOKENS.pexels })
    //   .timeout({ response: 5000 })
    //   .query({ query: 'business' })
    //   .query({ per_page: 15 })
    //   .query({ page: 1 })

    // TODO march-5-17
    // check the response for ----pixabay.com----, the request for the access_token will be
    // answered within 24 hours, for HQ images, although not necessary
    //
    // state: REQUESTING...
    // https://pixabay.com/api/docs/

    try {
      pixabay = yield superagent
        .get('https://pixabay.com/api/')
        .timeout({ response: 5000 })
        .query({ key: TOKENS.pixabay })
        // accepted image_type: all, photo, illustration, vector
        .query({ image_type: 'all' })
        .query({ q: query })
    } catch (e) {
      console.log('pixabay', e)
    }

    // TODO
    // get fotolia api to work
    // https://www.fotolia.com/Services/API

    // TODO
    // handle errors with default []

    return images
      .concat(normalizeData(JSON.parse(unsplash.text).results, 'unsplash') )
      // .concat(normalizeData(JSON.parse(splashBase.text).images))
      .concat(normalizeData(JSON.parse(pixabay.text).hits, 'pixabay'))
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

function normalizeData(array, from) {
  return array.reduce(function(accumulator, element) {

    switch (from) {
      case 'unsplash':
        return [ ...accumulator,  normalizers.unsplash(element) ]

      case 'pixabay':
        return [ ...accumulator, normalizers.pixabay(element) ]

      case 'splashbase':
        return [ ...accumulator,  normalizers.splashbase(element)]

      default:
        return []
    }

  }, [])
}

app.listen(app.get('port'), function() {
  console.log('words-to-images is running on port', app.get('port'))
})
