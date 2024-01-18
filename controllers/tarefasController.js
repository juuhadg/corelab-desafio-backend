const TarefaModel = require("../models/tarefaModel")
const obterTarefas = async (req,res) => {
    try {
        const tarefas = await TarefaModel.find()
        tarefas.sort((a,b)=> b.favorito - a.favorito); //ordenar diretamente os favoritos em primeiro lugar
        return res.status(200).send(tarefas)

    } catch(error) {
        return res.status(500).send("Ocorreu um erro ao obter as tarefas.")

    }
}

const adicionarTarefa = async (req,res)=> {
    const tarefa = req.body

    if(!tarefa) return res.status(400).send("Você deve informar a tarefa a ser adicionada !")

    if(!tarefa.conteudo) return res.status(400).send("Favor informar o conteúdo da tarefa.")

    try {
        await TarefaModel.create(tarefa)
        return res.status(200).send("Tarefa Registrada com Sucesso!")

    } catch(error) {
        return res.status(500).send("Ocorreu um erro ao registrar a tarefa.")
    }
    
    
 }

 const editarTarefa = async (req,res) => {
    try {

        const tarefaId  = req.query.id
        const tarefa = await TarefaModel.findById(tarefaId)

        if(!tarefa) return res.status(400).send("Tarefa não encontrada.")

        const novoConteudo = req.body.conteudo
        const novoTitulo = req.body.titulo

        if(!novoConteudo && !novoTitulo) return res.status(400).send("Favor informar pelo menos 1 parametro para edição.")

        if(novoConteudo) tarefa.conteudo = novoConteudo;

        if(novoTitulo) tarefa.titulo = novoTitulo;

        await TarefaModel.findByIdAndUpdate({ _id: tarefa._id}, tarefa)
        return res.status(200).send("Tarefa editada com sucesso.")

    } catch(error) {
        return res.status(500).send("Ocorreu um erro ao editar sua tarefa.")
    }
    
 }

module.exports = {
    obterTarefas,adicionarTarefa,editarTarefa
}
