const express = require('express');
const PORT = 3000
const app = express()
app.use(express.json())
app.listen(
    PORT,
    ()=> {console.log(`Servidor Rodando em http://localhost:${PORT}`)}
)

app.get('/tarefas',(req, res ) => {
    res.status(200).send({
        tarefa : 'lavar casa',
        cor : 'azul'
    })
})

app.post('/tarefas',(req,res)=> {
    const tarefa = req.body.tarefa

    if(!tarefa) return res.status(400).send("Voce deve informar a tarefa a ser adicionada !")
    const cor = req.body.cor ? req.body.cor : 'branco'

    res.status(200).send(["Tarefa criada com sucesso!",{
        tarefa: tarefa,
        cor: cor
    }])
    
 })