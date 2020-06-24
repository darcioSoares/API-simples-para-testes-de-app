const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
Todo.updateOptions({new: true, runValidators: true})


module.exports = Todo


//Todo.methods => configurando os metodos (verbos) da aplicação

//Todo.updateOptions => caso seja feito um update, quero que retorne as informaçoes atualizadas

// new: true => e para retorna com resposta as informaçoes atualizadas

//runValidators: true e para aplicar as validaçoes no update
//pois ele por padrão só aplica na inserção e não aplica na atualização