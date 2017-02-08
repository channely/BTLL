var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JAM' });
});

/* Ajax GET. /example */
router.get('/example', function(req, res) {
  res.send({ title: 'get ajax data success!' });
});

/* Ajax POST. /example */
router.post('/example', function(req, res) {
  var params = req.body;
  if(params.key === "value"){
    res.send({ title: 'post ajax data success!' });
  }else {
    res.send({ title: 'post ajax data fail!' });
  }
});

module.exports = router;
