const express = require('express');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');


// connect mongoose db
mongoose.connect('mongodb://localhost/rotten-potatoes',{
   // useMongoClient: true
   useNewUrlParser: true
});

// create a review model
const Review = mongoose.model('Review',{
    title: String,
    description: String,
    movieTitle:String
});


// ROOT
app.get('/', (req,res) => {
    Review.find()
    .then(reviews => {
        res.render('reviews-index',{reviews:reviews});
    })
    .catch(err =>{
        console.log(err);
    })
})

// CREATE
app.post('/reviews',(req,res)=>{
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
app.get('/reviews',(req,res)=>{
    res.render('reviews-index',{reviews:reviews});
});

// NEW 
app.get('/reviews/new',(req,res)=>{
    res.render('reviews-new',{});
});

// SHOW 
app.get('/reviews/:id',(req,res) =>{
    Review.findById(req.params.id)
    .then((review)=>{
        res.render('reviews-show',{review:review})
    })
    .catch((err)=>{
        console.log(err.message);
    });
});

// EDIT
app.get('/reviews/:id/edit', (req,res) => {
Review.findById(req.params.id, (err,review)=>{
    console.log(review);
    res.render('/review-edit', {review:review});
    });
});
//UPDATE
app.put('/reviews/:id',(req,res)=>{
Review.findByIdAndUpdate(req.params.id,req.body, (review)=>{
    res.redirect(`/reviews/${review._id}`);
    });
});

// DELETE
app.delete('/reviews/:id', function(req,res){
console.log("delete review");
Review.findOneAndRemove(req.params.id)
.then((review) =>{
    res.redirect('/');
})
.catch((err)=>{
    console.log(err.message);
});
});

// SERVER
app.listen(3000, () =>{
    console.log('App listening on port 3000!')
});



