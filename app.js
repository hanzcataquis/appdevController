const bodyParser = require('body-parser');
const routes = require('./routes/router');
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes);
app.use(express.static('public'));


app.listen(8080, () =>{
    console.log('server running...')
});
