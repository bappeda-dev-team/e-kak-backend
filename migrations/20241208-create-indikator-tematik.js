'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Indikator_Tematiks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      indikator: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      satuan: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.STRING
      },
      id_tematik: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tematiks",
          key: "id",
        },
      },
      id_sub_tematik: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sub_Tematiks",
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
    await queryInterface.dropTable('Indikator_Tematiks');
  }
};