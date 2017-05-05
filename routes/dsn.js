module.exports = router = (require('express')).Router();

router.post('/', function(req, res, next) {
	Ω.query(`
		SELECT
			*
		FROM
			users u
		JOIN
			dsn d
		ON
			d.userId = u.userId
	`, [], function(err, results) {
		if (err) {
			console.log(err);
		}
		console.log(results);
		res.send(results);
		return;
	});
});