const express = require("express")
const router = express.Router()
const auth_middlewares = require("../middlewares/auth-middlewares")
const api = require("../config/axiosConfig")

router.get("/", async (req, res) => {
    const numeroUsuarios = await api.get("/usuario/obter-numero")
    const primeiroLogin = Boolean(!numeroUsuarios.data.lista_usuarios)

    res.render("login", {
        title: "Sonho Belo - Login",
        primeiroLogin
    })
})

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

router.get("/editar-sabor")

// Paginas relacionadas a encomenda

router.get("/encomendas", async (req, res) => {
    const response = await api.get("/encomenda/obter")
    const encomendas = response.data

    console.log(encomendas)

    encomendas.forEach(encomenda => {
        console.log(encomenda.sabores.nome)
    });

    res.render("dashboard-encomendas", {
        title: "Sonho Belo - Encomendas",
        usuario: req.session.usuario,
        encomendas,
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
        usuarios
    })
})

router.get("/cadastro-usuario", (req, res) => {
    res.render("dashboard-cadastro-usuario")
})

router.get("/editar-usuario")

module.exports = router