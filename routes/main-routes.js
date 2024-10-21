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
    },
    {
        nome: 'Brigadeiro de Oreo',
        descricao: 'Delicioso Brigadeiro de OREO.'
    },
    {
        nome: 'Brigadeiro de Amendoim',
        descricao: 'Uma mistura perfeita de brigadeiro com o sabor marcante e crocante do amendoim.'
    },
    {
        nome: 'Brigadeiro de Doce de Leite',
        descricao: 'Um brigadeiro cremoso de doce de leite, perfeito para quem adora sabores mais suaves e caramelizados.'
    },
    {
        nome: 'Brigadeiro de Maracujá',
        descricao: 'Brigadeiro com um toque cítrico e refrescante do maracujá, uma explosão de sabor tropical.'
    },
    {
        nome: 'Brigadeiro de Café',
        descricao: 'Brigadeiro com sabor intenso de café, ideal para os amantes de doces com toque mais adulto e sofisticado.'
    },
    {
        nome: 'Brigadeiro de Limão Siciliano',
        descricao: 'Um brigadeiro suave com o toque cítrico e aromático do limão siciliano, perfeito para quem prefere sabores mais refrescantes.'
    },
    {
        nome: 'Brigadeiro de Paçoca',
        descricao: 'A combinação deliciosa do brigadeiro com a textura e sabor inconfundível da paçoca, ideal para quem ama sabores brasileiros.'
    },
    {
        nome: 'Brigadeiro de Pistache',
        descricao: 'Um brigadeiro requintado, com o sabor suave e levemente salgado do pistache, uma escolha única e sofisticada.'
    }
];


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
    const {nome, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco} = req.body

    res.json({nome, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco})
})

module.exports = router