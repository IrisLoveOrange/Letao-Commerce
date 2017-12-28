

$(function() { 
    mui('.mui-slider').slider({
        interval: 1000
    });

    mui('.mui-scroll-wrapper').scroll ({
        scrollY: true,
        scrollX: false,
        startX: 0,
        startY: 0,
        indicators: false,
        deceleration: 0.001,
        bounce: true
    });
 })