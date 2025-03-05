/* import { createServer } from 'node:http';
//criar servidor
//request - obter dados do usuario, response - enviar dados ao usuario
const server = createServer((request, response) => {
    response.write("a")

    return response.end()
}) 

server.listen(3333) */

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { log } from 'console'

const server = fastify()

const database = new DatabaseMemory()

// GET - buscar informação, POST - criar um registro, PUT - atualizar um registro, DELETE - deletar um registro
// PATCH - atualizar um registro especifico de um recurso e nao todos os dados (video publico ou privado)

// POST http://localhost:3333/videos
server.post('/videos', (request, reply) => {

    const body = request.body

    console.log(body)

    database.create({
        title: 'Video 1',
        description: 'video 01',
        duration: 180,
    })

    return reply.status(201).send() // algo foi criado
})

server.get('/videos', () => {
    return 'Hello Node.js'
})

// Atualizando UM unico video especifico, preciso receber o ID, Route Parameter
// PUT http://localhost:3333/videos/1
server.put('/videos/:id', () => {
    return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
    return 'Hello Node.js'
})

server.listen({
    port: 3333,
})
