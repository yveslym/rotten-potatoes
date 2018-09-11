var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Comment',{
    content: String,
    userId: String,
    reviewId: {type: Schema.Types.ObjectId, ref: 'Review'},
    title: String
});
