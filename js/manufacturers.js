// Get all manufactures
// $.get("https://webtechcars.herokuapp.com/api/manufacturers", function (manufacturers) {
//     for (var i = 0; i < manufacturers.length; i++) {
//         $(".contentbox").append('<div class="manufacturer-list" manufacturer-data="' +
//             manufacturers[i].name + '">' + "<strong>" + manufacturers[i].name + "</strong><div>" +
//             "<small>Country: " + manufacturers[i].country + "<br> Founded on: " +
//             manufacturers[i].founded + "</small></div><br\></div>");
//     }
// }
// );

// List manufactures
$(".contentbox").empty();

$.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
    var table = $("<table></table>");
    table.append("<th>Name</th><th>Country</th><th>Founded</th><th>Edit</th><th>Delete</th>");
    // table.append("<th>Edit</th>").find('th').addClass('edit');
    // table.append("<th>Delete</th>").find('th').addClass('delete');

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