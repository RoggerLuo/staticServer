const bodyParser = require('body-parser')
const express = require('express')
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
const upload = require('./upload')
const app = express()

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With,Content-Length,Authorization,Accept,Cookie,Cache-Control,Pragma,expire-day");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next()
})

app.post('/upload',multipartMiddleware,upload);
app.use('/static', express.static('static'))

const server = require('http').createServer(app)
const port = 80
server.listen(port, () => console.log(`Express server listening on :${port}`))