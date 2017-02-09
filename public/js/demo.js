/**
 * Created by Ching on 08/02/2017.
 */

// 各列表 数据查询id
var id_1, id_2, id_3;

// 各列表 请求参数
function queryParams_1() {
    return {id: id_1}
}
function queryParams_2() {
    return {id: id_2}
}
function queryParams_3() {
    return {id: id_3}
}

// 刷新列表 根据列表标签id 是否分页
function refresh_table_by_id(id, paged) {
    paged ? $('#' + id).bootstrapTable('selectPage', 1) : $('#' + id).bootstrapTable('refresh');
}

// 一级列表 初始化
function show_table_1(paged) {
    $('#table1').bootstrapTable({
        url: '/list1',
        columns: [{
            field: 'name',
            title: '一级列表'
        }],
        queryParams: queryParams_1,
        onClickRow: function (row) {
            // 根据该行数据中的 二级列表id 更新二级列表
            id_2 = row.table_2_id;
            refresh_table_by_id("table2", paged);
            // 根据该行数据中的 三级列表id 更新三级列表
            id_3 = row.table_3_id;
            refresh_table_by_id("table3", paged);
        }
    });
}

// 二级列表 初始化
function show_table_2(paged) {
    $('#table2').bootstrapTable({
        url: '/list2',
        columns: [{
            field: 'name',
            title: '二级列表'
        }],
        queryParams: queryParams_2,
        onClickRow: function (row) {
            // 根据该行数据中的 三级列表id 更新三级列表
            id_3 = row.table_3_id;
            refresh_table_by_id("table3", paged);
        }
    });
}

// 三级列表 初始化
function show_table_3(paged) {
    $('#table3').bootstrapTable({
        url: '/list3',
        columns: [{
            field: 'name',
            title: '三级列表'
        }, {
            field: 'price',
            title: '价格'
        }, {
            field: 'detail',
            title: '简介'
        }, {
            field: 'method',
            title: '操作项'
        }],
        queryParams: queryParams_3,
        onClickRow: function (row) {
            // 暂无操作
        }
    });
}

// 初始化
show_table_1(false);
show_table_2(false);
show_table_3(false);