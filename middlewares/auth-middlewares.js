// Módulo que irá verificar se o administrador está logado
const api = require("../config/axiosConfig")

function verificaLoginAdministrador(req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/?error=Não autorizado!');
    }
}

async function verificaPrimeiroLogin(req, res, next) {
    const numeroUsuarios = await api.get("/usuario/obter-numero")
    const primeiroLogin = Boolean(numeroUsuarios.data.lista_usuarios)

    if (!primeiroLogin) {
        next();
    } else {
        res.redirect('/admin')
    }
}

module.exports = {verificaLoginAdministrador, verificaPrimeiroLogin}
