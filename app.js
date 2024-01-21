const express = require("express");
const cors = require('cors');
const PORT = 3000
const app = express()
const router = require("./routes/tarefas.js")
const conectarMongoDb = require('./middlewares/conectarMongoDb.js')

app.use(cors())
app.use(express.json())

app.use("", router)


app.listen(
    PORT,
    ()=> {console.log(`Servidor Rodando em http://localhost:${PORT}...`)}
)

conectarMongoDb()

