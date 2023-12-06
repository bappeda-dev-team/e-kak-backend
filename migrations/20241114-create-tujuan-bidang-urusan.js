'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tujuan_Bidang_Urusans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_bidang_urusan: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Harap masukkan Bidang Urusan",
          },
        },
        references: {
          model: "Bidang_Urusans",
          key: "kode_bidang_urusan",
        },
      },
      id_tujuan_opd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Harap masukkan Tujuan OPD",
          },
        },
        references: {
          model: "Tujuan_OPDs",
          key: "id",
        },
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
    await queryInterface.dropTable('Tujuan_Bidang_Urusans');
  }
};