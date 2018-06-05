module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('dashboard', { heading: 'Dashboard', title: 'Oshodhara Nepal' });
	});
	app.get('/programs', function (req, res) {
		res.render('programs', { heading: 'Dashboard', title: 'Oshodhara Nepal' });
	});
};
