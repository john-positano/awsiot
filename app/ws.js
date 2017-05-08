module.exports = io = require('socket.io')();

var handle = require('./wsroutes/handle');

io.on('connection', function(socket) {
	socket.use(handle);
//	socket.emit('buttonUpdate', 'test');
});