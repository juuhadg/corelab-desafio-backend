const express = require("express")
const { obterTarefas,adicionarTarefa,editarTarefa } = require('../controllers/tarefasController.js');


const router = express.Router()

router.get("/tarefas", obterTarefas)
router.post("/tarefas", adicionarTarefa)
router.put("/tarefas",editarTarefa)

module.exports = router