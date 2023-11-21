'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bidang_Urusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bidang_Urusan.belongsTo(models.Urusan, { foreignKey: 'kode_urusan' });
      Bidang_Urusan.hasMany(models.Program, { foreignKey: 'kode_bidang_urusan' });
    }
  }
  Bidang_Urusan.init({
    kode_bidang_urusan: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nama_bidang_urusan: DataTypes.STRING,
    kode_urusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bidang_Urusan',
  });
  return Bidang_Urusan;
};