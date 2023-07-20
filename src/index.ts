import app from './server';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3005;

app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
