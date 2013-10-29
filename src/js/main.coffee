require ['config'], (config) ->
  requirejs.config(config)

  require ["app", "jquery", "moment", "socket-io" ], (app, $) ->
    "use strict"
    
	$(".full-height").height $(".full-height").parent().height()  if Modernizr.mq("only screen and (min-width: 768px)")