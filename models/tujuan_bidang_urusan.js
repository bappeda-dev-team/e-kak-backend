'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tujuan_Bidang_Urusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tujuan_Bidang_Urusan.init({
    kode_bidang_urusan: DataTypes.STRING,
    id_tujuan_opd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tujuan_Bidang_Urusan',
  });
  return Tujuan_Bidang_Urusan;
};