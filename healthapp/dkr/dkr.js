(function(){
	'use strict';

	angular
		.module('app.core')
		.controller('dkr', dkr);

		function dkr(dataservice) {
			var vm = this;
			vm.dkr = [];
			vm.title = "DKR";

            function calcDKR() {
                return dataservice.calcDKR().then(function(data) {
                    vm.dkr = data;
                    return vm.dkr;
                })
            }
        }
})();