const express = require("express")
const router = express.Router()
const api = require("../config/axiosConfig")

router.get("/", async (req, res) => {
    res.render("home", {
        title: "Sonho Belo - Brigadeiros Gourmet",
    })
})

router.get("/sabores", (req, res) => {
    res.render("sabores", {
        title: 'Sonho Belo - Sabores',
        produto: produtos
    })
})

router.post("/encomendas", (req, res) => {
    const {nome, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco} = req.body

    res.json({nome, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco})
})

module.exports = router