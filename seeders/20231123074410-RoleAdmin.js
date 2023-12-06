'use strict';

const data = [
  {
    nip: '123456789012345678',
    id_role: 1
  },
  {
    nip: '199804072023020001',
    id_role: 2
  },
  {
    nip: '199804072023020001',
    id_role: 3
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Role_Users', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Role_Users', null, {});
  }
};
