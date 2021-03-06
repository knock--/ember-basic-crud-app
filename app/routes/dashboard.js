import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {

		// Note: Even a pull from locally defined data is returned as a promise
		return this.store.findAll('income').then(function(data) {

			var sum = 0;

			data.getEach('salary').forEach(function(item) {
				sum += accounting.unformat(item);
			});

			sum = sum.toFixed(2);

			return { total: accounting.formatMoney(sum, { precision: 2 }) };
		});

	}

});
