/**
 * Created by Ching on 08/02/2017.
 */

var id_1 = 1100;
var id_2 = 1110;
var id_3 = 1111;

function queryParams_1() {
    return {id: id_1}
}
function queryParams_2() {
    return {id: id_2}
}
function queryParams_3() {
    return {id: id_3}
}

function show_table_1() {
    $('#table1').bootstrapTable({
        url: '/data/data1.json',
        columns: [{
            field: 'id',
            title: '一级列表'
        }],
        queryParams: queryParams_1,
        onClickRow: function (row) {
            id_2 = row.id;
            alert(id_2);
            show_table_2();
        }
    });
}

function show_table_2() {
    $('#table2').bootstrapTable({
        url: '/data/data2.json',
        columns: [{
            field: 'id',
            title: '二级列表'
        }],
        queryParams: queryParams_2,
        onClickRow: function (row) {
            id_3 = row.id;
            alert(id_3);
            show_table_3();
        }
    });
}

function show_table_3() {
    $('#table3').bootstrapTable({
        url: '/data/data3.json',
        columns: [{
            field: 'id',
            title: '三级列表'
        }, {
            field: 'name',
            title: '项目名称'
        }, {
            field: 'price',
            title: '所耗资金'
        }],
        queryParams: queryParams_3
    });
}

alert(id_1);
show_table_1();
show_table_2();
show_table_3();