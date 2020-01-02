var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) { 
  Stories.insertOne(data , (err , created)=>{
              if (err) throw err
              else console.log("cool")
            })

        
  // your code here!
};

seedDb(data);
