
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

module.exports = app;

app.use(express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use('/api', require('./routes'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname + '/index.html'));
});
