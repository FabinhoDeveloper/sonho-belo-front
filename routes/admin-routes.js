const express = require("express")
const router = express.Router()
const auth_middlewares = require("../middlewares/auth-middlewares")

router.get("/", (req, res) => {
    res.render("login", {
        title: "Sonho Belo - Login"
    })
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "Sonho Belo - Dashboard",
        usuario: req.session.usuario
    })
})

router.get("/cadastro-sabor", (req, res) => {
    res.render("dashboard-cadastro-sabor", {
        title: "Sonho Belo - Cadastro de Sabor",
        usuario: req.session.usuario
    })
})

module.exports = router