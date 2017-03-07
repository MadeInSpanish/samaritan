var path = require('path')
var mime = require('mime')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5003))

app.get('/download', function(req, res){
  var file = __dirname + '/chrome-extension.crx'
  res.download(file) // Set disposition and send it.
})

app.listen(app.get('port'), function() {
  console.log('Download is running on port', app.get('port'))
})
