const { brand, category } = require('../models');

class BrandController {
    static async getBrands(req, res) {
        try {
            let resultBrand = await brand.findAll({
                order: [
                    ['id', 'desc']
                ],
                include: [category]
            })

            let resultCategory = await category.findAll({
                order: [
                    ['id', 'desc']
                ]
            })

            // res.json(resultBrand);
            res.render('./brand/index.ejs', { title: 'Halaman Brand', dataBrand: resultBrand, dataCategory: resultCategory });
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { name, category_Id } = req.body;
            let resultBrand = await brand.create({
                name: name,
                category_Id: +category_Id
            })
            // res.json(resultBrand);
            res.redirect('/api/brands');
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            let { name, category_Id } = req.body;
            let resultBrand = await brand.update({
                name: name,
                category_Id: +category_Id
            }, {
                where: { id }
            })
            // res.json(resultBrand);
            res.redirect('/api/brands');
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let resultBrand = await brand.destroy({
                where: { id }
            })
            // res.json(resultBrand);
            res.redirect('/api/brands');
        } catch (err) {
            res.json(err);
        }
    }

}

module.exports = BrandController;