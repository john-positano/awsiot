'use strict';

angular.module('LPTIoT').service('loginService', function ($http, $q) {
	var self = this;

	self.translateCoordinatesToAddress = function(position) {
		console.log('position', position);
		var deferred = $q.defer();
		var positionData = {
			accuracy: position.coords.accuracy,
			timestamp: position.timestamp,
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		};

		$http.post(
			( 
				document.location.origin +
				'/coordinates'
			), 
			positionData
		).then(function(response) {
			deferred.resolve(response.data);
		}, function(error) {
			deferred.reject(error.data);
		});

		return deferred.promise;
	}
});