const keyword_extractor = require("keyword-extractor");
const querystring = require('querystring');
const Xray = require('x-ray')
const natural = require('natural')
const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

const extractorOptions = {
  language: "english",
  remove_digits: true,
  return_changed_case: true,
  remove_duplicates: true,
}

const word2rep = '(adsbygoogle = window.adsbygoogle || []).push({});'

const xray = new Xray({
  filters: {
    trim: val => typeof val === 'string' ? val.replace(/(\r\n|\n|\r)/gm,"") : value,
    removeAnalytics: val => typeof val === 'string' ? val.replace(word2rep, "") : value,
  }
})

app.get('/', function(req, res, next){
  const web = querystring.parse( req.url.replace('/?', '') ) || { web: '' }

  if ('web' in web) {
    xray(web.web, {
      title: 'title',
      article: 'article | trim | removeAnalytics'
    })((err, obj) => {
      const save = []
      const tfidf = new natural.TfIdf()
      const data = keyword_extractor.extract(obj.article, extractorOptions);

      tfidf.addDocument(data)
      tfidf.listTerms(0).forEach((item, index) => {
        if (item.tfidf > 0 && save.length < 10 && item.term.length > 3) {
          save.push(item.term)
        }
      })

      res.json({ words: save });
    })
  }
});

app.listen(3001, function(){
 console.log('CORS-enabled web server listening on port 3001');
});
