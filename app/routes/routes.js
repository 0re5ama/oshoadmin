module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('dashboard', { heading: 'Oshodhara Nepal', title: 'Dashboard' });
	});
};
