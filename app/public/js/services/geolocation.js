'use strict';

angular.module('LPTIoT').service('geolocationService', function($http, $q) {
	var self = this;

	self.registerLocation = function(done) {
		navigator.geolocation.getCurrentPosition(done);
	};
});