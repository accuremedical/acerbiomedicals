(function ($) {
  
    "use strict";
  
      $('.slick-slideshow').slick({
        autoplay: true,
        infinite: true,
        arrows: true,
        fade: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  
      $('.slick-testimonial').slick({
        arrows: true,
        dots: false,
      });
      
    })
    
    (window.jQuery);

    // brand-slider-start
    jQuery(document).ready(function($) {
      $('.testimonial').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 500,
           settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '50px'
           }
        }]
    });
});
    // brand-slider-end

    // certify-slider-start
    jQuery(document).ready(function($) {
      $('.testimonial2').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 500,
           settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '20px'
           }
        }]
    });
});
    
    // certify-slider-end

    // exhibition-slider-start
    jQuery(document).ready(function($) {
      $('.testimonial3').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 500,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '20px'
           }
        }]
    });
});
    
    // exhibition-slider-end