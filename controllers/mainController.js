const path = require('path');
const products = require("../public/js/listadoCompras")
const mainController = {

    index: (req, res) => {
        res.render('index')
    },
    register: (req, res) => {
        res.render('register')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    login: (req, res) => {
        res.render('login')
    }

}

module.exports = mainController