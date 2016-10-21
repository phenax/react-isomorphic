
const express = require('express');
const app = express();


// Configuration
require('./bin/config')(express, app);


// Error handlers(500)
require('./bin/errors')(app);


app.listen(app.get('port'), ()=> {

	console.log(`Listening to port ${app.get('port')}...`);
});
