const { Router } = require('express')
module.exports = (server) => {
    server.use((req, res, next) => {
        universities(server, new Router())
        next()
    })
}