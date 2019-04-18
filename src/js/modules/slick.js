module.exports = function() {

  // begin Slick slider

  $('.slider-2__list').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider-3__list').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 741,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // end Slick slider

};