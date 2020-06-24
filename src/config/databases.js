const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function(){
      console.log('db conectado com sucesso!!')
  }).catch(function(err){
      console.log('erro ao se conectar db')
  })
  

  module.exports = mongoose