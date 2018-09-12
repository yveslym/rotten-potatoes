var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// connect mongoose db
// mongoose.connect('mongodb://localhost/rotten-potatoes',{
//    useNewUrlParser: true
// });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');


// ROUTER
var review = require('./controllers/reviews');
var comment = require('./controllers/comments');

 //ROUTES MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

// ROUTERS
app.use('/',review);
app.use('/reviews/comments',comment);


// SERVER
app.listen(process.env.PORT || 3000, () =>{
    console.log('App listening on port 3000!');
}); 



