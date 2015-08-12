(function() {
	'use strict';

	angular
		.module('app.core')
		.controller('Radar', Radar);

		Radar.$inject = ['$scope'];

		function Radar($scope) {
			$scope.labels = ['Eating', 'Cleaning', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

			$scope.data = [
			[60, 59, 90, 81, 56, 55, 40],
			[28, 48, 40, 19, 96, 27, 100]
			];

			$scope.onClick = function (points, evt) {
				console.log(points, evt);
			};
		};

})();