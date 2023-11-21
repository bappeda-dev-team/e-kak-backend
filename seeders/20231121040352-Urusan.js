'use strict';

const data = [
  {
    "kode_urusan": "1",
    "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG BERKAITAN DENGAN PELAYANAN DASAR"
  },
  {
    "kode_urusan": "2",
    "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR"
  },
  {
    "kode_urusan": "3",
    "nama_urusan": "URUSAN PEMERINTAHAN PILIHAN"
  },
  {
    "kode_urusan": "X",
    "nama_urusan": "NON URUSAN"
  },
  {
    "kode_urusan": "4",
    "nama_urusan": "UNSUR PENDUKUNG URUSAN PEMERINTAHAN"
  },
  {
    "kode_urusan": "5",
    "nama_urusan": "UNSUR PENUNJANG URUSAN PEMERINTAHAN"
  },
  {
    "kode_urusan": "6",
    "nama_urusan": "UNSUR PENGAWASAN URUSAN PEMERINTAHAN"
  },
  {
    "kode_urusan": "7",
    "nama_urusan": "UNSUR KEWILAYAHAN"
  },
  {
    "kode_urusan": "8",
    "nama_urusan": "UNSUR PEMERINTAHAN UMUM"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Urusans', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Urusans', null, {});
  }
};
