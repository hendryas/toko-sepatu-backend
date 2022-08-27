const { transaction, customer, product } = require('../models');
const convertRupiah = require('rupiah-format')

class TransactionController {
    static async getBrands(req, res) {
        try {
            let resultTransaction = await transaction.findAll({
                order: [
                    ['id', 'desc']
                ], include: [customer]
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
            res.render('./transaction/index.ejs', { title: 'Halaman Transaction', dataTransaction: resultTransaction, dataCustomer: resultCustomer, dataProduct: resultProduct, convertRupiah });
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { product_Id, customer_Id } = req.body;
            let priceNum = 0;
            // let namaProduct = [];
            for (const productId of product_Id) {
                let resultProduct = await product.findOne({
                    where: {
                        id: +productId
                    }
                })
                // namaProduct.push(resultProduct.name);
                priceNum += resultProduct.price;
            }

            for (const productId of product_Id) {
                let resultTransactionCreate = await transaction.create({
                    product_Id: +productId,
                    totalPrice: priceNum,
                    customer_Id: +customer_Id
                })
            }
            // namaProduct.forEach(p => {
            //     console.log(p)
            // })
            // console.log(namaProduct);
            // console.log(priceNum);

            res.redirect('/api/transactions');
            // console.log(customer_Id);
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