
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression= require('compression');

const isProduction= process.env.NODE_ENV == 'production';

if(isProduction) {
	console.log("# Production mode #");
}

const getCacheOptions= ()=> {
	const staticOptions = {};

	if(isProduction)
		staticOptions.maxAge= 1 * 365 * 24 * 60 * 60 * 1000;

	return staticOptions;
}

module.exports= (express, app)=> {

	// The port
	app.set('port', parseInt(process.env.PORT || 8080));

	// GZIP
	app.use(compression());

	app.use(logger('dev'));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(cookieParser('very-secret-shit'));


	// Static content(cached)
	app.use(express.static(path.join(__dirname, '../public'), getCacheOptions()));
	
	// Remove the header
	app.disable('x-powered-by');



	const middleware= require('./middlewares')(app);

	// Set up rendering engine
	middleware.engineSetup({
		path: path.join(__dirname, '../shared'),
		extension: '.js'
	});


	// Render skeleton and route
	app.use(middleware.rendering({
		wrapper: 'IndexLayout'
	}));
};