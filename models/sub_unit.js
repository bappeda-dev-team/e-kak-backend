'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sub_Unit.belongsTo(models.Perangkat_Daerah, { foreignKey: 'kode_opd' });
      Sub_Unit.hasMany(models.User, { foreignKey: 'kode_sub_unit' });
      Sub_Unit.hasMany(models.Program, { foreignKey: 'kode_sub_unit' });
      Sub_Unit.hasMany(models.Tujuan_OPD, { foreignKey: 'kode_sub_unit' });
    }
  }
  Sub_Unit.init({
    kode_sub_unit: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nama_sub_unit: DataTypes.STRING,
    kode_opd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sub_Unit',
  });
  return Sub_Unit;
};