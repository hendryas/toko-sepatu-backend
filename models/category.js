'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.brand, { foreignKey: 'category_Id' });
    }
  }
  category.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Category Tidak Boleh Kosong!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};