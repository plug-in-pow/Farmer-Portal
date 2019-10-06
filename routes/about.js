var express = require('express');
var router = express.Router();

//base route
router.get('/', function(req, res, next) {
    res.render('about',{title:'About',script:'/js/about.js'})
});

module.exports = router;