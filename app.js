const express = require('express');
const exphbs = require('express-handlebars')
const app = express()
app.engine('hbs',exphbs({defaultLayout:'main'}));
app.set('view engine','hbs');





app.get('/', (req,res) => {
    res.send("we are live")
});
app.listen(3000, () =>{
    console.log('App listening on port 3000!')
});

