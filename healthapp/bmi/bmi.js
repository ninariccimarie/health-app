(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmi', Bmi);

		Bmi.$inject = ['dataservice', '$scope'];

		function Bmi(dataservice,$scope) {

            $scope.getBmi = function(){
                $scope.answer = dataservice.calcBMI($scope.weight, $scope.height);
            }

			$scope.getRateBmi = function() {
				if ( getBmi < 18.5) {
					return ("Underweight");
				} else if (getBmi >= 18.5 && getBmi < 25) {
					return ("Normal");
				} else if (getBmi >= 25 && getBmi < 30) {
					return ("Overweight");
				} else {
					return ("Obese");
				};
			};

		}

})();