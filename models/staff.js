'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Staff.belongsTo(models.Operational, { foreignKey: 'id_operational' });
      Staff.hasMany(models.Indikator_Pohon_Kinerja, { foreignKey: 'id_staff', as: 'indikator' });
    }
  }
  Staff.init({
    staff: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_operational: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};