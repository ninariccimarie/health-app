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
				return(bmi);

<<<<<<< HEAD
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

=======
			}

			function calcBMR(gender, weight, height, age){
				var bmr = this;

				if (gender == 'male') {
				bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
				} else {
				bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
				}
				return(bmr);
				}

			function calcDKR(exercise,$scope){
				var dkr = this;
				$scope.calcBMR = calcBMR;

				dkr = calcBMR * exercise;
				return(dkr);
			}

>>>>>>> 3faa1e59f67aae0a7bfe274393cb0d85b76ce21a
            return service;

		});
})();