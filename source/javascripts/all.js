function isOnScreen($element) {
  var elementPosition = $element.offset();
  var elementTop = elementPosition.top;
  var scrollTop = window.pageYOffset;
  var screenHeight = $(window).height();
  var screenBottom = scrollTop + screenHeight;
  var offset = 50;

  return screenBottom > (elementTop + offset);
}

$(function() {
  window.onscroll = function () {
    $(".animate").each(function(i) {
      var $el = $(this);
      if (!$el.hasClass("animated")) {
        if (isOnScreen($el)) {
          $el.addClass("animated");
        }
      }
    });
  };
});
