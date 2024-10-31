// Modulo que se comunicará com o back-end

const express = require("express")
const multer = require("multer")
const router = express.Router()
const storage = require("../config/multerConfig")
const api = require("../config/axiosConfig")

const upload = multer({storage})

// Cadastro de sabores no banco de dados

router.post("/cadastro-sabor", upload.single("file"), async (req, res) => {
    const {nome, descricao} = req.body
    const imagemUrl = `/uploads/${req.file.filename}`
    
    try {
        const saborCadastrado = await api.post("/sabor/cadastrar", {nome, descricao, imagemUrl})
        
        if (!saborCadastrado) {
            return res.json({
                sucesso: false,
                mensagem: 'Não foi possível realizar o cadastro do sabor!'
            })
        }

        res.json({
            sucesso: true,
            mensagem: `Sabor "${nome}" cadastrado com sucesso`
        })
        
    } catch (error) {
        res.json({
            sucesso: false,
            mensagem: 'Erro ao cadastrar sabor!'
        })
    }

})

// Primeiro cadastro de administrador

router.post("/primeiro-cadastro", async (req, res) => {
    const {nome, email, senha} = req.body

    const response = await api.post("/usuario/cadastrar", {nome, email, senha})
    const cadastro = response.data

    if (!cadastro) {
        return res.json({
            sucesso: false,
            mensagem: 'Não foi possível realizar o cadastro do usuário!'
        })
    }

    req.session.usuario = cadastro.usuarioCriado
    res.json({
        sucesso: true,
        mensagem: `Primeiro usuário cadastrado com sucesso`
    })
})

// Cadastro encomenda

router.post("/cadastro-encomenda", async (req, res) => {    
    const {nome_cliente, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco} = req.body
    
    try {
        const encomenda = await api.post("/encomenda/cadastrar", {nome_cliente, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco}) 

        res.json({
            sucesso: true,
            mensagem: 'Encomenda cadastrada com sucesso!'
        })
    } catch (error) {
        console.error(`Erro ao cadastrar encomenda: ${error}`)
        res.json({mensagem: 'Erro ao cadastrar encomenda'})
    }
})

module.exports = router