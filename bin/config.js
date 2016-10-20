
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports= (express, app)=> {

	// View Engine
	app.set('views', path.join(__dirname, '../layouts'));
	app.engine('js', require('express-react-views').createEngine());
	app.set('view engine', 'js');

	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, '../public')));
};