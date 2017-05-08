'use strict';

angular.module('LPTIoT', [
	'ui.router'
]).run(function($rootScope, $state, loginService, geolocationService) {
	geolocationService.registerLocation(function(position) {
		loginService.translateCoordinatesToAddress(position).then(
			function(response) {
				console.log(response);
				return;
			},
			function(error) {
				console.log(error);
				return;
			}
		);
	});
	$state.go('login');
});