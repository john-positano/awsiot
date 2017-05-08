'use strict';

angular.module('LPTIoT', [
	'ui.router'
]).run(function($rootScope, $state) {
	$state.go('login');
});