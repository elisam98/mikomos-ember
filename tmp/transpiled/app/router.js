define("appkit/router", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

    Router.map(function() {
    	this.route('browse');
    	this.route('search');
    		this.resource('places', function() {
    	this.resource('place', {path: "/:id"});
     //		this.route('new');
    	});
    });

    __exports__["default"] = Router;
  });