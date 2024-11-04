const express = require("express")
const router = express.Router()
const auth_middlewares = require("../middlewares/auth-middlewares")
const api = require("../config/axiosConfig")



// Paginas relacionadas a sabor

router.get("/sabores", async (req, res) => {
    const response = await api.get("/sabor/obter")
    const sabores = response.data.sabores

    res.render("dashboard-sabores", {
        title: "Dashboard - Sabores",
        usuario: req.session.usuario,
        sabores
    })
})

router.get("/cadastro-sabor", (req, res) => {
    res.render("dashboard-cadastro-sabor", {
        title: "Dashboard - Cadastro de Sabor",
        usuario: req.session.usuario
    })
})

router.get("/editar-sabor/:id", async (req, res) => {
    const {id} = req.params

    const response = await api.get(`/sabor/obter/${id}`)
    const sabor = response.data.sabor

    res.render("dashboard-editar-sabor", {
        title: "Dashboard - Editar Sabor",
        usuario: req.session.usuario,
        sabor
    })
})

// Paginas relacionadas a encomenda

router.get("/encomendas", async (req, res) => {
    const response = await api.get("/encomenda/obter")
    const encomendas = response.data

    const encomendasNaoConcluidas = encomendas.filter(encomenda => encomenda.concluida === false)

    res.render("dashboard-encomendas", {
        title: "Dashboard - Encomendas",
        usuario: req.session.usuario,
        encomendas: encomendasNaoConcluidas,
    })
})

// Paginas relacionadas a usuario

router.get("/primeiro-cadastro", (req, res) => {
    res.render("dashboard-primeiro-cadastro")
})

router.get("/usuarios", async (req, res) => {
    const response = await api.get("/usuario/obter")
    const usuarios = response.data.lista_usuarios

    res.render("dashboard-usuarios", {
        title: 'Dashboard - Usuários',
        usuario: req.session.usuario,
        usuarios
    })  
})

router.get("/cadastro-usuario", (req, res) => {
    res.render("dashboard-cadastro-usuario", {
        title: 'Dashboard - Cadastrar Usuário',
        usuario: req.session.usuario
    })
})

module.exports = router