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


module.exports = router