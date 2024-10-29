// Modulo que se comunicará com o back-end

const express = require("express")
const multer = require("multer")
const router = express.Router()
const storage = require("../config/multerConfig")
const api = require("../config/axiosConfig")

const upload = multer({storage})

// Cadastro de sabores no banco de dados

router.post("/cadastro-sabor", upload.single("file"), async (req, res) => {
    const {nome, descricao} = req.body
    const imagemUrl = req.file.path
    
    try {
        const saborCadastrado = await api.post("/sabor/cadastrar", {nome, descricao, imagemUrl})
        
        if (!saborCadastrado) {
            return res.json({
                sucesso: false,
                mensagem: 'Não foi possível realizar o cadastro do sabor!'
            })
        }

        res.json({
            sucesso: true,
            mensagem: `Sabor "${nome}" cadastrado com sucesso`
        })
        
    } catch (error) {
        res.json({
            sucesso: false,
            mensagem: 'Erro ao cadastrar sabor!'
        })
    }

})

module.exports = router