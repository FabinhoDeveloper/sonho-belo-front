const express = require("express")
const router = express.Router()

const produtos = [
    {
        nome: 'Brigadeiro Tradicional',
        descricao: 'O clássico brigadeiro de chocolate com granulado, irresistível e delicioso.'
    },
    {
        nome: 'Brigadeiro de Morango',
        descricao: 'Brigadeiro com sabor de morango, suave e doce na medida certa.'
    },
    {
        nome: 'Brigadeiro de Coco',
        descricao: 'Uma combinação perfeita de chocolate e coco para os amantes de sabores tropicais.'
    },
    {   
        nome: 'Brigadeiro de Leite Ninho',
        descricao: 'A cremosidade do Leite Ninho se encontra com o recheio irresistível de Nutella, criando uma explosão de sabor em cada mordida. Um doce sofisticado e indulgente.'
    }
]

router.get("/", (req, res) => {
    res.render("home", {
        title: "Sonho Belo - Brigadeiros Gourmet",
        produto: produtos
    })
})

router.get("/sabores", (req, res) => {
    res.render("sabores", {
        title: 'Sonho Belo - Sabores',
        produto: produtos
    })
})

router.post("/encomendas", (req, res) => {
    const {nome, sabores, dataRetirada, horaRetirada, quantidade, entrega, endereco} = req.body

    res.json({nome, sabores, dataRetirada, horaRetirada, quantidade, entrega, endereco})
})

module.exports = router