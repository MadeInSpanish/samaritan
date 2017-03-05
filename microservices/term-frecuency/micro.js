const keyword_extractor = require("keyword-extractor")
const querystring = require('querystring')
const natural = require('natural')
const express = require('express')
const cors = require('cors')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(cors())

const extractorOptions = {
  language: "english",
  remove_digits: true,
  return_changed_case: true,
  remove_duplicates: true,
}

app.post('/', function(req, res, next){
  const body = querystring.parse(req.url.replace('/?', '')) || { body: '' }

  if ('body' in body) {
    const save = []
    const tfidf = new natural.TfIdf()
    const data = keyword_extractor.extract(body.body, extractorOptions)

    tfidf.addDocument(data)

    tfidf.listTerms(0).forEach((item, index) => {
      if (item.tfidf > 0 && save.length < 10 && item.term.length > 3) {
        save.push(item.term)
      }
    })

    res.json({ words: save })
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
