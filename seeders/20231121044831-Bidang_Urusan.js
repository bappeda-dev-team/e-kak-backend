'use strict';

const data = [
  {
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN",
    "kode_urusan": "1"
  },
  {
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN",
    "kode_urusan": "1"
  },
  {
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX",
    "kode_urusan": "X"
  },
  {
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG",
    "kode_urusan": "1"
  },
  {
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN",
    "kode_urusan": "1"
  },
  {
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT",
    "kode_urusan": 1
  },
  {
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL",
    "kode_urusan": "1"
  },
  {
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "3.31",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERINDUSTRIAN",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "3.32",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TRANSMIGRASI",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA",
    "kode_urusan": 2
  },
  {
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.20",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG STATISTIK",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.21",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERSANDIAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN",
    "kode_urusan": "2"
  },
  {
    "kode_bidang_urusan": "3.25",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KELAUTAN  DAN PERIKANAN",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN",
    "kode_urusan": "3"
  },
  {
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH",
    "kode_urusan": "4"
  },
  {
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD",
    "kode_urusan": "4"
  },
  {
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN",
    "kode_urusan": "5"
  },
  {
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN",
    "kode_urusan": "5"
  },
  {
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN",
    "kode_urusan": "5"
  },
  {
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN",
    "kode_urusan": "5"
  },
  {
    "kode_bidang_urusan": "5.04",
    "nama_bidang_urusan": "PENDIDIKAN DAN PELATIHAN",
    "kode_urusan": "5"
  },
  {
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH",
    "kode_urusan": "6"
  },
  {
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN",
    "kode_urusan": 7
  },
  {
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK",
    "kode_urusan": "8"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date(),
        el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Bidang_Urusans', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bidang_Urusans', null, {});
  }
};
