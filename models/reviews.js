const mongoose = require('mongoose');



// create a review model
module.exports = mongoose.model('Review',{
    title: String,
    description: String,
    movieTitle:String
});