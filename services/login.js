// Módulo que fará o login e gestão de sessoes com o Back-End

// Array teste simulando os usuarios
const express = require("express")
const router = express.Router()

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Erro ao encerrar a sessão!');
        }
        res.redirect('/admin'); 
    });
});

router.post('/autenticacao', (req, res) => {
    const {email, senha} = req.body

    console.log('Dados recebidos:', { email, senha });

    for (let i = 0; i <= usuarios.length; i++) {
        if (email == usuarios[i].email) {
            if (senha == usuarios[i].senha) {
                req.session.usuario = usuarios[i]
                res.redirect('/admin/dashboard')
            }
        }
    }
})

module.exports = router