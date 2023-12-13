'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tactical_Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tactical_Kota.hasMany(models.Operational_Kota, { foreignKey: 'id_tactical_kota', as: 'operational' });
      Tactical_Kota.hasMany(models.Indikator_Pokin_Kota, { foreignKey: 'id_tactical', as: 'indikator' });
    }
  }
  Tactical_Kota.init({
    tactical: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_strategic_kota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tactical_Kota',
  });
  return Tactical_Kota;
};