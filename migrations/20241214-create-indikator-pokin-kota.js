'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Indikator_Pokin_Kota', {
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
      id_strategic: {
        type: Sequelize.INTEGER,
        references: {
          model: "Strategic_Kota",
          key: "id",
        },
      },
      id_tactical: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tactical_Kota",
          key: "id",
        },
      },
      id_operational: {
        type: Sequelize.INTEGER,
        references: {
          model: "Operational_Kota",
          key: "id",
        },
      },
      id_staff: {
        type: Sequelize.INTEGER,
        references: {
          model: "Staff_Kota",
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
    await queryInterface.dropTable('Indikator_Pokin_Kota');
  }
};