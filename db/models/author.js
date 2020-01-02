var mongoose = require("mongoose")

module.exports = mongoose.model("author" , mongoose.Schema({
    
        about: String,
        created: Number,
        id: String,
        karma: Number,
        submitted: [Number]
      
}))