const superagent = require('superagent')
const express = require('express')
const cors = require('cors')

const normalizers = require('./normalize-data')
const app = express()

const TOKENS = {
  unsplash: process.env.UNSPLASH_ACCESS_TOKEN,
  pixabay: process.env.PIXABAY_ACCESS_TOKEN,
}

app.set('port', (process.env.PORT || 5001))
app.use(cors())

app.get('/unsplash', function(req, res, next) {
  const { word = '' } = req.query || {}

  superagent
    .get('https://api.unsplash.com/search/photos')
    .timeout({ response: 5000 })
    .query({ access_token: TOKENS.unsplash })
    .query({ query: word })
    .end((err, data = {text: ""}) => {
      if (err) { return res.status(500).send({ error: 'Something failed!' + err }) }

      res.json(normalizeData(JSON.parse(data.text).results, 'unsplash'))
    })
})


// TODO march-5-17
// check the response for ----pixabay.com----, the request for the access_token will be
// answered within 24 hours, for HQ images, although not necessary
//
// state: REQUESTING...
// https://pixabay.com/api/docs/
app.get('/pixabay', function(req, res, next) {
  const { word = '' } = req.query || {}

  superagent
    .get('https://pixabay.com/api/')
    .timeout({ response: 5000 })
    .query({ key: TOKENS.pixabay })
    // accepted image_type: all, photo, illustration, vector
    .query({ image_type: 'all' })
    .query({ q: word })
    .end((err, data = {text: ""}) => {
      if (err) { return res.status(500).send({ error: 'Something failed!' + err }) }

      res.json(normalizeData(JSON.parse(data.text).hits, 'pixabay'))
    })
})


// Comment this api because is ========= REALLY SLOW API =============
// all images on the results are HD and takes forever to load
// on the page search, ideally we will use it when they provide thumbs
app.get('/splashbase', function(req, res, next) {
  const { word = '' } = req.query || {}

  superagent
    .get('http://www.splashbase.co/api/v1/images/search')
    .timeout({ response: 5000 })
    .query({ query: 'building' })
    .end((err, data = {text: ""}) => {
      if (err) { return res.status(500).send({ error: 'Something failed!' + err }) }

      res.json(normalizeData(JSON.parse(data.text).images, 'splashbase'))
    })
})

// TODO
// get fotolia api to work
// https://www.fotolia.com/Services/API

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

function normalizeData(array = [], from) {
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
