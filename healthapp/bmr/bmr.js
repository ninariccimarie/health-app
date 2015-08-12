(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Bmr', Bmr);

		Bmr.$inject = ['dataservice', '$scope'];

<<<<<<< HEAD
			/*function calcBMR() {
				return dataservice.calcBMR().then(function(data) {
					vm.bmr = data;
					return vm.bmr;
				});
			}*/
=======
		function Bmr(dataservice,$scope) {

			$scope.getBmr = function() {
				$scope.answer = dataservice.calcBMR($scope.gender, $scope.weight, $scope.height, $scope.age);
			}
>>>>>>> 3faa1e59f67aae0a7bfe274393cb0d85b76ce21a
		}

})();