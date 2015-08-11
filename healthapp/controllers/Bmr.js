(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmr', Bmr);

        Bmr.$inject = ['dataservice'];

		function Bmr(dataservice) {
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