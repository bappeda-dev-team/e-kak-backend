'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tematik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tematik.hasMany(models.Sub_Tematik, { foreignKey: 'id_tematik', as: 'sub_tematik' });
      Tematik.hasMany(models.Indikator_Tematik, { foreignKey: 'id_tematik', as: 'indikator' });
    }
  }
  Tematik.init({
    tematik: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tematik',
  });
  return Tematik;
};