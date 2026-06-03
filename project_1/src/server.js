import dotenv from 'dotenv';
import Fastify from 'fastify';

import HomeController from './controllers/HomeController';

dotenv.config();

const app = Fastify({
	logger: true,
});

// get post put delete patch
app.get('/', (request, reply) => new HomeController().index(request, reply));

app.get('/videos', function (request, reply) {
	reply.send({ obj: 'hello, world!' });
});

app.post('/videos', function (request, reply) {
	reply.send({ obj: 'hello, world!' });
});

app.get('/videos/:id/video', function (request, reply) {
	reply.send({ obj: 'hello, world!' });
});

app.put('/videos/:id/video', function (request, reply) {
	reply.send({ obj: 'hello, world!' });
});

app.patch('/videos/:id/video', function (request, reply) {
	reply.send({ obj: 'hello, world!' });
});

app.get('/login', function (request, reply) {
	reply.send({ '': 'Vamos Acesar o Sistema' });

	reply.end();
});

app.listen({ port: process.env.APP_PORT || 3000 }, function (err, address) {
	console.log('server is running on http://localhost:' + process.env.APP_PORT);
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
});
