'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category, { foreignKey: 'category_Id' });
      this.hasMany(models.product, { foreignKey: 'brand_Id' });
    }
  }
  brand.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Brand Tidak Boleh Kosong!"
        }
      }
    },
    category_Id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Kategori harus dipilih!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'brand',
  });
  return brand;
};