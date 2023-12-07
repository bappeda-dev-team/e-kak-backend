'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operational extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Operational.belongsTo(models.Tactical, { foreignKey: 'id_tactical' });
      Operational.hasMany(models.Staff, { foreignKey: 'id_operational', as: 'staff' });
      Operational.hasMany(models.Indikator_Pohon_Kinerja, { foreignKey: 'id_operational', as: 'indikator' });
    }
  }
  Operational.init({
    operational: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_tactical: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operational',
  });
  return Operational;
};