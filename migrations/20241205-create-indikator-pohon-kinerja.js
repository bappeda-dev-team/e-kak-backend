'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Indikator_Pohon_Kinerjas', {
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
          model: "Strategics",
          key: "id",
        },
      },
      id_tactical: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tacticals",
          key: "id",
        },
      },
      id_operational: {
        type: Sequelize.INTEGER,
        references: {
          model: "Operationals",
          key: "id",
        },
      },
      id_staff: {
        type: Sequelize.INTEGER,
        references: {
          model: "Staffs",
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
    await queryInterface.dropTable('Indikator_Pohon_Kinerjas');
  }
};