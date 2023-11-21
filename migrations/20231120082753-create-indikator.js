'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Indikators', {
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
      pagu_anggaran: {
        type: Sequelize.STRING
      },
      kode_program: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Harap masukkan Program terkait!'
          }
        },
        references: {
          model: 'Programs',
          key: 'kode_program'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      kode_kegiatan: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Harap masukkan Kegiatan terkait!'
          }
        },
        references: {
          model: 'Kegiatans',
          key: 'kode_kegiatan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      kode_sub_kegiatan: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Harap masukkan Sub Kegiatan terkait!'
          }
        },
        references: {
          model: 'Sub_Kegiatans',
          key: 'kode_sub_kegiatan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      keterangan: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Indikators');
  }
};