'use strict';

const data = [
  {
    nama_role: 'Admin Kota'
  },
  {
    nama_role: 'Admin OPD'
  },
  {
    nama_role: 'Eselon 2'
  },
  {
    nama_role: 'Eselon 3'
  },
  {
    nama_role: 'Eselon 4'
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Roles', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
