const productRoute = require('express').Router();
const { ProductController } = require('../controllers');

const multer = require('multer')
// const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './assets/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // Format penamaan image / file
    }
})

// const fileFilter = (req, file, callback) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
//         callback(null, true);
//     } else {
//         callback(null, false);
//     }
// }

const upload = multer({ storage: storage });

productRoute.get('/', ProductController.getProducts);
productRoute.post('/add', upload.single('image'), ProductController.add);
productRoute.post('/edit/:id', upload.single('image'), ProductController.edit);
productRoute.get('/delete/:id', ProductController.delete);

module.exports = productRoute;