const mongoose = require('mongoose')
const conectarMongoDb = async () => {
    mongoose.connect('mongodb+srv://publico:corenotesdesafio@corenotes.ixzuwft.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('Banco de Dados Conectado com Sucesso!')
    }) .catch((error)=> {
        console.log(error)
    })
} 

module.exports = conectarMongoDb