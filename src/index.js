const app = require('./server');

const port = process.env.PORT || 3005;

app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
