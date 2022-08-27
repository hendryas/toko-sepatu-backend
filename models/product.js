'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.brand, { foreignKey: 'brand_Id' });
    }
  }
  product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Produk Tidak Boleh Kosong!"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Deskripsi Produk Tidak Boleh Kosong!"
        }
      }
    },
    brand_Id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Nama Brand harus dipilih!"
        }
      }
    },
    image: DataTypes.STRING,
    size: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Inputan ukuran sepatu harus diisi!"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Inputan harga sepatu harus diisi!"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Inputan stock sepatu harus diisi!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};