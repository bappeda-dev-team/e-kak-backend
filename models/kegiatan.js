'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kegiatan.belongsTo(models.Program, { foreignKey: 'kode_program' });
      Kegiatan.hasMany(models.Sub_Kegiatan, { foreignKey: 'kode_kegiatan' });
      Kegiatan.hasMany(models.Indikator, { foreignKey: 'kode_kegiatan' });
    }
  }
  Kegiatan.init({
    kode_kegiatan: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nama_kegiatan: DataTypes.STRING(1234),
    kode_program: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kegiatan',
  });
  return Kegiatan;
};