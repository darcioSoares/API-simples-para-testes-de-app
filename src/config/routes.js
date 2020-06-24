const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Todo Routes 
    const todoService = require('../api/todo/todoServece')
    todoService.register(router, '/todos')

}


//com isso na rota => /api/todos ja esta registrados todos os metodos e configuraçoes contidas 
//no arquivo todoService. Com uma linha de codigo, consigo usar todos os metodos