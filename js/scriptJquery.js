$(window).on('load', function () {
    

    var $slickElement = $('.slideshow');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var totalSlides = slick.slideCount;
        $('.pagingInfo').text(i + '/' + totalSlides);
    });

    $slickElement.slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            return '';
        },
    });




    $(".slider__box").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
  });

  $(".sustainabilitySlider__box").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
  $(".sustainabilitySliderNews-box").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,

    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },


        {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
            }
          }
    ]
  });

  
  $(".sliderInfo__box").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
  });

  
})





const priceRange = document.getElementById("price-range");
const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");
// Create the range slider
noUiSlider.create(priceRange, {
  start: [250, 750],
  connect: true,
  tooltips: [true, true],
  range: {
    min: 0,
    max: 1000,
  },
});

// Update the input fields when the slider value changes
priceRange.noUiSlider.on("update", function (values, handle) {
  if (handle === 0) {
    minValue.value = values[handle];
  }
  if (handle === 1) {
    maxValue.value = values[handle];
  }
});

console.log(priceRange)