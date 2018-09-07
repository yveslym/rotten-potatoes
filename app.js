const express = require('express');
const exphbs = require('express-handlebars')
const app = express()
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');




// ROOT

app.get('/', (req,res) => {
    res.render('home', {msg:'we are live...'})
});
// index reviews
app.get('/reviews',(req,res)=>{
    res.render('reviews-index',{reviews:reviews});
})


app.listen(3000, () =>{
    console.log('App listening on port 3000!')
});

// mock array
let reviews = [
    {title: 'Great Review'},
    {title: 'Next Review'}
]