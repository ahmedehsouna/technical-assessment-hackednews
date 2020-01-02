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
          
         res.json(stories)
      } 
    })

  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

module.exports = router;
