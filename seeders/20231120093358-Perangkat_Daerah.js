'use strict';

const data = [
  {
    "kode_opd": "1.01.2.22.0.00.01.0000",
    "nama_opd": "Dinas Pendidikan dan Kebudayaan"
  },
  {
    "kode_opd": "1.02.0.00.0.00.01.0000",
    "nama_opd": "Dinas Kesehatan"
  },
  {
    "kode_opd": "1.03.0.00.0.00.01.0000",
    "nama_opd": "Dinas Pekerjaan Umum dan Penataan Ruang"
  },
  {
    "kode_opd": "1.04.2.10.0.00.01.0000",
    "nama_opd": "Dinas Perumahan dan Kawasan Permukiman"
  },
  {
    "kode_opd": "1.05.0.00.0.00.02.0000",
    "nama_opd": "Satuan Polisi Pamong Praja dan Pemadam Kebakaran"
  },
  {
    "kode_opd": "1.05.0.00.0.00.03.0000",
    "nama_opd": "Badan Penanggulangan Bencana Daerah"
  },
  {
    "kode_opd": "1.06.0.00.0.00.01.0000",
    "nama_opd": "Dinas Sosial"
  },
  {
    "kode_opd": "2.07.3.31.3.32.01.0000",
    "nama_opd": "Dinas Tenaga Kerja dan Perindustrian"
  },
  {
    "kode_opd": "2.09.3.27.0.00.01.0000",
    "nama_opd": "Dinas Ketahanan Pangan dan Peternakan"
  },
  {
    "kode_opd": "2.11.0.00.0.00.01.0000",
    "nama_opd": "Dinas Lingkungan Hidup"
  },
  {
    "kode_opd": "2.12.0.00.0.00.01.0000",
    "nama_opd": "Dinas Kependudukan dan Pencatatan Sipil"
  },
  {
    "kode_opd": "2.13.0.00.0.00.01.0000",
    "nama_opd": "Dinas Pemberdayaan Masyarakat dan Desa"
  },
  {
    "kode_opd": "2.14.2.08.0.00.01.0000",
    "nama_opd": "Dinas Pengendalian Penduduk dan Keluarga Berencana, Pemberdayaan Perempuan dan Perlindungan Anak"
  },
  {
    "kode_opd": "2.15.0.00.0.00.01.0000",
    "nama_opd": "Dinas Perhubungan"
  },
  {
    "kode_opd": "2.16.2.20.2.21.01.0000",
    "nama_opd": "Dinas Komunikasi dan Informatika"
  },
  {
    "kode_opd": "2.17.3.30.0.00.01.0000",
    "nama_opd": "Dinas Perdagangan, Koperasi dan Usaha Mikro"
  },
  {
    "kode_opd": "2.18.0.00.0.00.01.0000",
    "nama_opd": "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu"
  },
  {
    "kode_opd": "2.19.3.26.0.00.01.0000",
    "nama_opd": "Dinas Pariwisata Pemuda dan Olah Raga"
  },
  {
    "kode_opd": "2.23.2.24.0.00.01.0000",
    "nama_opd": "Dinas Perpustakaan dan Kearsipan"
  },
  {
    "kode_opd": "3.27.3.25.0.00.01.0000",
    "nama_opd": "Dinas Pertanian dan Perikanan"
  },
  {
    "kode_opd": "4.01.5.06.0.00.03.0000",
    "nama_opd": "Sekretariat Daerah"
  },
  {
    "kode_opd": "4.02.0.00.0.00.01.0000",
    "nama_opd": "Dewan Perwakilan Rakyat Daerah"
  },
  {
    "kode_opd": "4.02.0.00.0.00.02.0000",
    "nama_opd": "Kepala Daerah dan Wakil kepala Daerah"
  },
  {
    "kode_opd": "4.02.0.00.0.00.04.0000",
    "nama_opd": "Sekretariat Dewan Perwakilan Rakyat Daerah"
  },
  {
    "kode_opd": "5.01.5.05.0.00.01.0000",
    "nama_opd": "Badan Perencanaan Pembangunan Riset, dan Inovasi Daerah"
  },
  {
    "kode_opd": "5.02.0.00.0.00.01.0000",
    "nama_opd": "Badan Pengelolaan Keuangan dan Aset Daerah"
  },
  {
    "kode_opd": "5.02.0.00.0.00.02.0000",
    "nama_opd": "Badan Pendapatan Daerah"
  },
  {
    "kode_opd": "5.03.5.04.0.00.01.0000",
    "nama_opd": "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia"
  },
  {
    "kode_opd": "6.01.0.00.0.00.01.0000",
    "nama_opd": "Inspektorat"
  },
  {
    "kode_opd": "7.01.0.00.0.00.05.0000",
    "nama_opd": "Kecamatan Balerejo"
  },
  {
    "kode_opd": "7.01.0.00.0.00.06.0000",
    "nama_opd": "Kecamatan Dagangan"
  },
  {
    "kode_opd": "7.01.0.00.0.00.07.0000",
    "nama_opd": "Kecamatan Dolopo"
  },
  {
    "kode_opd": "7.01.0.00.0.00.08.0000",
    "nama_opd": "Kecamatan Geger"
  },
  {
    "kode_opd": "7.01.0.00.0.00.09.0000",
    "nama_opd": "Kecamatan Gemarang"
  },
  {
    "kode_opd": "7.01.0.00.0.00.10.0000",
    "nama_opd": "Kecamatan Jiwan"
  },
  {
    "kode_opd": "7.01.0.00.0.00.11.0000",
    "nama_opd": "Kecamatan Kebonsari"
  },
  {
    "kode_opd": "7.01.0.00.0.00.12.0000",
    "nama_opd": "Kecamatan Kare"
  },
  {
    "kode_opd": "7.01.0.00.0.00.13.0000",
    "nama_opd": "Kecamatan Madiun"
  },
  {
    "kode_opd": "7.01.0.00.0.00.14.0000",
    "nama_opd": "Kecamatan Mejayan"
  },
  {
    "kode_opd": "7.01.0.00.0.00.15.0000",
    "nama_opd": "Kecamatan Pilangkenceng"
  },
  {
    "kode_opd": "7.01.0.00.0.00.16.0000",
    "nama_opd": "Kecamatan Sawahan"
  },
  {
    "kode_opd": "7.01.0.00.0.00.17.0000",
    "nama_opd": "Kecamatan Saradan"
  },
  {
    "kode_opd": "7.01.0.00.0.00.18.0000",
    "nama_opd": "Kecamatan Wungu"
  },
  {
    "kode_opd": "7.01.0.00.0.00.19.0000",
    "nama_opd": "Kecamatan Wonoasri"
  },
  {
    "kode_opd": "8.01.0.00.0.00.01.0000",
    "nama_opd": "Badan Kesatuan Bangsa dan Politik"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Perangkat_Daerahs', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Perangkat_Daerahs', null, {});
  }
};
