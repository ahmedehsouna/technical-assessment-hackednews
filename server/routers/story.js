var express = require('express');
var Stories = require('../../db/models/story.js');

// var storyController = require('../../db/controllers/story.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
    Stories.findAll((err,stories)=>{
      if (err) res.json({success:false, err})
      else{
        // because Im not using the model directly and I have to use ur functions dunno why
        // I have to filter by maself cuz I cant use limit here :\
        var top = []
        for (let i = 0; i < 10; i++) {
          top.push(stories[i])
          
        }   
         res.json(top)
      } 
    })
    //  res.json([
    //    {
    //      author: 'ocdtrekkie',
    //      title: 'Switch – New Video Game System [video]',
    //      score: 536
    //    },
    //    {
    //      author: 'mhb',
    //      title: 'Video Games Are Changing the Way Soccer Is Played',
    //      score: 100
    //    }
    //  ]);
  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

module.exports = router;
