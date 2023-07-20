import prisma from '../db';
import { Request, Response } from 'express';
import { comparePasswords, createJWt, hashPassword } from '../modules/auth';

export const createUser = async (req: Request, res: Response) => {
	const user = await prisma.user.create({
		data: {
			name: req.body.name,
			email: req.body.email,
			password: await hashPassword(req.body.password),
		},
	});

	const token = createJWt(user);
	res.status(201);
	res.json({ token });
};

export const login = async (req: Request, res: Response) => {
	const user = await prisma.user.findUnique({
		where: {
			email: req.body.email,
		},
	});

	if (!user) {
		res.status(404);
		res.json({ message: 'User not found' });
		return;
	}

	const match = await comparePasswords(req.body.password, user.password);

	if (!match) {
		res.status(401);
		res.json({ message: 'Wrong password' });
		return;
	}

	const token = createJWt(user);
	res.status(200);
	res.json({ token });
};
