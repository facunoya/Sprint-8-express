const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const productsFilePath = path.join(__dirname, '../data/productCart.json'); /*ESTE*/
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
let archivoJSON = fs.readFileSync(path.join(__dirname, '../data/productCart.json'), { encoding: 'utf-8' });
let producto = JSON.parse(archivoJSON);
const Product = db.Products;
const Destination = db.Destinations;
const Vehicle = db.Vehicles;

const productControllers = {
    product: (req, res) => {/*Sigue */
        db.Products.findAll({ include: [{ association: "Vehicles" }, { association: "Destinations" }] })
            .then((productos) => {
                return res.render('./producto/detalleProducto', { "producto": productos, "data": req.session })
            })


    },

    findProduct: async (req, res) => {
        let product = await db.Products.findByPk(req.params.id, { include: [{ association: "Vehicles" }, { association: "Destinations" }] })
        return res.json(product)
    },
    create: (req, res) => { /*Sigue */
        if (req.file) { /*<--- este if es para que recargue la pagina si no carga una imagen*/
            let newProductCart = {
                imgURL: req.file.filename,
                destination_id: req.body.destination_id,
                descripcionImagen: req.body.descripcionImagen,
                staying: req.body.staying,
                price: req.body.price,
                offer: req.body.offer,
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
                hospedaje: req.body.hospedaje,
                lodging: req.body.lodging,
                vehicle_id: req.body.vehicle_id,
                tour: req.body.tour,
                tour2: req.body.tour2,
                creationDate: req.body.creationDate,
                dueDate: req.body.dueDate
            }
            db.Products.create(newProductCart)
            res.send(newProductCart)
        }
    },
    edit: (req, res) => {/*cambiar, para que busque en la base de datos */
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct)
        res.render('./producto/editarProducto', { "producto": modifyProduct })
    },
    editSave: (req, res) => {/*cambiar, para que guarde los cambios en la base de datos */
        let id = req.body.id;
        let product = products
        let editProduct = {
            id: req.body.id,
            imgURL: req.body.imgURL,
            destination_id: req.body.destination_id,
            staying: req.body.staying,
            price: req.body.price,
            offer: req.body.offer,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut,
            lodging: req.body.lodging,
            vehicle_id: req.body.vehicle_id,
            tour: req.body.tour,
            tour2: req.body.tour2
        }
        let newProduct = product.map(product => {
            if (product.id == id) {
                product = { ...editProduct }
                return product
            }
            return product
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct))
        res.redirect("/detalleProducto")
    },
    delete: (req, res) => {/*cambiar, para que busque en la base de datos */
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct)
        res.render('./producto/deleteProduct', { "producto": modifyProduct })
    },
    deleteSave: (req, res) => {/*cambiar, para que elimine el producto de la base de datos */
        let id = req.body.id;
        let product = products
        res.redirect("/detalleProducto")
        let productToDelete = product.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete))
        res.redirect("/detalleProducto")
    },
    getCreate: (req, res) => {/*Sigue */
        return res.render('./producto/agregarProducto');
    },
    getProducts: (req, res) => {/*Sigue */
        db.Products.findAll({
            include: [{ association: "Vehicles" }, { association: "Destinations" }]
        })
            .then((productos) => {
                res.json(productos)
            })
    },
    getVehicles: (req, res) => {/*Sigue */
        db.Vehicles.findAll()
            .then((vehicle) => {
                res.send(vehicle)
            })
    },
    getDestinations: (req, res) => {/*Sigue */
        db.Destinations.findAll()
            .then((destination) => {
                res.send(destination)
            })
    }
}

module.exports = productControllers;
