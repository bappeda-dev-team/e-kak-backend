'use strict';

const data = [
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "nama_sub_unit": "Puskesmas Kebonsari",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Kesehatan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "nama_sub_unit": "Puskesmas Gantrung",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "nama_sub_unit": "Puskesmas Geger",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "nama_sub_unit": "Puskesmas Kaibon",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "nama_sub_unit": "Puskesmas Mlilir",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "nama_sub_unit": "Puskesmas Bangunsari",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "nama_sub_unit": "Puskesmas Dagangan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "nama_sub_unit": "Puskesmas Jetis",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "nama_sub_unit": "Puskesmas Wungu",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "nama_sub_unit": "Puskesmas Mojopurno",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "nama_sub_unit": "Puskesmas Kare",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "nama_sub_unit": "Puskesmas Gemarang",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "nama_sub_unit": "Puskesmas Saradan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "nama_sub_unit": "Puskesmas Sumbersari",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "nama_sub_unit": "Puskesmas Pilangkenceng",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "nama_sub_unit": "Puskesmas Krebet",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "nama_sub_unit": "Puskesmas Mejayan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "nama_sub_unit": "Puskesmas Klecorejo",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "nama_sub_unit": "Puskesmas Wonoasri",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "nama_sub_unit": "Puskesmas Balerejo",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "nama_sub_unit": "Puskesmas Simo",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "nama_sub_unit": "Puskesmas Madiun",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "nama_sub_unit": "Puskesmas Dimong",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "nama_sub_unit": "Puskesmas Sawahan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "nama_sub_unit": "Puskesmas Klagenserut",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "nama_sub_unit": "Puskesmas Jiwan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "nama_sub_unit": "RSUD Caruban",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0028",
    "nama_sub_unit": "RSUD Dolopo",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0000",
    "nama_sub_unit": "Sekretariat Daerah",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0001",
    "nama_sub_unit": "Bagian Administrasi Pemerintahan",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0002",
    "nama_sub_unit": "Bagian Hukum",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0003",
    "nama_sub_unit": "Bagian Pengadaan Barang dan Jasa",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "nama_sub_unit": "Bagian Kesejahteraan Rakyat",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0006",
    "nama_sub_unit": "Bagian Perekonomian",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "nama_sub_unit": "Bagian Umum",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0008",
    "nama_sub_unit": "Bagian Organisasi",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "nama_sub_unit": "Bagian Protokol dan Komunikasi Pimpinan",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0010",
    "nama_sub_unit": "Bagian Administrasi Pembangunan",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "nama_sub_unit": "Kecamatan Dolopo",
    "kode_opd": "4.01.5.06.0.00.03.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "nama_sub_unit": "Kelurahan Bangunsari Dolopo",
    "kode_opd": "7.01.0.00.0.00.07.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "nama_sub_unit": "Kelurahan Mlilir",
    "kode_opd": "7.01.0.00.0.00.07.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "nama_sub_unit": "Kecamatan Madiun",
    "kode_opd": "7.01.0.00.0.00.07.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "nama_sub_unit": "Kelurahan Nglames",
    "kode_opd": "7.01.0.00.0.00.13.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "nama_sub_unit": "Kecamatan Mejayan",
    "kode_opd": "7.01.0.00.0.00.13.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "nama_sub_unit": "Kelurahan Bangunsari Mejayan",
    "kode_opd": "7.01.0.00.0.00.14.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "nama_sub_unit": "Kelurahan Krajan",
    "kode_opd": "7.01.0.00.0.00.14.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "nama_sub_unit": "Kelurahan Pandean",
    "kode_opd": "7.01.0.00.0.00.14.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "nama_sub_unit": "Kecamatan Wungu",
    "kode_opd": "7.01.0.00.0.00.14.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "nama_sub_unit": "Kelurahan Wungu",
    "kode_opd": "7.01.0.00.0.00.18.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "nama_sub_unit": "Kelurahan Munggut",
    "kode_opd": "7.01.0.00.0.00.18.0000"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Sub_Units', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sub_Units', null, {});
  }
};
