'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Indikator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Indikator.belongsTo(models.Program, { foreignKey: 'kode_program' });
      Indikator.belongsTo(models.Kegiatan, { foreignKey: 'kode_kegiatan' });
      Indikator.belongsTo(models.Sub_Kegiatan, { foreignKey: 'kode_sub_kegiatan' });
    }
  }
  Indikator.init({
    indikator: DataTypes.STRING,
    target: DataTypes.STRING,
    satuan: DataTypes.STRING,
    pagu_anggaran: DataTypes.STRING,
    kode_program: DataTypes.STRING,
    kode_kegiatan: DataTypes.STRING,
    kode_sub_kegiatan: DataTypes.STRING,
    keterangan: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Indikator',
  });
  return Indikator;
};