$(document).ready(function () {
    $('#burger').click(function () {
        $('.dropdown').toggleClass('clicked');
        $('.body').fadeToggle(500);
        $('.header').fadeToggle(500);
        $('.burger-box').toggleClass('clicked');
    });

    $('.add-to-cart').click(function () {
        $('.pop-up').toggleClass('active');
        $('.pop-up-text').toggleClass('active');
    });

    $('#popper').click(function () {
        $('#popper').toggleClass('active');
        $('#pop-up').toggleClass('active');
    });

    $('.close').click(function () {
        $('#popper').toggleClass('active');
        $('#pop-up').toggleClass('active');
    });




    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    }
  ]
    });
});



function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}
