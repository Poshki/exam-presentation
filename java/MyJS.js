$(document).ready(function () {
    $('#burger').click(function () {
        $('.dropdown').toggleClass('clicked');
        $('.body').fadeToggle(500);
        $('.header').fadeToggle(500);
        $('.burger-box').toggleClass('clicked');
    });

});
