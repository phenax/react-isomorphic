
const conf= {
	
	defaultPort: 8080,

	enableGZIP: true,
	cacheMaxAge: 1 * 365 * 24 * 60 * 60 * 1000,

	isProduction: (process.env.NODE_ENV == 'production'),

	cookiePassPhrase: 'very-secret-shit',
	
	staticDir: '../public',
	sharedDir: '../shared',
	
	templateExtension: '.js',
	
	wrapperTemplate: 'IndexLayout',
};



const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression= require('compression');


const getCacheOptions= ()=> {
	const staticOptions = {};

	if(conf.isProduction) {
		staticOptions.maxAge= conf.cacheMaxAge;
	}

	return staticOptions;
}


module.exports= (express, app)=> {

	// The port
	app.set('port', parseInt(process.env.PORT || conf.defaultPort));

	// GZIP
	if(conf.enableGZIP)
		app.use(compression());

	// In production no logging
	if(!conf.isProduction)
		app.use(logger('dev'));
	else
		console.log("# Production mode #");


	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(cookieParser(conf.cookiePassPhrase));


	// Static content(cached)
	app.use(express.static(path.join(__dirname, conf.staticDir), getCacheOptions()));
	
	// Remove the header
	app.disable('x-powered-by');



	const middleware= require('./middlewares')(app);

	// Set up rendering engine
	middleware.engineSetup({
		path: path.join(__dirname, conf.sharedDir),
		extension: conf.templateExtension
	});

	// Render skeleton and route
	app.use(middleware.rendering({
		wrapper: conf.wrapperTemplate
	}));
};