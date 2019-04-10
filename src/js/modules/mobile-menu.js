module.exports = function() {

  // begin mobile menu

  $('#burger').on('click', function() {
    if($("#burger input").is(':checked')) {
      $('.header-menu').addClass('active');
    } else {
      $('.header-menu').removeClass('active');
    }
  });

  // end   mobile menu

};