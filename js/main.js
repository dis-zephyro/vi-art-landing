//  Галерея работ

$(document).ready(function(){

    $(".work__slider_01").owlCarousel({
        loop:true,
        margin: 40,
        nav:true,
        dots: true,
        items: 2
    });

    $(".work__slider_02").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: true,
        items: 3
    });

    $(".work__slider_03").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: true,
        items: 3
    });
});


$('.work').tabs();


// Модальное окно

$(".popup").fancybox({
    "padding" : 15
});
