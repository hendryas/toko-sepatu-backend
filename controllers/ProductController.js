const { product, brand, category } = require('../models');
const convertRupiah = require('rupiah-format')
const fs = require('fs');
const path = require('path');

class ProductController {
    static async getProducts(req, res) {
        try {
            let resultProduct = await product.findAll({
                order: [
                    ['id', 'desc']
                ],
                include: [brand]
            })

            let resultBrand = await brand.findAll({
                order: [
                    ['id', 'desc']
                ], include: [category]
            })

            // res.json(resultProduct);
            res.render('./product/index.ejs', { title: 'Halaman Product', dataProduct: resultProduct, dataBrand: resultBrand, convertRupiah });
        } catch (err) {
            res.json(err);
        }
    }

    static async add(req, res) {
        try {
            let { name, description, brand_Id, image, size, price, stock } = req.body;

            let resultProduct = await product.create({
                name: name,
                description: description,
                brand_Id: +brand_Id,
                image: image,
                size: +size,
                price: +price,
                stock: +stock
            })
            // res.json(resultProduct);
            res.redirect('/api/products');
        } catch (err) {
            res.json(err);
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            let { name, description, brand_Id, image, size, price, stock } = req.body;

            // let resultProductById = await product.findOne({
            //     where: { id }
            // });
            // console.log(resultProductById);
            // let pathImage = resultProductById.image;
            // let filePath = path.join(__dirname, '../', pathImage);
            // fs.unlink(filePath, err => console.log(err));

            let resultProduct = await product.update({
                name: name,
                description: description,
                brand_Id: +brand_Id,
                image: image,
                size: +size,
                price: +price,
                stock: +stock
            }, {
                where: { id }
            })
            // res.json(resultProduct);
            res.redirect('/api/products');
        } catch (err) {
            res.json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            // let resultProductById = await product.findOne({
            //     where: { id }
            // });
            // let pathImage = resultProductById.image;
            // console.log('dir name:', __dirname);
            // console.log('filePath', path);
            // let filePath = path.join(__dirname, '../', pathImage);
            // console.log(filePath);
            // fs.unlink(filePath, err => console.log(err));
            // console.log(resultProductById.image)
            // console.log(id);
            let resultProduct = await product.destroy({
                where: { id }
            })
            // res.json(resultProductById);
            res.redirect('/api/products');
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = ProductController;