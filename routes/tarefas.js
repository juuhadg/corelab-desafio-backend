const express = require("express")
const { obterTarefas,adicionarTarefa,editarTarefa,deletarTarefa,alterarFavorito,alterarCor } = require('../controllers/tarefasController.js');


const router = express.Router()

router.get("/tarefas", obterTarefas)
router.post("/tarefas", adicionarTarefa)
router.put("/tarefas",editarTarefa)
router.delete("/tarefas",deletarTarefa)
router.put("/tarefas/favoritar",alterarFavorito)
router.put("/tarefas/cor",alterarCor)

module.exports = router