const brandRoute = require('express').Router();
const { BrandController } = require('../controllers');

brandRoute.get('/', BrandController.getBrands);
brandRoute.post('/add', BrandController.add);
brandRoute.post('/edit/:id', BrandController.edit);
brandRoute.get('/delete/:id', BrandController.delete);

module.exports = brandRoute;