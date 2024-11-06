const express = require("express")
const router = express.Router()
const api = require("../config/axiosConfig")
const auth_middlewares = require("../middlewares/auth-middlewares")

router.get("/", async (req, res) => {
    const response = await api.get("/sabor/obter")
    const sabores = response.data.sabores

    res.render("home", {
        title: "Sonho Belo - Brigadeiros Gourmet",
        sabores_section: sabores.slice(0, 3),
        opcoes_formulario: sabores
    })
})

router.get("/sabores", async (req, res) => {
    const response = await api.get("/sabor/obter")
    const sabores = response.data.sabores

    res.render("sabores", {
        title: 'Sonho Belo - Sabores',
        sabores: sabores
    })
})

router.get("/admin", async (req, res) => {
    const numeroUsuarios = await api.get("/usuario/obter-numero")
    const primeiroLogin = Boolean(!numeroUsuarios.data.lista_usuarios)

    res.render("login", {
        title: "Sonho Belo - Login",
        primeiroLogin
    })
})

router.get("/primeiro-cadastro", auth_middlewares.verificaPrimeiroLogin, (req, res) => {
    res.render("dashboard-primeiro-cadastro")
})

module.exports = router
