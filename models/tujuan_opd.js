'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tujuan_OPD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tujuan_OPD.belongsTo(models.Sub_Unit, { foreignKey: 'kode_sub_unit' });
    }
  }
  Tujuan_OPD.init({
    tujuan_opd: DataTypes.STRING,
    indikator: DataTypes.STRING,
    rumus_perhitungan: DataTypes.STRING,
    tahun: DataTypes.JSON,
    kode_opd: DataTypes.STRING,
    kode_sub_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tujuan_OPD',
  });
  return Tujuan_OPD;
};