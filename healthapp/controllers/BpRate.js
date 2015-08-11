(function(){
	'use strict';

    angular.module('app.core')
        .controller('BpRate', bpRate);

    bpRate.$inject = ['$scope'];

    function bpRate($scope){

		if ($scope.systolic <= 120 && $scope.diastolic <= 80) {
			return ("Normal");
		} else if ($scope.systolic >= 120 && $scope.systolic < 140 && $scope.diastolic >= 80 && $scope.diastolic < 90) {
			return ("Prehypertension");
		} else if ($scope.systolic >= 140 && $scope.systolic < 160 && $scope.diastolic >= 90 && $scope.diastolic < 100) {
			return ("High Blood Pressure (Hypertension) Stage 1");
		} else if ($scope.systolic >= 160 && $scope.systolic <= 180 && $scope.diastolic >= 100 && $scope.diastolic <= 110) {
			return ("High Blood Pressure (Hypertension) Stage 2");
		} else if ($scope.systolic > 180 && $scope.diastolic > 110) {
			return ("Hypertensive Crisis (Emergency care needed!)");
		}
	}

})();