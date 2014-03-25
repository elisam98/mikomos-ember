export default Ember.Route.extend({
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