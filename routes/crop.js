var express = require('express');
var router = express.Router();

//base route
router.get('/', function(req, res, next) {
    res.render('crop',{title:'Crop',script:'/js/crop_in.js'})
});

module.exports = router;