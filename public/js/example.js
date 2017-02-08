// example
function get_data() {
    $.ajax({
        method: "GET",
        url: "/example",
        dataType: "json"
    })
        .done(function (response) {
            alert(JSON.stringify(response));
        });
}

function post_data() {
    $.ajax({
        method: "POST",
        url: "/example",
        dataType: "json",
        data: {key: "value"}
    })
        .done(function (response) {
            alert(JSON.stringify(response));
        });
}