// Loads header and footer
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

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