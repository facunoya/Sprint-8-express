const express = require('express');
const path = require('path')
const fs = require('fs');
const userControllers = require('../controllers/userControllers');
const router = express.Router()
const methodOverride = require('method-override')
const { body } = require('express-validator')
const multer = require('multer')
const guestMiddleware = require('../middlewares/guestMiddleware')/*session*/
const authMiddleware = require('../middlewares/authMiddleware')/*session*/
const userCreateValidation = [
    body('name').notEmpty().isLength({ min: 2 }).withMessage('Por favor ingrese un nombre con al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Por favor ingrese un correo válido'),
    body('password').notEmpty().isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
]
const usersStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let img = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, img)
    }
});

let userFileUpload = multer({ storage: usersStorage });

router.use(express.urlencoded({ extended: true }))
router.use(express.json())
router.use(methodOverride('_method'))

router.get('/register', userFileUpload.single('avatar'), guestMiddleware, userControllers.getRegister)
router.post('/register', userFileUpload.single('avatar'), userCreateValidation, userControllers.register)
router.get('/edit/:id', userControllers.getEdit)
router.put('/edit/:id', userControllers.edit)
router.get('/delete/:id', userControllers.getDelete)
router.delete('/delete/:id', userControllers.delete)
router.get('/login', userControllers.getLogin)
router.post('/login', userControllers.login)
router.get('/home', authMiddleware, userControllers.getHome)
// router.post('/home', userControllers.logout)
router.get('/logout', userControllers.logout)
router.get('/check', (req, res) => {    /*Prueba de session */
    if (req.session.usuarioLogueado == undefined) {
        res.send('No estas logueado')
    } else {
        res.send('Ya estas logueado')
    }
})
router.get('/allusers', userControllers.allUsers)
router.get('/soldProducts', userControllers.soldProducts)
router.get('/comprar', userControllers.compra)
router.get('/totalventas', userControllers.totalVentas)


module.exports = router