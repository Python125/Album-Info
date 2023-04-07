$(".timeline-event-button").click(function (e) {
  e.preventDefault();
  var $container = $(this).closest(".timeline-events-container");
  var containerWidth = $container.width();
  var scrollAmount = containerWidth * 0.8;
  $container.animate({ scrollLeft: "+=" + scrollAmount }, 500);
});
