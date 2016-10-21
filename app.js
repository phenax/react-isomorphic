
const express = require('express');
const app = express();
const path= require('path');

// Configuration
require('./bin/config')(express, app);

const middleware= require('./bin/middlewares')(app);

middleware.init({
	path: path.join(__dirname, './shared'),
	extension: '.js'
});

app.use(middleware.rendering({
	wrapper: 'IndexLayout'
}));

// Error handlers
require('./bin/errors')(app);

app.listen(app.get('port'), ()=> {
	console.log(`Listening to port ${app.get('port')}...`);
});
