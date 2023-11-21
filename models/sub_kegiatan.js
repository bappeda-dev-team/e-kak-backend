'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_Kegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sub_Kegiatan.belongsTo(models.Sub_Kegiatan, { foreignKey: 'kode_kegiatan' });
      Sub_Kegiatan.hasMany(models.Indikator, { foreignKey: 'kode_sub_kegiatan' });
    }
  }
  Sub_Kegiatan.init({
    kode_sub_kegiatan: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nama_sub_kegiatan: DataTypes.STRING,
    kode_kegiatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sub_Kegiatan',
  });
  return Sub_Kegiatan;
};