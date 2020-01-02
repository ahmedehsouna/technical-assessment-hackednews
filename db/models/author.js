var mongoose = require("mongoose")

module.exports = mongoose.model("author" , mongoose.Schema({
    
        about: String,
        created: Number,
        name: String,
        karma: Number,
        submitted: [Number]
      
}))