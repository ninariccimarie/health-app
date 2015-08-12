(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataservice', function(){

			var service = {
                calcBMI: calcBMI,
                calcBMR: calcBMR,
                calcDKR: calcDKR
            };

            function calcBMI(weight, height) {
				var bmi = (weight  / (height * height)) * 703;
				return bmi ;
			}

            function calcBMR(){
                $scope.BMR = null;
                var BMR = $scope.BMR;

                if ($scope.gender == 'male') {
                    BMR = 66 + (6.23 * $scope.weight) + (12.7 * $scope.height) - (6.8 * $scope.age);
                } else {
                    BMR = 655 + (4.35 * $scope.weight) + (4.7 * $scope.height) - (4.7 * $scope.age);
                }
                $scope.BMR = BMR;
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