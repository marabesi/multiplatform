var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var error = require('./middlewares/error'); 
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/fiap');

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser('neventos'));
app.use(session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function () {
  console.log("Aplicação no ar.");
});