'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role_User.init({
    nip: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role_User',
  });
  return Role_User;
};