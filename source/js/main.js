$(document).ready(function(){
    console.log('s');

    // SLIDER
    $('.slider').slick({
    dots:true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">></button>',
    customPaging: function(slider, i) {
    return $('<button type="button" data-role="none" role="button" tabindex="0" />');
    },
    appendArrows: $('.slider__nav'),
    appendDots: $('.slider__nav')
  });


    // Give slider arrows .slider-button class
    $('.slick-arrow').addClass('slider-button');
    
});

