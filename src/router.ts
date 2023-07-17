import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send('Hello World2');
});

router.get('/users', (req, res) => {
	res.status(200);
	res.send('Users');
});

router.get('/users/:id', (req, res) => {
	res.send(`User ${req.params.id}`);
});

router.put('/users/:id', (req, res) => {
	res.send(`User ${req.params.id} updated`);
});

router.get('./events', (req, res) => {
	res.send('Events');
});

router.get('./events/:id', (req, res) => {
	res.send(`Event ${req.params.id}`);
});

router.put('./events/:id', (req, res) => {
	res.send(`Event ${req.params.id} updated`);
});

router.delete('./events/:id', (req, res) => {
	res.send(`Event ${req.params.id} deleted`);
});

router.post('./event', (req, res) => {
	res.send(`Event created`);
});

export default router;
