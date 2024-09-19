const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("home", {
        title: "Sonho Belo - Brigadeiros Gourmet"
    })
})

module.exports = router