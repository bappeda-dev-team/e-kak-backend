'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tujuan_OPDs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tujuan_opd: {
        type: Sequelize.STRING
      },
      indikator: {
        type: Sequelize.STRING
      },
      rumus_perhitungan: {
        type: Sequelize.STRING
      },
      sumber_data: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.JSON,
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
    await queryInterface.dropTable('Tujuan_OPDs');
  }
};