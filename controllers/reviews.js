const express = require('express');
const router = express.Router();

const Review = require('../models/review');


// ROOT
router.get('/', (req,res) => {
    Review.find()
    .then(reviews => {
        res.render('reviews-index',{reviews:reviews});
    })
    .catch(err =>{
        console.log(err);
    });
});

// CREATE
router.post('/reviews',(req,res)=>{
   Review.create(req.body)
   .then((review) => {
    console.log(review);
    res.redirect(`/reviews/${review._id}`);
   })
   .catch((err) =>{
    console.log(err.message);
   });
});
// INDEX 
router.get('/reviews',(req,res)=>{
    res.render('reviews-index',{reviews:reviews});
});

// NEW 
router.get('/reviews/new',(req,res)=>{
    res.render('reviews-new',{});
});

// SHOW 
router.get('/reviews/:id',(req,res) =>{
    Review.findById(req.params.id)
    .then((review)=>{
        res.render('reviews-show',{review:review})
    })
    .catch((err)=>{
        console.log(err.message);
    });
});

// EDIT
router.get('/reviews/:id/edit', (req,res) => {
Review.findById(req.params.id, (err,review)=>{
    console.log(review);
    res.render('/review-edit', {review:review});
    });
});
//UPDATE
router.put('/reviews/:id',(req,res)=>{
Review.findByIdAndUpdate(req.params.id,req.body, (review)=>{
    res.redirect(`/reviews/${review._id}`);
    });
});

// DELETE
router.delete('/reviews/:id', function(req,res){
console.log("delete review");
Review.findOneAndRemove(req.params.id)
.then((review) =>{
    res.redirect('/');
})
.catch((err)=>{
    console.log(err.message);
        });
    });


    module.exports = router;



    