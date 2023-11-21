'use strict';

const data = [
  {
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "nama_sub_unit": "Dinas Pendidikan dan Kebudayaan",
    "kode_opd": "1.01.2.22.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Kesehatan",
    "kode_opd": "1.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "nama_sub_unit": "Puskesmas Kebonsari",
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
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Pekerjaan Umum dan Penataan Ruang",
    "kode_opd": "1.03.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "nama_sub_unit": "Dinas Perumahan dan Kawasan Permukiman",
    "kode_opd": "1.04.2.10.0.00.01.0000"
  },
  {
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "nama_sub_unit": "Satuan Polisi Pamong Praja dan Pemadam Kebakaran",
    "kode_opd": "1.05.0.00.0.00.02.0000"
  },
  {
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "nama_sub_unit": "Badan Penanggulangan Bencana Daerah",
    "kode_opd": "1.05.0.00.0.00.03.0000"
  },
  {
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Sosial",
    "kode_opd": "1.06.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "nama_sub_unit": "Dinas Tenaga Kerja dan Perindustrian",
    "kode_opd": "2.07.3.31.3.32.01.0000"
  },
  {
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "nama_sub_unit": "Dinas Ketahanan Pangan dan Peternakan",
    "kode_opd": "2.09.3.27.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Lingkungan Hidup",
    "kode_opd": "2.11.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Kependudukan dan Pencatatan Sipil",
    "kode_opd": "2.12.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Pemberdayaan Masyarakat dan Desa",
    "kode_opd": "2.13.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "nama_sub_unit": "Dinas Pengendalian Penduduk dan Keluarga Berencana, Pemberdayaan Perempuan dan Perlindungan Anak",
    "kode_opd": "2.14.2.08.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Perhubungan",
    "kode_opd": "2.15.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "nama_sub_unit": "Dinas Komunikasi dan Informatika",
    "kode_opd": "2.16.2.20.2.21.01.0000"
  },
  {
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "nama_sub_unit": "Dinas Perdagangan, Koperasi dan Usaha Mikro",
    "kode_opd": "2.17.3.30.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "nama_sub_unit": "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
    "kode_opd": "2.18.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "nama_sub_unit": "Dinas Pariwisata Pemuda dan Olah Raga",
    "kode_opd": "2.19.3.26.0.00.01.0000"
  },
  {
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "nama_sub_unit": "Dinas Perpustakaan dan Kearsipan",
    "kode_opd": "2.23.2.24.0.00.01.0000"
  },
  {
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "nama_sub_unit": "Dinas Pertanian dan Perikanan",
    "kode_opd": "3.27.3.25.0.00.01.0000"
  },
  {
    "kode_sub_unit": "4.01.5.06.0.00.03.0000",
    "nama_sub_unit": "Sekretariat Daerah",
    "kode_opd": "4.01.5.06.0.00.03.0000"
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
    "kode_sub_unit": "4.02.0.00.0.00.01.0000",
    "nama_sub_unit": "Dewan Perwakilan Rakyat Daerah",
    "kode_opd": "4.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "4.02.0.00.0.00.02.0000",
    "nama_sub_unit": "Kepala Daerah dan Wakil kepala Daerah",
    "kode_opd": "4.02.0.00.0.00.02.0000"
  },
  {
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "nama_sub_unit": "Sekretariat Dewan Perwakilan Rakyat Daerah",
    "kode_opd": "4.02.0.00.0.00.04.0000"
  },
  {
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "nama_sub_unit": "Badan Perencanaan Pembangunan Riset, dan Inovasi Daerah",
    "kode_opd": "5.01.5.05.0.00.01.0000"
  },
  {
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "nama_sub_unit": "Badan Pengelolaan Keuangan dan Aset Daerah",
    "kode_opd": "5.02.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "nama_sub_unit": "Badan Pendapatan Daerah",
    "kode_opd": "5.02.0.00.0.00.02.0000"
  },
  {
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "nama_sub_unit": "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia",
    "kode_opd": "5.03.5.04.0.00.01.0000"
  },
  {
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "nama_sub_unit": "Inspektorat",
    "kode_opd": "6.01.0.00.0.00.01.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "nama_sub_unit": "Kecamatan Balerejo",
    "kode_opd": "7.01.0.00.0.00.05.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "nama_sub_unit": "Kecamatan Dagangan",
    "kode_opd": "7.01.0.00.0.00.06.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "nama_sub_unit": "Kecamatan Dolopo",
    "kode_opd": "7.01.0.00.0.00.07.0000"
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
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "nama_sub_unit": "Kecamatan Geger",
    "kode_opd": "7.01.0.00.0.00.08.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "nama_sub_unit": "Kecamatan Gemarang",
    "kode_opd": "7.01.0.00.0.00.09.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "nama_sub_unit": "Kecamatan Jiwan",
    "kode_opd": "7.01.0.00.0.00.10.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "nama_sub_unit": "Kecamatan Kebonsari",
    "kode_opd": "7.01.0.00.0.00.11.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "nama_sub_unit": "Kecamatan Kare",
    "kode_opd": "7.01.0.00.0.00.12.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "nama_sub_unit": "Kecamatan Madiun",
    "kode_opd": "7.01.0.00.0.00.13.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "nama_sub_unit": "Kelurahan Nglames",
    "kode_opd": "7.01.0.00.0.00.13.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "nama_sub_unit": "Kecamatan Mejayan",
    "kode_opd": "7.01.0.00.0.00.14.0000"
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
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "nama_sub_unit": "Kecamatan Pilangkenceng",
    "kode_opd": "7.01.0.00.0.00.15.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "nama_sub_unit": "Kecamatan Sawahan",
    "kode_opd": "7.01.0.00.0.00.16.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "nama_sub_unit": "Kecamatan Saradan",
    "kode_opd": "7.01.0.00.0.00.17.0000"
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "nama_sub_unit": "Kecamatan Wungu",
    "kode_opd": "7.01.0.00.0.00.18.0000"
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
  },
  {
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "nama_sub_unit": "Kecamatan Wonoasri",
    "kode_opd": "7.01.0.00.0.00.19.0000"
  },
  {
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "nama_sub_unit": "Badan Kesatuan Bangsa dan Politik",
    "kode_opd": "8.01.0.00.0.00.01.0000"
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
