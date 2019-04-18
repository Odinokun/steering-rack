$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin mobile-menu
  require('./modules/mobile-menu')();

  // begin background top menu
  require('./modules/bg-menu')();

  // begin Slick slider
  require('./modules/slick')();

  // begin Phone mask
  require('./modules/maskedinput')();

  // begin Animate.css
  // require('./modules/waypoints')();
  // require('./modules/animateCss')();

  // begin Fancybox3
  require('./modules/fancybox')();

});