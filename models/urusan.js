'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Urusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Urusan.hasMany(models.Bidang_Urusan, { foreignKey: 'kode_urusan' });
    }
  }
  Urusan.init({
    kode_urusan: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nama_urusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Urusan',
  });
  return Urusan;
};