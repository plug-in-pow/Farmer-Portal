var express = require('express');
var router = express.Router();

//base route
router.get('/', function(req, res, next) {
    res.render('weather',{title:'weather',script:'/js/weather_in.js'})
});

module.exports = router;