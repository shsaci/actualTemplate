// server

var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var data = require('./views/data')

var PORT = 3000
var app = express()

app.get('/', function (req, res){
  res.send('<h1>Hello you!</h1>')
})

app.use(express.static('public'))

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/render', function(req, res) {
  // console.log(data);
  // console.log(data.people[0].name);
  res.render('index', data)
})

app.listen(PORT, function() {
  console.log('The server is listening on port ', PORT);
})
