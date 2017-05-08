module.exports = router = (require('express')).Router();

var geocoder = require('@google/maps').createClient({
	key: process.env.GOOGLE_API_KEY
});

console.log(geocoder.reverseGeocode);

router.post('/', function(req, res, next) {
	geocoder.reverseGeocode({latlng: (req.body.latitude + ',' + req.body.longitude)}, function(err, response) {
		if (err) {
			next(err);
			return;
		}
		res.status(200).json(response);
		return;
	});
}); 