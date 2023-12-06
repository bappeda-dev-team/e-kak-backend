'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nip: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: {
            args: true,
            msg: 'NIP tidak boleh kosong!'
          },
        }
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      pangkat: {
        type: Sequelize.STRING
      },
      golongan: {
        type: Sequelize.STRING
      },
      eselon: {
        type: Sequelize.STRING
      },
      kode_sub_unit: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Harap masukkan OPD terkait!'
          }
        },
        references: {
          model: 'Sub_Units',
          key: 'kode_sub_unit'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};