'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Indikator_Tematik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Indikator_Tematik.belongsTo(models.Tematik, { foreignKey: 'id_tematik' });
      Indikator_Tematik.belongsTo(models.Sub_Tematik, { foreignKey: 'id_sub_tematik' });
    }
  }
  Indikator_Tematik.init({
    indikator: DataTypes.STRING,
    target: DataTypes.STRING,
    satuan: DataTypes.STRING,
    tahun: DataTypes.STRING,
    id_tematik: DataTypes.INTEGER,
    id_sub_tematik: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Indikator_Tematik',
  });
  return Indikator_Tematik;
};