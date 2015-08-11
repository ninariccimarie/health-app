(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmr', Bmr);

		function bmr(dataservice) {
			var vm = this;
			vm.bmr = [];
			vm.title = "BMR";

			function calcBMR() {
				return dataservice.calcBMR().then(function(data) {
					vm.bmr = data;
					return vm.bmr;
				});
			}
		}

})();