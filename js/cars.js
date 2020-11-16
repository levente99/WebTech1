// List cars
$(".contentbox").empty();

$.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {
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