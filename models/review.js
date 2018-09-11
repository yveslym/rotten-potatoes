var mongoose = require('mongoose');
var Comment = require ('../models/comment');
// create a review model
module.exports = mongoose.model('Review',{
    title: String,
    description: String,
    movieTitle:String
});