$(function () {
    $(".get-header").load("header.html");
    $(".get-footer").load("footer.html");
});

$(window).on("hashchange", loadPage);

function loadPage() {
    const page = window.location.hash
        ? window.location.hash.substring(1)
        : "home";

    switch (page) {
        case 'cars':
            initCars();;
            $('#container').load('cars.html');
            break;
        case '':
            initCars();;
            $('#home').load('home.html');
            break;
        case 'manufacturers':
            initManufactures();
            $('#container').load('manufacturers.html');
            break;
        default:
            $('#container').load('home.html');
            break;
    }

}

// Navbar scroll
var num = 0; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

var num = 100; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.edit-form-manufacturers').addClass('fixed');
    } else {
        $('.edit-form-manufacturers').removeClass('fixed');
    }
});