
const errorTemplateName= 'Error500Layout';
const defaultStatusCode= 500;


module.exports= (app)=> {

	// error handlers
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || defaultStatusCode);
			res.render(errorTemplateName, {
				message: err.message,
				error: err
			});
		});
	}

	app.use(function(err, req, res, next) {
		res.status(err.status || defaultStatusCode);
		res.render(errorTemplateName, {
			message: err.message,
			error: {}
		});
	});
};