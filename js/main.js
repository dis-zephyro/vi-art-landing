// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//  Галерея работ

$(document).ready(function(){

    $("#work-1 .work__slider").owlCarousel({
        loop:true,
        margin: 40,
        nav:true,
        dots: true,
        items: 2
    });

    $("#work-2 .work__slider").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: true,
        items: 3
    });

    $("#work-3 .work__slider").owlCarousel({
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

$(".btn-order").fancybox({
    "padding" : 0
});
