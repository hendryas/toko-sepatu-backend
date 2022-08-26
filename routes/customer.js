const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');

customerRoute.get('/', CustomerController.getCustomers);
customerRoute.post('/add', CustomerController.add);
customerRoute.post('/edit/:id', CustomerController.edit);
customerRoute.get('/delete/:id', CustomerController.delete);

module.exports = customerRoute;