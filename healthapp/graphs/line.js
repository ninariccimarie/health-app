(function() {
	'use strict';

	angular
		.module('app.core')
		.controller('Line', Line);

		Line.$inject = ['$scope'];

		function Line($scope) {
			$scope.labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$scope.data = [
	[8, 4, 4, 8, 6, 10, 8],
	[9, 8, 7, 7, 8, 10, 8],
	[8, 7, 7, 8, 6, 9, 10],
	[7, 8, 5, 8, 9, 10, 9]
	];
	$scope.colours = [
		{
	        fillColor: 'rgba(85,85,85,0.1)',
	        strokeColor: 'rgba(85,85,85,1)',
	        pointColor: 'rgba(85,85,85,1)',
	        pointStrokeColor: '#fff',
	        pointHighlightFill: '#fff',
	        pointHighlightStroke: 'rgba(148,159,177,0.5)'
	     },
	     {
			fillColor: 'rgba(191,209,213,0.1)',
			strokeColor: 'rgba(191,209,213,1)',
			pointColor: 'rgba(191,209,213,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(148,159,177,0.5)'
		},
		{
	        fillColor: 'rgba(182,194,181,0.1)',
	        strokeColor: 'rgba(182,194,181,1)',
	        pointColor: 'rgba(182,194,181,1)',
	        pointStrokeColor: '#fff',
	        pointHighlightFill: '#fff',
	        pointHighlightStroke: 'rgba(148,159,177,0.5)'
	     },
	     {
			fillColor: 'rgba(161,187,193,0.1)',
			strokeColor: 'rgba(161,187,193,1)',
			pointColor: 'rgba(161,187,193,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(148,159,177,0.5)'
		}
	];
	$scope.randomize = function () {
		$scope.data = $scope.data.map(function (data) {
			return data.map(function (y) {
				y = y + Math.random() * 10 - 5;
				return parseInt(y < 0 ? 0 : y > 100 ? 100 : y);
			});
		});
	};
		};
})();