var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'JAM'});
});

/* Ajax GET. /example */
router.get('/example', function (req, res) {
    var params = req.query;
    if (params.key === "value") {
        res.send({title: 'get ajax data success!'});
    } else {
        res.send({title: 'get ajax data fail!'});
    }
});

/* Ajax POST. /example */
router.post('/example', function (req, res) {
    var params = req.body;
    if (params.key === "value") {
        res.send({title: 'post ajax data success!'});
    } else {
        res.send({title: 'post ajax data fail!'});
    }
});

function mock_data(id) {
    id = (typeof id === "string")? JSON.parse(id) : id;
    id = id * 10;
    var result = [];
    for (var i = 0; i < 10; i++) {
        id += 1;
        result.push({id: id, name: "项目" + id, price: "￥" + id})
    }
    return {data: result}
}

router.get('/list1', function (req, res) {
    var params = req.query;
    res.send(mock_data(params.id));
});

router.get('/list2', function (req, res) {
    var params = req.query;
    res.send(mock_data(params.id));
});

router.get('/list3', function (req, res) {
    var params = req.query;
    res.send(mock_data(params.id));
});

module.exports = router;
