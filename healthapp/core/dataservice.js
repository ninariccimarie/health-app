(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataservice', function(){


			var service = {
                calcBMI: calcBMI,
                calcDKR: calcDKR,
                calcBMR: calcBMR
            };

			
            function calcBMI(weight, height) {
				var bmi = (weight  / (height * height)) * 703;
				return bmi ;

			}

			function calcBMR(gender, weight, height, age){
				var BMR = this;

				if (gender == 'male') {
				BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
				} else {
				BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
				}
				
				return(BMR);

				}

			function calcDKR(){
				$scope.DKR = $scope.BMR * $scope.exercise;
				var DKR = $scope.DKR;
				return(DKR);
			}

            return service;

		});
})();