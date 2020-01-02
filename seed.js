var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var Author = require('./db/models/author.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) { 
  var authors = data.map(one => one.by)
  var stories = data.map(one => {
    one.by = one.by.id
    return one
  })
  Stories.insertOne(stories , (err , created)=>{
              if (err) throw err
              else console.log("cool")
            })

        
  // your code here!
  console.log(authors)
  Author.create(authors, (err , created) => {
    console.log(created)
  })
};

seedDb(data);
