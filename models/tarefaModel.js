const mongoose = require("mongoose");
const { Schema } = mongoose;
const TarefaSchema = new Schema({
    titulo: {type : String, default: 'Tarefa'},
    conteudo: {type : String, required: true},
    favorito: {type: Boolean, default: false},
    cor: {type: String , default: 'branco'}
    
})

const TarefaModel = (mongoose.models.tarefas || mongoose.model('tarefas', TarefaSchema));

module.exports = TarefaModel