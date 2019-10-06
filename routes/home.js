var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', {title : 'home',script:'./js/home_in.js',css:'./css/style_home.css'});
});

module.exports = router;