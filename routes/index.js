const route = require('express').Router();

route.get('/api', (req, res) => {
    res.render('./home/index.ejs', { title: 'Home Page' });
})

const customerRoutes = require('./customer');
const transactionRoutes = require('./transaction');
const productRoutes = require('./product');
const brandRoutes = require('./brand');
const categoryRoutes = require('./category');

route.use('/api/customers', customerRoutes);
route.use('/api/transactions', transactionRoutes);
route.use('/api/products', productRoutes);
route.use('/api/brands', brandRoutes);
route.use('/api/categories', categoryRoutes);

module.exports = route;