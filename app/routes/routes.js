module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('dashboard', { heading: 'Dashboard', title: 'Oshodhara Nepal', navDashboard: 'active' });
	});
	app.get('/programs', function (req, res) {
		res.render('programs', { heading: 'Programs', title: 'Oshodhara Nepal', navPrograms: 'active' });
	});
};
