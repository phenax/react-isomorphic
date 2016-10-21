
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression= require('compression');

const isProduction= process.env.NODE_ENV == 'production';

if(isProduction) {
	console.log("# Production mode #");
}

module.exports= (express, app)=> {

	// The port
	app.set('port', parseInt(process.env.PORT || 8080));

	const staticOptions = {};

	if(isProduction) {
		staticOptions.maxAge= 1 * 365 * 24 * 60 * 60 * 1000;
	}

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, '../public'), staticOptions));

	// GZIP
	app.use(compression());
	
	// Remove the header
	app.disable('x-powered-by');
};