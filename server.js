var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Yay node girls!')
})

app.listen(8080, function () {

  console.log('Started listening server on port 3000. Ready to accept connections.')
})
