module.exports = router = (require('express')).Router();

var fs = require('fs');

router.get('/', function(req, res, next) {
	var indexPage = fs.readFileSync(__dirname + '/../public/views/index.html');
	res.set('Content-Type', 'text/html');
	res.status(200).send(indexPage);
});