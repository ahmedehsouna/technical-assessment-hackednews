var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  id: Number,
  by: String,
  title: String,
  score: Number
});

var StoryModel = mongoose.model('Story', storySchema);

// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}).limit(10).sort({_id : 1}).exec(callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({id: id}, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.StoryModel = StoryModel

