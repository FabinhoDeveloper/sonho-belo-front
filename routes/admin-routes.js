const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.render("login", {
        title: "Sonho Belo - Login"
    })
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "Sonho Belo - Dashboard"
    })
})

module.exports = router