let manufactures = [];

function initManufactures() {

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
            var currentEdit = $("<td>Módosítás</td>").attr("id", `${value._id}`).attr("class", "edit");
            var currentDelete = $("<td>Törlés</td>").attr("id", `${value._id}`).attr("class", "delete").attr("onclick", "deleteManufacturers(this.id)");
            $('.post-manufacturers-edit').attr('onclick', "sendPostManufacturers(this.id)");

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
            let pageManufacturers = window.location.hash.substring(1);

            if (event.target.innerText === 'Módosítás' && pageManufacturers == 'manufacturers') {
                console.log(event.target.innerText)
                console.log(pageManufacturers)
                $("#edit-form").css("display", "flex");

                var result = manufactures.filter(function (v) {
                    return v._id === event.target.id; // Filter out the appropriate one
                })[0];

                $('#edit-manufacturers-name').val(result.name);
                $('#edit-manufacturers-country').val(result.country);
                $('#edit-manufacturers-founded').val(result.founded);
                $('.post-manufacturers-edit').attr("id", `${event.target.id}`)
                $('.post-manufacturers-edit').val('Módosítás!')
            }
        });
    })

}