var express = require('express');
var mustacheExpress = require('mustache-express');


var app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/', function(req, res) {
    
    // res.send('Hey there');
    res.render('index');
});

app.listen(3001);