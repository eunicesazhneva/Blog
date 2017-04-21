var express = require('express');
var app = express();
var path = require ('path');

app.get('/fetchdata', function(req, res) {
  var data = {'name': 'Nik'}
  res.json(200,  data);
});
app.use(express.static('public'))
app.get('/public', function(req, res){


  res.sendfile('index.html');
})
app.listen(8888, function(){
  console.log('Server has been started');

});
