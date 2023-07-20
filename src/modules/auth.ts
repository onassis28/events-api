import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createJWt = (user) => {
	const token = jwt.sign(
		{ id: user.id, email: user.email },
		process.env.JWT_SECRET,
		{ expiresIn: '1d' }
	);
	return token;
};

const comparePassowrds = async (password: string, hashedPassword: string) => {
	const match = await bcrypt.compare(password, hashedPassword);
	return match;
};

const hashPassword = async (password: string) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	return hashedPassword;
};

export const protect = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		res.status(403);
		res.send('You are not logged in! Please log in to get access.');
		return;
	}
	const [prefix, theToken] = token.split(' ');
	if (!theToken || prefix !== 'Bearer') {
		res.status(403);
		res.send('You are not logged in! Please log in to get access.');
		return;
	}
	try {
		const decoded = jwt.verify(theToken, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		res.status(403);
		res.send('You are not logged in3! Please log in to get access.');
		return;
	}
};
