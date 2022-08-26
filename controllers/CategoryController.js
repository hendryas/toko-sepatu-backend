const { category } = require('../models');

class CategoryController {
    static async getCategories(req, res) {
        let resultCategory = await category.findAll({
            order: [
                ['id', 'desc']
            ]
        });
        // res.json(resultCategory);
        res.render('./category/index.ejs', { title: 'Halaman Category', dataCategory: resultCategory });
    }

    static async add(req, res) {
        try {
            let { name } = req.body;
            let resultCategory = await category.create({
                name
            })
            // res.json(resultCategory);
            res.redirect('/api/categories');
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            let { name } = req.body;
            let resultCategory = await category.update({
                name
            }, {
                where: { id }
            })
            // res.json(resultCategory);
            res.redirect('/api/categories');
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let resultCategory = await category.destroy({
                where: { id }
            })
            // res.json(resultCategory);
            res.redirect('/api/categories');
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = CategoryController;