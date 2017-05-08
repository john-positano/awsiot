module.exports = router = (require('express')).Router();

router.post('/', function(req, res, next) {
	console.log(req.body);
	req.app.wsServer.emit('buttonUpdate', req.body);
	res.status(200).send('a');
	return;
});