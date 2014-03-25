define("appkit/adapters/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = DS.FixtureAdapter.extend();
  });
define("appkit/app", 
  ["ember/resolver","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];

    var App = Ember.Application.extend({
      LOG_ACTIVE_GENERATION: true,
      LOG_MODULE_RESOLVER: true,
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver['default']
    });

    __exports__["default"] = App;
  });
define("appkit/components/pretty-color", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Component.extend({
      classNames: ['pretty-color'],
      attributeBindings: ['style'],
      style: function(){
        return 'color: ' + this.get('name') + ';';
      }.property('name')
    });
  });
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
define("appkit/routes/browse", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Route.extend({
    	model: function() {
    		var states = ["FL", "NJ"];
    		var url = 'https://api.mongolab.com/api/1/databases/mikomos/collections/test?apiKey=24Jast8W3FX8iW6_CT5KvTye2565XFfX';
    		return Ember.$.getJSON(url).then(function(data) {
    			return data.filter(function(item, index, self) {
    //				console.log(Ember.$.inArray(item.state, states));
    				if (Ember.$.inArray(item.state, states) > -1) {
    					return true;
    				}
    			});
    		});
    	}
    });
  });
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
define("appkit/utils/ajax", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global ic */
    __exports__["default"] = function ajax(){
      return ic.ajax.apply(null, arguments);
    }
  });
//# sourceMappingURL=app.js.map