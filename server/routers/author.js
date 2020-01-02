var Router = module.exports = require('express').Router();
var Author = require('../../db/models/author.js');
var Stories = require('../../db/models/story.js');


// var storyController = require('../../db/controllers/story.js');


Router.get('/', (req, res) => {
     // TODO: Replace this with stories you've retrieved from the database

     Stories.findAll((err,stories)=>{
        if (err) res.json({success:false, err})
        else{
           stories = stories.map(one => {
             return { id : one.by}
            })
        //    console.log(stories)
           Author.find( {$or : stories}).sort({karma : 1}).exec((err,authors)=>{
             if (err) res.json({success:false, err})
             else{
                res.json(authors)
             } 
           })
        } 
      })
})

Router.get('/:id/stories', (req, res) => {
    // TODO: Replace this with stories you've retrieved from the database

    Stories.StoryModel.find({by : req.params.id},(err,stories)=>{
       if (err) res.json({success:false, err})
       else res.json(stories)
      
     })
})