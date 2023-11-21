'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Program.belongsTo(models.Sub_Unit, { foreignKey: 'kode_sub_unit' });
      // Program.belongsTo(models.)
      Program.hasMany(models.Kegiatan, { foreignKey: 'kode_program' });
      Program.hasMany(models.Indikator, { foreignKey: 'kode_program' });
    }
  }
  Program.init({
    kode_program: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nama_program: DataTypes.STRING,
    kode_sub_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Program',
  });
  return Program;
};