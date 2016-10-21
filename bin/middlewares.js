
const expressReactViews= require('express-react-views');

module.exports= (app)=> ({

	init: (config)=> {

		app.set('views', config.path);
		app.engine(config.extension, expressReactViews.createEngine(config.viewEngine));
		app.set('view engine', config.extension);
	},

	rendering: (config) => (req, res, next) => {
		res.render(config.wrapper, { req });
	},
});