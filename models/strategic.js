'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Strategic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Strategic.belongsTo(models.Tujuan_OPD, { foreignKey: 'id_tujuan_opd', as: 'tujuan' });
      Strategic.hasMany(models.Tactical, { foreignKey: 'id_strategic', as: 'tactical' });
      Strategic.hasMany(models.Indikator_Pohon_Kinerja, { foreignKey: 'id_strategic', as: 'indikator' });
    }
  }
  Strategic.init({
    strategi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_tujuan_opd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Strategic',
  });
  return Strategic;
};