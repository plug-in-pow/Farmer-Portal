var express = require('express');
var router = express.Router();

//base route
router.get('/', function(req, res, next) {
    res.render('air',{title:'Air-Quality',script:'./js/air_in.js',css:'./css/style_air.css'});
});

module.exports = router;