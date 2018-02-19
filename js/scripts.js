
$(function(){
    Revealator.effects_padding = '-200';

    $(".top_slider").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,

    });
    $(".slider_mid").slick({
        dots: true,
        vertical: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $.ionTabs("#tabs_1");
    
    $(".toggle-icon").click(function() {
      $('#nav-container').toggleClass("pushed");
    });
    
    $('.hamburger').click(function(){
       $(this).toggleClass('is-active');
       $('.top_head').toggleClass('iactive');
    });
});