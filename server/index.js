var express = require('express');
var bodyParser = require('body-parser');
var storyRouter = require('./routers/story.js');
var authorRouter = require('./routers/author.js');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost/hackednews');

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../react-client/dist"))

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use('/api/stories', storyRouter);
app.use('/api/authors', authorRouter);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
