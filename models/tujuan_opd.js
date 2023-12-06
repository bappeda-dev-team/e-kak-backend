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
      Tujuan_OPD.hasMany(models.Indikator_Tujuan_OPD, { foreignKey: 'id_tujuan_opd', as: 'indikator_tujuan' });
      Tujuan_OPD.hasMany(models.Strategic, { foreignKey: 'id_tujuan_opd', as: 'strategic' });
      Tujuan_OPD.belongsToMany(models.Bidang_Urusan, {
        through: models.Tujuan_Bidang_Urusan,
        foreignKey: 'id_tujuan_opd',
        otherKey: 'kode_bidang_urusan',
        as: 'bidang_urusan'
      })
    }
  }
  Tujuan_OPD.init({
    tujuan: DataTypes.STRING,
    kode_sub_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tujuan_OPD',
  });
  return Tujuan_OPD;
};