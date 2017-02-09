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

function get_id(id) {
    id = id ? id : 1;
    id = (typeof id == "string") ? JSON.parse(id) : id;
    id = id * 10;
    return id
}

router.get('/list1', function (req, res) {
    var params = req.query;
    var id = get_id(params.id);
    var result = [];
    for (var i = 0; i < 15; i++) {
        id += 1;
        result.push({name: "项目" + id, table_2_id: id * 10, table_3_id: id * 100})
    }
    result = {data: result};
    res.send(result);
});

router.get('/list2', function (req, res) {
    var params = req.query;
    var id = get_id(params.id);
    var result = [];
    for (var i = 0; i < 15; i++) {
        id += 1;
        result.push({name: "项目" + id, table_3_id: id * 10})
    }
    result = {data: result};
    res.send(result);
});

router.get('/list3', function (req, res) {
    var params = req.query;
    var id = get_id(params.id);
    var result = [];

    for (var i = 0; i < 15; i++) {
        id += 1;
        result.push({
            control_point: "控制点" + id,
            control_method: "控制措施" + id,
            before_result: "预期结果" + id,
            after_result: "检查结果" + id
        });
    }
    result[0].goal = "目标目标目标目标目标目标，目标目标目标目标目标目标，目标目标目标目标目标目标，目标目标目标目标目标目标，目标目标目标目标目标目标";
    result[0].require = "要求要求要求要求要求要求，要求要求要求要求要求要求，要求要求要求要求要求要求，要求要求要求要求要求要求，要求要求要求要求要求要求";
    result = {data: result};
    res.send(result);
});

module.exports = router;
