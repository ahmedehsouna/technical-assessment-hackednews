var Stories = require('./db/models/story.js');
var Author = require('./db/models/author.js');
var mongoose = require('mongoose');
var request = require('request');
var all =  []
var users = []

mongoose.connect('mongodb://localhost/hackednews');
// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API


// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

var isJSONResponse = function(headers) {
  return headers['content-type'].includes('json');
};

var getJSONFromHackerNews = function (url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};

getJSONFromHackerNews(topStoriesURL, function(err, data) {
  console.log(err, 'err, expect to be null');
  console.log(data, 'data, expect to be ids for top 500 stories');
  data.forEach(one => {

    // fetch().then(res =>{
    //   res.json().then(data => console.log(data))
    // })

    request.get(`https://hacker-news.firebaseio.com/v0/item/${one}.json`, function(err, response, body) {
      var data = null;
      if (err) {
        callback(err, null);
      } else if (!isJSONResponse(response.headers)) {
        callback(new Error('Response did not contain JSON data.'), null);
      } else {
        data = JSON.parse(body);
        all.push(data)
        if(all.length == 500){
            Stories.insertOne(all, (err , added) => {
              Stories.StoryModel.find({}, (err , s)=>{
                var store = {}
                s.forEach(one => store[one.by] = true)
                console.log(s)
                console.log(Object.keys(store))
                Object.keys(store).forEach(name => {
                  
                    request.get(`https://hacker-news.firebaseio.com/v0/user/${name}.json`, function(err, response, body) {
                      var data = null;
                      if (err) {
                        callback(err, null);
                      } else if (!isJSONResponse(response.headers)) {
                        console.log(new Error('Response did not contain JSON data.'), null);
                      } else {
                        data = JSON.parse(body);
                        users.push(data)
                        if(users.length == Object.keys(store).length){
                          Author.create(users , (err,done)=>{
                            console.log("done")
                           mongoose.disconnect();
                          })
                        }
                        
                      }
                    });
                
                  
                })
              })              
            })
            
        }
        // callback(null, data);
      }
    });

  })
  // setTimeout(()=>console.log(all), 3000)
});
