const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController');
const productControllers = require('../controllers/productControllers')
const carritoControllers = require('../controllers/mainControllers')
const methodOverride = require('method-override');


const guestMiddleware = require('../middlewares/guestMiddleware')/*session*/
const authMiddleware = require('../middlewares/authMiddleware')/*session*/

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let imgURL = 'img-' + Date.now() + path.extname(file.originalname);//nose porque no me guarda el nombre bien
        callback(null, imgURL)
    }
});
let fileUpload = multer({ storage: storage });

let obje = {
    name: "10",
    imagen: 'hola'
}
router.use(methodOverride('_method'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.get('/', mainController.index)
router.get('/apiReact', (req, res) => {
    res.send(obje)
})



router.get('/pruebacarrito', (req, res) => {
    res.render('carroUsuario', { "data": req.session })
})





router.get("/crearProducto", fileUpload.single('imgURL'), productControllers.getCreate);
router.post("/crearProducto", fileUpload.single('imgURL'), productControllers.create)/*configurado con multer */
router.get('/productDetail', fileUpload.single('imgURL'), productControllers.product)
router.get("/vistaProducto", fileUpload.single('imgURL'), productControllers.product);
router.get("/:id/edit", carritoControllers.edit);
router.get("/:id/editProduct", productControllers.edit);
router.get("/productCart", fileUpload.single('imgURL'), carritoControllers.productCart);
router.put("/:id/edit", carritoControllers.editSave);
router.put("/:id/editProduct", productControllers.editSave);
router.get("/:id/delete", fileUpload.single('imgURL'), carritoControllers.delete)
router.delete("/:id/delete", fileUpload.single('imgURL'), carritoControllers.deleteSave)
router.get("/:id/deleteProduct", fileUpload.single('imgURL'), productControllers.delete)
router.delete("/:id/deleteProduct", fileUpload.single('imgURL'), productControllers.deleteSave)
router.get('/mostrarproductos', productControllers.getProducts)
router.get('/mostrarvehiculos', productControllers.getVehicles)
router.get('/mostrardestinos', productControllers.getDestinations)
module.exports = router