'use strict';
const { hashPassword } = require('../helpers/bcrypt');

const data = [
  {
    nama: 'Admin Kota',
    nip: '123456789012345678',
    email: 'admin@test.com',
    password: hashPassword('12345678'),
    pangkat: '-',
    golongan: '-',
    eselon: '-',
    kode_sub_unit: '5.01.5.05.0.00.01.0000'
  },
  {
    nama: 'Ilham Akbar Syahputra',
    nip: '199804072023020001',
    email: 'ilhamakbars360@gmail.com',
    password: hashPassword('12345678'),
    pangkat: '-',
    golongan: '-',
    eselon: '-',
    kode_sub_unit: '4.01.5.06.0.00.03.0001'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
