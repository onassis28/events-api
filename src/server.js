const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200);
	res.json({ message: 'This server is working2' });
	res.send('This server is working2');
});

module.exports = app;
