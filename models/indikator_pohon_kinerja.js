'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Indikator_Pohon_Kinerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Indikator_Pohon_Kinerja.belongsTo(models.Strategic, { foreignKey: 'id_strategic' });
      Indikator_Pohon_Kinerja.belongsTo(models.Tactical, { foreignKey: 'id_tactical' });
      Indikator_Pohon_Kinerja.belongsTo(models.Operational, { foreignKey: 'id_operational' });
    }
  }
  Indikator_Pohon_Kinerja.init({
    indikator: DataTypes.STRING,
    target: DataTypes.STRING,
    satuan: DataTypes.STRING,
    id_strategic: DataTypes.INTEGER,
    id_tactical: DataTypes.INTEGER,
    id_operational: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Indikator_Pohon_Kinerja',
  });
  return Indikator_Pohon_Kinerja;
};