const authMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado != undefined) {

        next()
    } else {
        // res.send('Esta página es solo para usuarios logueados')
        res.render('login', { "mensaje": "Aun no has iniciado sesión"})
    }
}
module.exports = authMiddleware
