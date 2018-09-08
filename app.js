const express = require('express');
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');


// connect mongoose db
mongoose.connect('mongodb://localhost/rotten-potatoes',{
   // useMongoClient: true
   useNewUrlParser: true
});

// create a review model
const Review = mongoose.model('Review',{
    title: String
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
    res.redirect('/');
   })
   .catch((err) =>{
    console.log(err.message);
   })
})
// index reviews
app.get('/reviews',(req,res)=>{
    res.render('reviews-index',{reviews:reviews});
})

// new review
app.get('/reviews/new',(req,res)=>{
    res.render('reviews-new',{});
})

app.listen(3000, () =>{
    console.log('App listening on port 3000!')
});



