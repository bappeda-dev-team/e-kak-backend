'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Indikator_Pokin_Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Indikator_Pokin_Kota.belongsTo(models.Strategic_Kota, { foreignKey: 'id_strategic' });
      Indikator_Pokin_Kota.belongsTo(models.Tactical_Kota, { foreignKey: 'id_tactical' });
      Indikator_Pokin_Kota.belongsTo(models.Operational_Kota, { foreignKey: 'id_operational' });
      Indikator_Pokin_Kota.belongsTo(models.Staff_Kota, { foreignKey: 'id_staff' });
    }
  }
  Indikator_Pokin_Kota.init({
    indikator: DataTypes.STRING,
    target: DataTypes.STRING,
    satuan: DataTypes.STRING,
    id_strategic: DataTypes.INTEGER,
    id_tactical: DataTypes.INTEGER,
    id_operational: DataTypes.INTEGER,
    id_staff: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Indikator_Pokin_Kota',
  });
  return Indikator_Pokin_Kota;
};