const express = require('express')
const app = express()
const port = 3000
var path = require("path");
var favicon = require('serve-favicon');

app.use(express.static('public'))

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname,'public','views','index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened... ', err)
  }
  console.log(`Server is listening on port :${port}`)
})
