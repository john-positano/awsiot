module.exports = router = (require('express')).Router();

router.post('/', function(req, res, next) {
	req.app.wsServer.emit('buttonUpdate', req.body);
	res.status(200).end();
	return;
});