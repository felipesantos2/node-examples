import Fastify from 'fastify'


const fastify = Fastify({
    logger: true,
})

// get post put delete patch
fastify.get('/', function (request, reply) {
    reply.send({ name: 'Felipe' })
})

fastify.get('/videos', function (request, reply) {
    reply.send({ obj: "hello, world!" })
})

fastify.post('/videos', function (request, reply) {
    reply.send({ obj: "hello, world!" })
})

fastify.get('/videos/:id/video', function (request, reply) {
    reply.send({ obj: "hello, world!" })
})

fastify.put('/videos/:id/video', function (request, reply) {
    reply.send({ obj: "hello, world!" })
})

fastify.patch('/videos/:id/video', function (request, reply) {
    reply.send({ obj: "hello, world!" })
})

fastify.listen({ port: 3333 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})