// Módulo que fará o login e gestão de sessoes com o Back-End

// Array teste simulando os usuarios
const express = require("express")
const router = express.Router()
const api = require("../config/axiosConfig")

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Erro ao encerrar a sessão!');
        }
        res.redirect('/admin'); 
    });
});

router.post('/', async (req, res) => {
    const {email, senha} = req.body

    try {
        const response = await api.post("/usuario/login", {email, senha})
        const response_json = response.data

        if (response_json.autorizado) {
            req.session.usuario = response_json.usuario
            res.json(response_json)

        } else {
            res.status(401).json({ autorizado: false, mensagem: 'Credenciais incorretas' });        
        }
    } catch (error) {
        console.log(error)
        res.redirect("/admin");
    }
})

module.exports = router