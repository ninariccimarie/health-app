(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmr', Bmr);

		function Bmr(dataservice) {
			var vm = this;

			function calcBMR() {
				return dataservice.calcBMR().then(function(data) {
					vm.bmr = data;
					return vm.bmr;
				});
			}
		}

})();