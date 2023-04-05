function positionTimelineEvents() {
    let events = document.querySelectorAll(".timeline-event");
    let containerWidth = document.querySelector(".timeline-container").offsetWidth;
    let eventWidth = events[0].offsetWidth;
    let totalWidth = eventWidth * events.length + 20 * (events.length - 1);
  
    if (totalWidth < containerWidth) {
        let offset = (containerWidth - totalWidth) / 2;
      events[0].style.left = offset + "px";
  
      for (let i = 1; i < events.length; i++) {
        offset += eventWidth + 20;
        events[i].style.left = offset + "px";
      }
    } else {
      for (let i = 0; i < events.length; i++) {
        events[i].style.left = "";
      }
    }
  }
  
  positionTimelineEvents();
  
  window.addEventListener("resize", function () {
    positionTimelineEvents();
  });
  