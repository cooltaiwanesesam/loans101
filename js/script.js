(function($){
  //FAB scroll
  //https://jsfiddle.net/d00h1zmn/4/
  var senseSpeed = 5;
  var previousScroll = 0;
  $(window).scroll(function(event){
     var scroller = $(this).scrollTop();
     if (scroller-senseSpeed > previousScroll){
        $("#fab").filter(':not(:animated)').fadeOut();
     } else if (scroller+senseSpeed < previousScroll) {
        $("#fab").filter(':not(:animated)').fadeIn();
     }
     previousScroll = scroller;
  });

  // Answer toggle
  $(document).ready(function() {
    $('.answer .button').click (function() {
      $('.summary').slideToggle();
    })  
  });
})(jQuery);

// ===================== Modal ====================
