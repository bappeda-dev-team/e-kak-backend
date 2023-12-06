'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Sub_Unit, { foreignKey: 'kode_sub_unit' });
      User.belongsToMany(models.Role, {
        through: models.Role_User,
        foreignKey: 'nip',
        otherKey: 'id_role'
      });
    }
  }
  User.init({
    nama: DataTypes.STRING,
    nip: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pangkat: DataTypes.STRING,
    golongan: DataTypes.STRING,
    eselon: DataTypes.STRING,
    kode_sub_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};