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

// Editar sabor

router.post("/editar-sabor/:id", upload.single("file"), async (req, res) => {
    const {id} = req.params
    const {nome, descricao} = req.body 
    const imagemUrl = req.file ? `/uploads/${req.file.filename}` : undefined
    
    try {
        const saborAtualizado = await api.post(`/sabor/editar/${id}`, {
            nome, descricao, imagemUrl
        })

        res.json({
            sucesso: true,
            mensagem: 'Sabor editado com sucesso!'
        })    
    } catch (error) {
        res.json({
            sucesso: false,
            mensagem: 'Erro ao editar sabor!'
        }) 
    }
})

router.post("/excluir-sabor/:id", async (req, res) => {
    const {id} = req.params

    try {
        const response = await api.post(`/sabor/excluir/${id}`)
        res.json({
            sucesso: true,
            mensagem: 'Sabor excluído com sucesso!'
        })

    } catch (error) {
        res.json({
            sucesso: false,
            mensagem: 'Erro ao excluir sabor!'
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

// Cadastro de outro usuarios

router.post("/usuario/cadastrar", async (req, res) => {
    const {nome, email, senha} = req.body

    const response = await api.post("/usuario/cadastrar", {nome, email, senha})
    const cadastro = response.data

    if (!cadastro) {
        return res.json({
            sucesso: false,
            mensagem: 'Não foi possível realizar o cadastro do usuário!'
        })
    }
    res.json({
        sucesso: true,
        mensagem: `Usuário cadastrado com sucesso`
    })
})

// Deletar usuários

router.post("/excluir-usuario/:id", async (req, res) => {
    const {id} = req.params

    try {
        const usuarioDeletado = await api.post(`/usuario/excluir/${id}`)

        if (!usuarioDeletado) {
            return res.json({
                sucesso: false,
                mensagem: "Nenhum usuário deletado."
            })
        }

        res.json({
            sucesso: true,
            mensagem: `Usuário deletado com sucesso.`
        })

    } catch (error) {
        console.error(`Erro ao deletar usuário: ${error}`)
        res.json({mensagem: 'Erro ao deletar usuário.'})
    }
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

router.post("/concluir-encomenda/:id", async (req, res) => {
    const {id} = req.params

    try {
        const encomendaConcluida = await api.post(`/encomenda/concluir/${id}`)

        res.json({
            sucesso: true,
            mensagem: "Encomenda concluída com sucesso!"
        })
    } catch (error) {
        console.error(`Erro ao cadastrar encomenda: ${error}`)
        res.json({mensagem: 'Erro ao cadastrar encomenda'})
    }
})

module.exports = router