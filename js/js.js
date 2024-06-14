


    $('.sliding-courses').slick({
      
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplayDelay: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });



    $('.sliding-experts').slick({
      
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplayDelay: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });





$(document).ready(function() {

// .scroll() creates an event when the user scrolls
$(window).scroll(function() {

// .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
var scroll = $(window).scrollTop();

var objectSelect = $('#section2');

// .offset() retrieves current position of element relative to document
var objectPosition = objectSelect.offset().top;

if (scroll > objectPosition) {
$('nav').addClass('displayNav');
} else {
$('nav').removeClass('displayNav');
}
});
});





