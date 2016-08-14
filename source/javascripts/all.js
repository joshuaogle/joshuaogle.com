$(function() {
  $(".animate").each(function(i, el) {
    var $el = $(el);
    console.log($el.is(":in-viewport(100)"));
    if ($el.isInViewport({tolerance: 3000})) {
      console.log("go");
      $el.addClass("animated");
    }
  });
});
