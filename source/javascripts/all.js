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
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var markAnimated = debounce(function() {
  $(".animate").each(function(i) {
    var $el = $(this);
    if (!$el.hasClass("animated")) {
      if (isOnScreen($el)) {
        $el.addClass("animated");
      }
    }
  });
});

$(function() {
  window.addEventListener("scroll", markAnimated);
});
