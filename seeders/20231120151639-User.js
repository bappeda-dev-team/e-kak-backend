'use strict';

const data = [
  {
    nama: 'Admin Kota',
    nip: '123456789012345678',
    email: 'admin@test.com',
    password: '12345678',
    pangkat: '-',
    nama_pangkat: '-',
    eselon: '-',
    kode_sub_unit: '-'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
