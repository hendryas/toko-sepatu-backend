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
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    brand_Id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    size: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};