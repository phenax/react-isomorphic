
const express = require('express');
const app = express();

global.app= app;

// Configuration
require('./bin/config')(express, app);

app.get('*', (req, res)=> {
	res.render('IndexLayout', { req });
});

// Error handlers
require('./bin/errors')(app);

module.exports = app;
