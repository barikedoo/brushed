$(document).ready(function () {

  // SLIDER
  $('.slider').slick({
    dots: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span class="chevron left"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span class="chevron right"></span></button>',
    customPaging: function (slider, i) {
      return $('<button type="button" data-role="none" role="button" tabindex="0" />');
    },
    appendArrows: $('.slider__nav'),
    appendDots: $('.slider__nav'),
  });


  // Give slider arrows .slider-button class
  $('.slick-arrow').addClass('slider-button');

  // Form validation
  $("#commentForm").validate({
    errorPlacement: function(error, element) {
    }
  });

  // Main content slideToggle
  $('#js__contentShow').on('click', function () {

    $(this).find('span').toggleClass('bottom top');

    $('.main-content').slideToggle( 'slow' );

    if ($('.chevron').hasClass('top')) {
      $('html, body').animate({
        scrollTop: $("#our_works").offset().top
      }, 1000);
      console.log('2');
    }



  });

});

