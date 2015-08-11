(function(){
	'use strict';

	angular.module('app.core')
		   .controller('Bmi', Bmi);

		function bmi(dataservice) {

			var vm = this;
			vm.bmi = [];
			vm.title = "BMI";

			function calcBMI() {
				return dataservice.calcBMI().then(function(data) {
					vm.bmi = data;
					return vm.bmi;
				});
			}

			function rateBMI() {
				if (vm.bmi < 18.5) {
					return ("Underweight");
				} else if (vm.bmi >= 18.5 && vm.bmi < 25) {
					return ("Normal");
				} else if (vm.bmi >= 25 && vm.bmi < 30) {
					return ("Overweight");
				} else {
					return ("Obese");
				};
			};

		}

})();