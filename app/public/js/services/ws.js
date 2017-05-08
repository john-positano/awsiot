angular.module('LPTIoT').service('wsService', function($q, $http) {
	var self = this;

	self.io = io(document.location.origin);

	self.io.on('buttonUpdate', function(update) {
		console.log(update);
	});
});