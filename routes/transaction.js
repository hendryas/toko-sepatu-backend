const transactionRoute = require('express').Router();
const { TransactionController } = require('../controllers');

transactionRoute.get('/', TransactionController.getBrands);
transactionRoute.post('/add', TransactionController.add);
transactionRoute.post('/edit/:id', TransactionController.edit);
transactionRoute.get('/delete/:id', TransactionController.delete);

module.exports = transactionRoute;