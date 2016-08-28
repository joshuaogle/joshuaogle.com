function isOnScreen($element) {
  var elementPosition = $element.offset();
  var elementTop = elementPosition.top;
  var scrollTop = window.pageYOffset;
  var screenHeight = $(window).height();
  var screenBottom = scrollTop + screenHeight;
  var offset = 150;

  return screenBottom > (elementTop + offset);
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var callNow = immediate && !timeout;

		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
      func.apply(context, args)
    };
	};
};

var markAnimated = debounce(function() {
  $(".animate").each(function(i) {
    var $element = $(this);

    if (!$element.hasClass("animated")) {
      if (isOnScreen($element)) {
        $element.addClass("animated");
      }
    }
  });
});

var fadeIntro = function() {
  var scrollTop = window.pageYOffset;
  $(".intro").each(function(i) {
    var $intro = $(this);
    var introHeight = $intro.height();
    var percent = scrollTop / introHeight;
    var slideUp = "translateY(-" + ((introHeight / 5) * percent) + "px)"
    var zoomOut = "scale(" + (1 - (percent / 10)) + ")"
    var blur = "blur(" + (percent * 5) + "px)"

    $intro.find(".intro-content").css({
      opacity: 1 - percent,
      transform: slideUp + " " + zoomOut,
      webkitFilter: blur
    });
  });
};

$(function() {
  if ($(".animate").length > 0) {
    window.addEventListener("scroll", markAnimated);
  }

  if ($(".intro-content").length > 0) {
    window.addEventListener("scroll", fadeIntro);
  }
});
