define("appkit/routes/index", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Route.extend({
      model: function() {
        return ['New York', 'New Jersey', 'Connecticut'];
      }
    });
  });