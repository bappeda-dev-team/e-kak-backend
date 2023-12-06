'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tactical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tactical.belongsTo(models.Strategic, { foreignKey: 'id_strategic' });
      Tactical.hasMany(models.Operational, { foreignKey: 'id_tactical', as: 'operational' });
      Tactical.hasMany(models.Indikator_Pohon_Kinerja, { foreignKey: 'id_tactical', as: 'indikator' });
    }
  }
  Tactical.init({
    tactical: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_strategic: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tactical',
  });
  return Tactical;
};