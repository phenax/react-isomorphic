
module.exports= (app)=> {

	// error handlers
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('Error500Layout', {
				message: err.message,
				error: err
			});
		});
	}

	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('Error500Layout', {
			message: err.message,
			error: {}
		});
	});
};