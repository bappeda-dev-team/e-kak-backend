'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Indikator_Tujuan_OPD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Indikator_Tujuan_OPD.belongsTo(models.Tujuan_OPD, { foreignKey: 'id_tujuan_opd' });
    }
  }
  Indikator_Tujuan_OPD.init({
    indikator: DataTypes.STRING,
    rumus_perhitungan: DataTypes.STRING,
    sumber_data: DataTypes.STRING,
    tahun: DataTypes.JSON(10000),
    id_tujuan_opd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Indikator_Tujuan_OPD',
  });
  return Indikator_Tujuan_OPD;
};