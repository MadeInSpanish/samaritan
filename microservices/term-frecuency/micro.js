const keyword_extractor = require("keyword-extractor")
const natural = require('natural')
const express = require('express')
const cors = require('cors')
const app = express()

app.set('port', (process.env.PORT || 5002))

app.use(cors())

const extractorOptions = {
  language: "english",
  remove_digits: true,
  return_changed_case: true,
  remove_duplicates: false,
}

app.post('/', function(req, res, next){
  const body = req.query || {}

  if ('body' in body) {
    const save = []
    const tfidf = new natural.TfIdf()
    const data = keyword_extractor.extract(body.body, extractorOptions)

    tfidf.addDocument(data)

    tfidf.listTerms(0).forEach((item, index) => {
      if (item.tfidf > 0 && save.length < 10 && item.term.length > 3) {
        save.push(item.term.replace(/[^a-zA-Z ]/g, ""))
      }
    })

    res.json({ words: save })
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
