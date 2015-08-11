(function(){
	'use strict';

	angular
		.module('app.bmr')
		.controller('Bmr', Bmr);

		function bmr(dataservice) {
			var vm = this;

			function calcBMR() {
				return dataservice.calcBMR().then(function(data) {
					vm.bmr = data;
					return vm.bmr;
				});
			}
		}

})();