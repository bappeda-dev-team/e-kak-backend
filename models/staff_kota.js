'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff_Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Staff_Kota.belongsTo(models.Operational_Kota, { foreignKey: 'id_operational_kota' });
      Staff_Kota.hasMany(models.Indikator_Pokin_Kota, { foreignKey: 'id_staff', as: 'indikator' });
    }
  }
  Staff_Kota.init({
    staff: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_operational_kota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Staff_Kota',
  });
  return Staff_Kota;
};