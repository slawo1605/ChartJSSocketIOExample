var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2.html', { title: 'Express' });
});

/* GET another page. */
router.get('/second', function(req, res, next) {
  res.render('index3.html', { title: 'Expressik' });
});

/* GET another page. */
router.get('/third', function(req, res, next) {
  res.render('index4.html', { title: 'Expressik' });
});

module.exports = router;
