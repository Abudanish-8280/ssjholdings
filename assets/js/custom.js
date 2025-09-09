$(document).ready(function () {
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
        $('.team-slider').slick('setPosition');
      })

      
      $('.accordion-button').on('click', function(e) {
        $('.accordion-collapse').resize();
        $(".slick-slider").slick("refresh");
      });
});



$(document).ready(function () {
    $('.services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        rows: 3,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.homereviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.presscoverage-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 569,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


$(document).ready(function () {
    $('.partners-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        rows: 2,
        arrows: false,
        dots: true,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                rows: 1,
                slidesToShow: 1,
                
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
        $('.partners-slider').slick('setPosition');
      })

      
      $('.accordion-button').on('click', function(e) {
        $('.accordion-collapse').resize();
        $(".slick-slider").slick("refresh");
      });
});


$(document).ready(function () {
    $('.history-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        rows: 1,
        arrows: false,
        dots: true,
        nav: false,
        pauseOnHover: false,

    });
});

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
        once: true,
    });
});