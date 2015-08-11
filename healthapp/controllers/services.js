var healthApp = angular.module('healthApp',['chart.js', 'ui.bootstrap']);

healthApp.factory('UsersFactory', function() {
	return $resource(''), {}, {
		query: { method: 'GET', isArray: true},
		create: { method: 'POST'}
	})
});