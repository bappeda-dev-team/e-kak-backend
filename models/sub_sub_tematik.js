'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_Sub_Tematik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sub_Sub_Tematik.belongsTo(models.Sub_Tematik, { foreignKey: 'id_sub_tematik' });
      Sub_Sub_Tematik.hasMany(models.Strategic_Kota, { foreignKey: 'id_sub_sub_tematik', as: 'strategic' });
    }
  }
  Sub_Sub_Tematik.init({
    sub_sub_tematik: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    id_sub_tematik: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sub_Sub_Tematik',
  });
  return Sub_Sub_Tematik;
};