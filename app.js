const express = require('express');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// connect mongoose db
mongoose.connect('mongodb://localhost/rotten-potatoes',{
   useNewUrlParser: true
});

// ROUTER
const review = require('./controllers/reviews');

 //ROUTES MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use('/',review);


// SERVER
app.listen(3000, () =>{
    console.log('App listening on port 3000!');
}); 



