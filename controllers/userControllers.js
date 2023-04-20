const fs = require('fs')
const path = require('path')
const user = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/user.json'), 'utf-8'))
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const db = require('../database/models')
const userproducts = db.userproducts

const UsersControllers = {
    getRegister: (req, res) => {/* sigue*/
        res.render('register')
    },
    register: async (req, res) => {/* sigue */
        let errors = validationResult(req)//requiero el error de las validaciones que cree en routes
        let userDB = await
            db.Users.findAll()
                .then((usuario) => {
                    return usuario;
                });
        let isMatch = userDB.filter(x => x.email == req.body.email)
        console.log(isMatch)
        if (errors.isEmpty()) {
            if (isMatch != "") {
                res.render('register', { "mensaje": "Ese correo ya se encuentra registrado, por favor ingrese otro", "old": req.body })
            } else {
                let newUser = {
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10)
                }
                db.Users.create(newUser)
                res.redirect('./login')
            }
        } else {
            res.render('register', { "errors": errors.array(), "old": req.body })
            console.log(errors.array())
        }
    },
    getEdit: (req, res) => {/*modificar, para que busque los usuarios en la base de datos */
        let id = req.params.id
        let userToEdit = user.filter(x => x.id == id)
        res.render('editUser', { "user": userToEdit })
    },
    edit: (req, res) => {/*modificar, para que guarde los cambios en la base de datos */
        let modifyUser = user.map(x => {
            if (x.email == req.body.email) {
                x = {
                    id: x.id,
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10)
                }
                return x
            } return x
        })
        fs.writeFileSync(path.join(__dirname, '../data/user.json'), JSON.stringify(modifyUser, null, " "))
        res.send('Usuario modificado con éxito!')
    },
    getDelete: (req, res) => {/*modificar, para que busque los usuarios en la base de datos */
        id = req.params.id
        let userExports = user.filter(usuario => usuario.id == id)
        res.render('deleteUser', { "user": userExports })
    },
    delete: (req, res) => {/*modificar, para que elimene el usuario de la base de datos */
        let userMail = req.body.email //necesita validación para ser eficiente
        let newUsers = user.filter(x => x.email != userMail)
        fs.writeFileSync(path.join(__dirname, '../data/user.json'), JSON.stringify(newUsers, null, " "))
        console.log(newUsers)
        res.send('Usuario ' + userMail + ' eliminado con éxito')
    },
    getLogin: (req, res) => {/*Sigue */
        res.render('login')
    },
    login: async (req, res) => {/*Sigue*/ /*le faltaría cookie OPCIONAL */
        const allUsers = await
            db.Users.findAll()
                .then((usuario) => {
                    return usuario;
                });
        const userLog = allUsers.filter(x => x.email == req.body.email)

        if (userLog.length < 1) {

            res.render('./login', { "mensaje": "No esta registrado", "old": req.body })
        } else {
            let isMatch = bcryptjs.compareSync(req.body.password, userLog[0].password)
            // console.log("usuario que paso:", userLog[0])
            if (isMatch) {
                let userIsLoged = userLog[0]
                req.session.usuarioLogueado = userIsLoged/*session*/
                res.redirect('home')
                // console.log('te logueaste')
                // res.send(userIsLoged)
            } else {
                res.render('./login', { "mensaje": "Contraseña incorrecta", "old": req.body })

            }
        }
    },
    // profile: (req, res) => {
    //     res.render('profile',{user: req.session.usuarioLogueado})
    //     console.log('Estamos en profile');
    //     console.log(req.session);
    // },
    getHome: (req, res) => {/*Sigue */
        console.log(req.session)
        res.render('home', { user: req.session.usuarioLogueado })

    },
    allUsers: (req, res) => {/*Sigue */
        db.Users.findAll()
            .then((usuario) => {
                res.send(usuario);
            })
    },
    soldProducts: (req, res) => {/*Sigue */
        db.Userproducts.findAll()
            .then((usuarioproducto) => {
                res.send(usuarioproducto);
            })
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = UsersControllers

