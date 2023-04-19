const estalogueado = (req, res, next) => {
    //requerir el usu
    if (req.session.usuarioLogueado != undefined) { 

        next()
    } else {
        res.send('Esta página es solo para usuarios logueados')
    }
}
module.exports = estalogueado