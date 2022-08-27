'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaction, { foreignKey: 'customer_Id' });
    }
  }
  customer.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Nama Customer Tidak Boleh Kosong!"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Inputan Phone Customer Tidak Boleh Kosong!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};