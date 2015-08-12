(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmi', Bmi);

		Bmi.$inject = ['dataservice', '$scope'];

		function Bmi(dataservice,$scope) {

            $scope.getBmi = function(){
                 $scope.result = '';

                 $scope.answer = dataservice.calcBMI($scope.weight, $scope.height);

                    if($scope.answer < 18.5){
                        $scope.result = "Underweight";
                    }else if ($scope.answer >= 18.5 && $scope.answer < 25) {
                        $scope.result = "Normal";
                    } else if ($scope.answer >= 25 && $scope.answer < 30) {
                        $scope.result = "Overweight";
                    } else {
                        $scope.result = "Obese";
                    }
                return $scope.result;
            };

			/*function rateBMI() {
				if ( getBmi < 18.5) {
					return ("Underweight");
				} else if (getBmi >= 18.5 && getBmi < 25) {
					return ("Normal");
				} else if (getBmi >= 25 && getBmi < 30) {
					return ("Overweight");
				} else {
                    return ("Obese");
                }
			}*/

		}

})();