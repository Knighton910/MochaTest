var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

var router = express.Router()

router.get('/', function(req, res) {
  res.json({'error': false, 'message': 'Yo !'})
})

app.get('/', function(req, res) {
  res.send('yo')
})

app.get('/class', function(req, res) {
    res.send(' I got class')
})

// router.post('/add', function(req, res) {
//   res.json({'error': false, 'message' : 'success', 'data': req.body.num1 + req.body.num2 })
// })

app.use('/', router)

app.listen(3000, function() {
  console.log('running @ 3000')
})
