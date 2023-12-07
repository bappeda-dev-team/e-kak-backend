'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_Tematik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sub_Tematik.belongsTo(models.Tematik, { foreignKey: 'id_tematik' });
      Sub_Tematik.hasMany(models.Indikator_Tematik, { foreignKey: 'id_sub_tematik', as: 'indikator' });
    }
  }
  Sub_Tematik.init({
    sub_tematik: DataTypes.STRING,
    id_tematik: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sub_Tematik',
  });
  return Sub_Tematik;
};