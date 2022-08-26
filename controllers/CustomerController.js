const { customer } = require('../models');

class CustomerController {
    static async getCustomers(req, res) {
        try {
            let resultCustomer = await customer.findAll({
                order: [
                    ['id', 'desc']
                ]
            })

            // res.json(resultCustomer);
            res.render('customer/index.ejs', { title: 'Halaman Customer', dataCustomer: resultCustomer });
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { name, phone } = req.body;
            let resultCustomer = await customer.create({
                name, phone
            })
            // res.json(resultCustomer);
            res.redirect('/api/customers');
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            let { name, phone } = req.body;

            let resultCustomer = await customer.update({
                name, phone
            }, {
                where: { id }
            })

            // res.json(resultCustomer);
            res.redirect('/api/customers');
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let resultCustomer = await customer.destroy({
                where: { id }
            })
            // res.json(resultCustomer);
            res.redirect('/api/customers');
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = CustomerController;