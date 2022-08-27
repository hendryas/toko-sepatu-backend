const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('./home/index.ejs', { title: 'Home Page' });
})

const customerRoutes = require('./customer');
const transactionRoutes = require('./transaction');
const productRoutes = require('./product');
const brandRoutes = require('./brand');
const categoryRoutes = require('./category');

route.use('/customers', customerRoutes);
route.use('/transactions', transactionRoutes);
route.use('/products', productRoutes);
route.use('/brands', brandRoutes);
route.use('/categories', categoryRoutes);

module.exports = route;