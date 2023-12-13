'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Strategic_Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Strategic_Kota.belongsTo(models.Sub_Sub_Tematik, { foreignKey: 'id_sub_sub_tematik' });
      Strategic_Kota.hasMany(models.Tactical_Kota, { foreignKey: 'id_strategic_kota', as: 'tactical' });
      Strategic_Kota.hasMany(models.Indikator_Pokin_Kota, { foreignKey: 'id_strategic', as: 'indikator' });
    }
  }
  Strategic_Kota.init({
    strategi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    status: DataTypes.STRING,
    id_sub_sub_tematik: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Strategic_Kota',
  });
  return Strategic_Kota;
};