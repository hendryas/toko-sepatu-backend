const { transaction, customer, product } = require('../models');

class TransactionController {
    static async getBrands(req, res) {
        try {
            let resultTransaction = await transaction.findAll({
                order: [
                    ['id', 'desc']
                ]
            })
            let resultCustomer = await customer.findAll({
                order: [
                    ['id', 'desc']
                ]
            })
            let resultProduct = await product.findAll({
                order: [
                    ['id', 'desc']
                ]
            })
            // res.json(resultTransaction);
            res.render('./transaction/index.ejs', { title: 'Halaman Transaction', dataTransaction: resultTransaction, dataCustomer: resultCustomer, dataProduct: resultProduct });
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { product_Id, customer_Id } = req.body;
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {

        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let resultTransaction = await transaction.destroy({
                where: { id }
            })
            res.json(resultTransaction);
            // res.redirect('/api/transactions');
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = TransactionController;