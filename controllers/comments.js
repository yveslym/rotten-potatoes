var express  = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// CREATE
router.post('/reviews/comments', (req,res) => {
    Comment.create(req.body)
    .then(commnet => {
        res.redirect(`/reviews/${comment.reviewId}`);
    })
    .catch(err => {
       console.log(err.message);
    });
});



module.exports = router;