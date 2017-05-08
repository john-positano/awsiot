'use strict';

angular.module('LPTIoT').config([
	'$stateProvider',
	'$httpProvider',
//	'growlProvider',
	'$windowProvider',
	function(
		$stateProvider, 
		$httpProvider, 
//		growlProvider, 
		$windowProvider
	) {
/*		growlProvider.globalTimeToLive({
			success: 3000,
			warning: 3000,
			info: 5000
		}).globalDisableIcons(true).globalDisableCountDown(true);
*/
	}
]).config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider.state('login', {
			url: '/login',
			views: {
				'header' : {
					templateUrl: 'public/views/header.html',
					controller: ''
				},
				'body': {
					templateUrl: 'public/views/login-body.html',
					controller: 'LoginCtrl'
				}
			}
		})
/*		.state('farms.farmsPage', {
			url: '/',
			views: {
				'main': {
					templateUrl: 'views/farms.html',
					controller: 'FarmsPageCtrl'
				}
			},
			resolve: {
				farms: function(farmsService) {
					return farmsService.getFarms();
				}
			}
		})
*/ /*	.state('farms.properties', {
			url: '/:farmId/properties/all/:limit/:offset/:sort',
			views: {
				'main': {
					templateUrl: 'views/properties.html',
					controller: 'PropertiesCtrl'
				}
			},
			resolve: {
				properties: function(propertiesService, $stateParams) {
					return propertiesService.getPropertiesByFarm($stateParams.farmId);
				}
			}
		})
*/ /*	.state('csv', {
			url:'/dev/csv',
			views: {
				'header' : {
					templateUrl: 'views/regions/headerLoggedIn.html',
					controller: 'HeaderCtrl'
				},
				'layout': {
					templateUrl: 'views/layouts/2-section.html',
					controller: ''
				},
				'main@csv' : {
					templateUrl: 'views/csvPage.html',
					controller: 'CSVCtrl'
				}
			},
			resolve: {
				logs: function(CSVService) {
					return CSVService.getLogs();
				}
			}
		})
*/		.state('otherwise', {url: '/login'});
	}
]);