$(document).ready(function () {
    $('#burger').click(function () {
        $('.dropdown').toggleClass('clicked');
        $('.body').fadeToggle(500);
        $('.header').fadeToggle(500);
        $('.burger-box').toggleClass('clicked');
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
