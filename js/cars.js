let cars = [];

function initCars() {
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
            var currentEdit = $("<td>Módosítás</td>").attr("id", `${value._id}`).attr("class", "edit");
            var currentDelete = $("<td>Törlés</td>").attr("id", `${value._id}`).attr("class", "delete").attr("onclick", "deleteCar(this.id)");
            $('.post-cars-edit').attr('onclick', "sendPostCar(this.id)");

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
    $("body").on("click", "td", function (event) {
        let pageCar = window.location.hash.substring(1);

        if (event.target.innerText === 'Módosítás' && pageCar == 'cars') {
            console.log(event.target.id)
            console.log(pageCar)
            $("#car-edit-form").css("display", "flex");

            var result = cars.filter(function (v) {
                return v._id === event.target.id; // Filter out the appropriate one
            })[0];
            $('#edit-car-name').val(result.name);
            $('#edit-car-consumption').val(result.consumption);
            $('#edit-car-color').val(result.color);
            $('#edit-car-manufacturer').val(result.manufacturer);
            $('#edit-car-available').val(result.available);
            $('#edit-car-year').val(result.year);
            $('#edit-car-horsepower').val(result.horsepower);
            $('.post-cars-edit').attr("id", `${event.target.id}`)
            $('.post-cars-edit').val('Módosítás!')
        }
    });
}