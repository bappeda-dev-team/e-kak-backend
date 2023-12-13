'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operational_Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Operational_Kota.belongsTo(models.Tactical_Kota, { foreignKey: 'id_tactical_kota' });
      Operational_Kota.hasMany(models.Staff_Kota, { foreignKey: 'id_operational_kota', as: 'staff' });
      Operational_Kota.hasMany(models.Indikator_Pokin_Kota, { foreignKey: 'id_operational', as: 'indikator' });
    }
  }
  Operational_Kota.init({
    operational: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_tactical_kota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operational_Kota',
  });
  return Operational_Kota;
};