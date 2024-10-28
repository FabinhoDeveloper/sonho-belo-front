const express = require("express")
const router = express.Router()
const auth_middlewares = require("../middlewares/auth-middlewares")

router.get("/", (req, res) => {
    res.render("login", {
        title: "Sonho Belo - Login"
    })
})

router.get("/dashboard", auth_middlewares.verificaLoginAdministrador, (req, res) => {
    res.render("dashboard", {
        title: "Sonho Belo - Dashboard",
        usuario: req.session.usuario
    })
})

module.exports = router