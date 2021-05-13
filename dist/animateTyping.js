"use strict";

$(".animateText").each(function (i, e) {
  var currentText = $(e).text();
  var count = 0;
  var speed = $(e).attr("data-typing-speed") || 50;
  var delay = $(e).attr("data-typing-delay") || 0;
  $(e).text("");
  setTimeout(function () {
    var _loop = function _loop() {
      var thisRun = currentText.substr(0, count);
      var delay = count * speed;
      setTimeout(function () {
        $(e).text(thisRun);
      }, delay);
      count++;
    };

    while (count <= currentText.length) {
      _loop();
    }
  }, delay);
});