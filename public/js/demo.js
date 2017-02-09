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
        height: 413,
        columns: [{
            field: 'name',
            title: '控制层面'
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
        height: 413,
        columns: [{
            field: 'name',
            title: '控制层面'
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
        height: 413,
        columns: [{
            field: 'goal',
            title: '目标',
            width: "10%"
        }, {
            field: 'require',
            title: '要求',
            width: "10%"
        }, {
            field: 'control_point',
            title: '控制点',
            width: "10%"
        }, {
            field: 'control_method',
            title: '控制措施',
            width: "17%"
        }, {
            field: 'before_result',
            title: '预期结果',
            width: "20%"
        }, {
            field: 'after_result',
            title: '检查结果',
            width: "13%"
        }],
        queryParams: queryParams_3,
        onClickRow: function (row) {
            // 暂无操作
        },
        onLoadSuccess: function (response) {
            var data_length = response.data.length;
            $("#table3").bootstrapTable("mergeCells",{field:"goal", index:0, rowspan:data_length})
            $("#table3").bootstrapTable("mergeCells",{field:"require", index:0, rowspan:data_length})
        }
    });
}

// 初始化
show_table_1(false);
show_table_2(false);
show_table_3(false);