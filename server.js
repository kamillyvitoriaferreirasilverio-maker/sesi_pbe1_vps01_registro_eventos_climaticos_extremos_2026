const express = require("express")
const cors = require("cors")
const eventos = require("./dados.json")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const readEventos = (req, res) => {
    res.json(eventos)
}

function autoIncrement() {
    return Number(eventos[eventos.length - 1].id) + 1
}

const createEvento = (req, res) => {
    const evento = req.body
    evento.id = autoIncrement()
    eventos.push(evento)
    res.status(201).json(evento)
}

const buscaEvento = (req, res) => {
    const id = req.params.id
    const evento = eventos.find(e => e.id == Number(id))

    if (evento) {
        res.json(evento)
    } else {
        res.status(404).json("Id não encontrado")
    }
}

const buscaCidade = (req, res) => {
    const cidade = req.params.cidade

    const resultado = eventos.filter(e =>
        e.cidade.toLowerCase() == cidade.toLowerCase()
    )

    if (resultado.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).json("Cidade não encontrada")
    }
}

const buscaTipoEvento = (req, res) => {
    const tipo = req.params.tipo_evento

    const resultado = eventos.filter(e =>
        e.tipo_evento.toLowerCase() == tipo.toLowerCase()
    )

    if (resultado.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).json("Tipo de evento não encontrado")
    }
}

const updateEvento = (req, res) => {
    const id = req.params.id
    const dados = req.body

    dados.id = Number(id)

    let encontrado = false

    eventos.forEach((evento, indice) => {
        if (evento.id == id) {
            eventos[indice] = dados
            encontrado = true
        }
    })

    if (encontrado) {
        res.status(202).json(dados)
    } else {
        res.status(404).json("Evento não encontrado")
    }
}

const deleteEvento = (req, res) => {
    const id = req.params.id

    const indice = eventos.findIndex(e => e.id == Number(id))

    if (indice != -1) {
        const eventoExcluido = eventos.splice(indice, 1)
        res.json(eventoExcluido)
    } else {
        res.status(404).json("Evento não encontrado")
    }
}

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const porta = 3000

app.get("/", rotaInicial)
app.get("/eventos", readEventos)
app.post("/eventos", createEvento)
app.get("/eventos/:id", buscaEvento)
app.get("/eventos/cidade/:cidade", buscaCidade)
app.get("/eventos/tipo/:tipo_evento", buscaTipoEvento)
app.put("/eventos/:id", updateEvento)
app.delete("/eventos/:id", deleteEvento)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})