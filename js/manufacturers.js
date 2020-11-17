let manufactures = [];

// List manufactures
$(".contentbox").empty();

$.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
    manufactures = data;

    var table = $("<table></table>");
    table.append("<th>Name</th><th>Country</th><th>Founded</th><th>Edit</th><th>Delete</th>");

    $.each(data, function (key, value) {
        var row = $("<tr></tr>");
        var currentName = $("<td>" + value.name + "</td>");
        var currentCountry = $("<td>" + value.country + "</td>");
        var currentFounded = $("<td>" + value.founded + "</td>");
        var currentEdit = $("<td>Edit</td>").attr("id", `${value._id}`).attr("class", "edit");
        var currentDelete = $("<td>Delete</td>").attr("id", `${value._id}`).attr("class", "delete");

        row.append(currentName);
        row.append(currentCountry);
        row.append(currentFounded);
        row.append(currentEdit);
        row.append(currentDelete);
        table.append(row);
    });
    $(".contentbox").html(table);
});

// Fill forms input field
$(document).ready(function () {
    $("body").on("click", "td", function (event) {
        console.log(event.target.innerText)
        if (event.target.innerText === 'Edit') {
            $("#edit-form").css("display", "flex");

            var result = manufactures.filter(function (v) {
                return v._id === event.target.id; // Filter out the appropriate one
            })[0];

            $('#edit-name').val(result.name);
            $('#edit-country').val(result.country);
            $('#edit-founded').val(result.founded);
        }
    });

    // Adding new manufacture
    $("#add-manufacturer").click(function () {
        $('#edit-name').val('');
        $('#edit-country').val('');
        $('#edit-founded').val('');
        $("#edit-form").css("display", "flex");
    });
});



window.onload = function () {
    $("#cancel-edit").click(function () {
        $("#edit-form").css("display", "none");
    });
}