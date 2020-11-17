let cars = [];

// List cars
$(".contentbox").empty();

$.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {
    cars = data;

    var table = $("<table></table>");
    table.append("<tr><th>Manufacturer</th><th>Name</th><th>Consumption</th>" +
        "<th>Color</th><th>Year</th><th>Available</th><th>Horsepower</th><th>Edit</th><th>Delete</th></tr>");

    $.each(data, function (key, value) {
        var row = $("<tr></tr>");
        var manufacturerObj = $("<td>" + value.manufacturer + "</td>");
        var nameObj = $("<td>" + value.name + "</td>");
        var consumptionObj = $("<td>" + value.consumption + "</td>");
        var colorObj = $("<td>" + value.color + "</td>");
        var yearObj = $("<td>" + value.year + "</td>");
        var availableObj = $("<td>" + value.available + "</td>");
        var horsepowerObj = $("<td>" + value.horsepower + "</td>");
        var currentEdit = $("<td>Edit</td>").attr("id", `${value._id}`).attr("class", "edit");
        var currentDelete = $("<td>Delete</td>").attr("id", `${value._id}`).attr("class", "delete");

        row.append(manufacturerObj);
        row.append(nameObj);
        row.append(consumptionObj);
        row.append(colorObj);
        row.append(yearObj);
        row.append(availableObj);
        row.append(horsepowerObj);
        row.append(currentEdit);
        row.append(currentDelete);
        table.append(row);
    });

    $(".contentbox").html(table);
});

// Fill forms input field
$(document).ready(function () {
    $("body").on("click", "td", function (event) {
        if (event.target.innerText === 'Edit') {
            $("#edit-form").css("display", "flex");

            var result = cars.filter(function (v) {
                return v._id === event.target.id; // Filter out the appropriate one
            })[0];

            $('#edit-name').val(result.name);
            $('#edit-consumption').val(result.consumption);
            $('#edit-color').val(result.color);
            $('#edit-manufacturer').val(result.manufacturer);
            $('#edit-available').val(result.available);
            $('#edit-year').val(result.year);
            $('#edit-horsepower').val(result.horsepower);
        }
    });

    // Adding new car
    $("#add-car").click(function () {
        $('#edit-name').val('');
        $('#edit-consumption').val('');
        $('#edit-color').val('');
        $('#edit-manufacturer').val('');
        $('#edit-available').val('');
        $('#edit-year').val('');
        $('#edit-horsepower').val('');
        $("#edit-form").css("display", "flex");
    });
});



window.onload = function () {
    $("#cancel-edit").click(function () {
        $("#edit-form").css("display", "none");
    });
}

