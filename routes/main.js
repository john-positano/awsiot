module.exports = router = (require('express')).Router();

var fs = require('fs');

router.get('/', function(req, res, next) {
	fs.createReadStream(__dirname + '/../public/views/index.html').pipe(res);
	res.end();
});