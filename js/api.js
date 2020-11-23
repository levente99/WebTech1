// Send edited or new car
function sendPostCar(id) {
    console.log(id)

    $.post({
        url: `https://webtechcars.herokuapp.com/api/cars/`,
        data: JSON.stringify({
            "name": $("#edit-car-name").val(),
            "consumption": $("#edit-car-consumption").val(),
            "color": $("#edit-car-color").val(),
            "manufacturer": $("#edit-car-manufacturer").val(),
            "avaiable": $("#edit-car-available").val(),
            "year": $("#edit-car-year").val(),
            "horsepower": $("#edit-car-horsepower").val()
        }),
        dataType: "json",
        contentType: "application/json",
        success: function (textStatus, status) {
            console.log(textStatus);
            console.log(status);
        },
        error: function (xhr, textStatus, error) {
            console.log(xhr.responseText);
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
        }
    });

    if ($(".post-cars-edit").val() == 'Módosítás!') {
        deleteCar(id);
    }

    window.location.hash = "";
    window.location.hash = "#cars";
}

// Delete car
function deleteCar(id) {
    $.ajax({
        url: `https://webtechcars.herokuapp.com/api/cars/${id}`,
        type: 'DELETE',
        dataType: "json",
        contentType: "application/json"
    });
    window.location.hash = "";
    window.location.hash = "#cars";
}

function sendPostManufacturers(id) {
    $.post({
        url: `https://webtechcars.herokuapp.com/api/manufacturers/`,
        data: JSON.stringify({
            name: $("#edit-manufacturers-name").val(),
            country: $("#edit-manufacturers-country").val(),
            founded: $("#edit-manufacturers-founded").val()
        }),
        dataType: "json",
        contentType: "application/json",
        success: function (textStatus, status) {
            console.log(textStatus);
            console.log(status);
        },
        error: function (xhr, textStatus, error) {
            console.log(xhr.responseText);
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
        }
    });
    if ($(".post-manufacturers-edit").val() == 'Módosítás!') {
        deleteManufacturers(id);
    }
    window.location.hash = "";
    window.location.hash = "#manufacturers";
}

function deleteManufacturers(id) {
    $.ajax({
        url: `https://webtechcars.herokuapp.com/api/manufacturers/${id}`,
        type: 'DELETE',
        dataType: "json",
        contentType: "application/json"
    });
    window.location.hash = "";
    window.location.hash = "#manufacturers";
}