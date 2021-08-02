var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'contactme' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
module.exports = router;
