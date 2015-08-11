(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmi', Bmi);

		Bmi.$inject = ['dataservice', '$scope'];

		function Bmi(dataservice,$scope) {

			//var vm = this;

            $scope.getBmi = function(){
                $scope.answer = dataservice.calcBMI($scope.weight, $scope.height);
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