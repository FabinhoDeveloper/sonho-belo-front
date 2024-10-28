// Módulo que irá verificar se o administrador está logado

function verificaLoginAdministrador(req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/?error=Não autorizado!');
    }
}

module.exports = {verificaLoginAdministrador}
