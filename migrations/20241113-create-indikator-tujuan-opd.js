'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Indikator_Tujuan_OPDs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.JSON(10000)
      },
      id_tujuan_opd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Harap masukkan OPD terkait!'
          }
        },
        references: {
          model: 'Tujuan_OPDs',
          key: 'id'
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
    await queryInterface.dropTable('Indikator_Tujuan_OPDs');
  }
};