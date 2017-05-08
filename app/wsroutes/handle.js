module.exports = function(socket, next) {
	socket.on('data', function(data) {
		console.log(data);
	});
};