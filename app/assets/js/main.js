(function() {
  require(['config'], function(config) {
    requirejs.config(config);
    return require(["app", "jquery", "moment", "socket-io"], function(app, $) {
      return "use strict";
    });
  });

  if (Modernizr.mq("only screen and (min-width: 768px)")) {
    $(".full-height").height($(".full-height").parent().height());
  }

}).call(this);
