(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('Dkr', Dkr);

		Dkr.$inject = ['dataservice', '$scope'];

		function Dkr(dataservice,$scope) {
			
			$scope.getDkr = function() {
				$scope.answer = dataservice.calcDKR($scope.calcBMR, $scope.exercise);
			}

        }
})();