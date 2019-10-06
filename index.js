var express = require('express');
var fetch = require('node-fetch');
var path = require('path');
var app = express();
var hbs = require('express-handlebars');
global.jQuery = require('jquery');

var homeRouter = require('./routes/home');
var airRouter = require('./routes/air');
var cropRouter = require('./routes/crop');
var weatherRouter = require('./routes/weather');
var aboutRouter = require('./routes/about');

app.engine('hbs', hbs({extname: 'hbs', defualtLayout : 'default' , layoutDir: __dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

//home route
app.use('/', homeRouter);

//air route
app.use('/air', airRouter);

//crop route
app.use('/crop', cropRouter);

//weather route
app.use('/weather', weatherRouter);

//about route
app.use('/about', aboutRouter);

//fetch air data 
app.get('/air_data',async (request,response)=>{
    const url = 'https://indianfarmerportal.tech/node';
    const re = await fetch(url);
    const json = await re.json();
    response.json(json);
});

app.listen(8080);
module.exports = app;