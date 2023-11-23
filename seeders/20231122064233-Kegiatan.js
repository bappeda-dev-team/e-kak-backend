'use strict';

const data = [
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.01",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Dasar"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.02",
    "nama_kegiatan": "Pengelolaan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.03",
    "nama_kegiatan": "Pengelolaan Pendidikan Anak Usia Dini (PAUD)"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.02",
    "kode_kegiatan": "1.01.02.2.04",
    "nama_kegiatan": "Pengelolaan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.03",
    "kode_kegiatan": "1.01.03.2.01",
    "nama_kegiatan": "Penetapan Kurikulum Muatan Lokal Pendidikan Dasar"
  },
  {
    "kode_program": "1.01.03",
    "kode_kegiatan": "1.01.03.2.01",
    "nama_kegiatan": "Penetapan Kurikulum Muatan Lokal Pendidikan Dasar"
  },
  {
    "kode_program": "1.01.03",
    "kode_kegiatan": "1.01.03.2.01",
    "nama_kegiatan": "Penetapan Kurikulum Muatan Lokal Pendidikan Dasar"
  },
  {
    "kode_program": "1.01.04",
    "kode_kegiatan": "1.01.04.2.01",
    "nama_kegiatan": "Pemerataan Kuantitas dan Kualitas Pendidik dan Tenaga Kependidikan bagi Satuan Pendidikan Dasar, PAUD, dan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.04",
    "kode_kegiatan": "1.01.04.2.01",
    "nama_kegiatan": "Pemerataan Kuantitas dan Kualitas Pendidik dan Tenaga Kependidikan bagi Satuan Pendidikan Dasar, PAUD, dan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.01.01",
    "kode_kegiatan": "1.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.01",
    "nama_kegiatan": "Pengelolaan Kebudayaan yang Masyarakat Pelakunya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.01",
    "nama_kegiatan": "Pengelolaan Kebudayaan yang Masyarakat Pelakunya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.02",
    "nama_kegiatan": "Pelestarian Kesenian Tradisional yang Masyarakat Pelakunya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.02",
    "nama_kegiatan": "Pelestarian Kesenian Tradisional yang Masyarakat Pelakunya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.02",
    "nama_kegiatan": "Pelestarian Kesenian Tradisional yang Masyarakat Pelakunya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.03",
    "nama_kegiatan": "Pembinaan Lembaga Adat yang Penganutnya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.03",
    "nama_kegiatan": "Pembinaan Lembaga Adat yang Penganutnya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.02",
    "kode_kegiatan": "2.22.02.2.03",
    "nama_kegiatan": "Pembinaan Lembaga Adat yang Penganutnya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.04",
    "kode_kegiatan": "2.22.04.2.01",
    "nama_kegiatan": "Pembinaan Sejarah Lokal dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.04",
    "kode_kegiatan": "2.22.04.2.01",
    "nama_kegiatan": "Pembinaan Sejarah Lokal dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.05",
    "kode_kegiatan": "2.22.05.2.01",
    "nama_kegiatan": "Penetapan Cagar Budaya Peringkat Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.05",
    "kode_kegiatan": "2.22.05.2.01",
    "nama_kegiatan": "Penetapan Cagar Budaya Peringkat Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.05",
    "kode_kegiatan": "2.22.05.2.02",
    "nama_kegiatan": "Pengelolaan Cagar Budaya Peringkat Kabupaten/Kota"
  },
  {
    "kode_program": "2.22.05",
    "kode_kegiatan": "2.22.05.2.02",
    "nama_kegiatan": "Pengelolaan Cagar Budaya Peringkat Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.01",
    "nama_kegiatan": "Penyediaan Fasilitas Pelayanan Kesehatan untuk UKM dan UKP Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.02",
    "nama_kegiatan": "Penyediaan Layanan Kesehatan untuk UKM dan UKP Rujukan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.04",
    "nama_kegiatan": "Penerbitan Izin Rumah Sakit Kelas C, D dan Fasilitas Pelayanan Kesehatan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.02",
    "kode_kegiatan": "1.02.02.2.04",
    "nama_kegiatan": "Penerbitan Izin Rumah Sakit Kelas C, D dan Fasilitas Pelayanan Kesehatan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.03",
    "kode_kegiatan": "1.02.03.2.01",
    "nama_kegiatan": "Pemberian Izin Praktik Tenaga Kesehatan di Wilayah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.03",
    "kode_kegiatan": "1.02.03.2.02",
    "nama_kegiatan": "Perencanaan Kebutuhan dan Pendayagunaan Sumber Daya Manusia Kesehatan untuk UKP dan UKM di Wilayah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.03",
    "kode_kegiatan": "1.02.03.2.02",
    "nama_kegiatan": "Perencanaan Kebutuhan dan Pendayagunaan Sumber Daya Manusia Kesehatan untuk UKP dan UKM di Wilayah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.03",
    "kode_kegiatan": "1.02.03.2.02",
    "nama_kegiatan": "Perencanaan Kebutuhan dan Pendayagunaan Sumber Daya Manusia Kesehatan untuk UKP dan UKM di Wilayah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.03",
    "kode_kegiatan": "1.02.03.2.03",
    "nama_kegiatan": "Pengembangan Mutu dan Peningkatan Kompetensi Teknis Sumber Daya Manusia Kesehatan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.04",
    "kode_kegiatan": "1.02.04.2.01",
    "nama_kegiatan": "Pemberian Izin Apotek, Toko Obat, Toko Alat Kesehatan dan Optikal, Usaha Mikro Obat Tradisional (UMOT)"
  },
  {
    "kode_program": "1.02.04",
    "kode_kegiatan": "1.02.04.2.03",
    "nama_kegiatan": "Penerbitan Sertifikat Produksi Pangan Industri Rumah Tangga dan Nomor P-IRT sebagai Izin Produksi, untuk Produk Makanan Minuman Tertentu yang Dapat Diproduksi oleh Industri Rumah Tangga"
  },
  {
    "kode_program": "1.02.04",
    "kode_kegiatan": "1.02.04.2.04",
    "nama_kegiatan": "Penerbitan Sertifikat Laik Higiene Sanitasi Tempat Pengelolaan Makanan (TPM) antara lain Jasa Boga, Rumah Makan/Restoran dan Depot Air Minum (DAM)"
  },
  {
    "kode_program": "1.02.04",
    "kode_kegiatan": "1.02.04.2.05",
    "nama_kegiatan": "Penerbitan Stiker Pembinaan pada Makanan Jajanan dan Sentra Makanan Jajanan"
  },
  {
    "kode_program": "1.02.04",
    "kode_kegiatan": "1.02.04.2.06",
    "nama_kegiatan": "Pemeriksaan dan Tindak Lanjut Hasil Pemeriksaan Post Market pada Produksi dan Produk Makanan Minuman Industri Rumah Tangga"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.01",
    "nama_kegiatan": "Advokasi, Pemberdayaan, Kemitraan, Peningkatan Peran serta Masyarakat dan Lintas Sektor Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.05",
    "kode_kegiatan": "1.02.05.2.03",
    "nama_kegiatan": "Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM) Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "1.02.01",
    "kode_kegiatan": "1.02.01.2.10",
    "nama_kegiatan": "Peningkatan Pelayanan BLUD"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.01",
    "nama_kegiatan": "Pengelolaan SDA dan Bangunan Pengaman Pantai pada Wilayah Sungai (WS) dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.01",
    "nama_kegiatan": "Pengelolaan SDA dan Bangunan Pengaman Pantai pada Wilayah Sungai (WS) dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.01",
    "nama_kegiatan": "Pengelolaan SDA dan Bangunan Pengaman Pantai pada Wilayah Sungai (WS) dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.01",
    "nama_kegiatan": "Pengelolaan SDA dan Bangunan Pengaman Pantai pada Wilayah Sungai (WS) dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.02",
    "kode_kegiatan": "1.03.02.2.02",
    "nama_kegiatan": "Pengembangan dan Pengelolaan Sistem Irigasi Primer dan Sekunder pada Daerah Irigasi yang Luasnya di Bawah 1000 Ha dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.03",
    "kode_kegiatan": "1.03.03.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Penyediaan Air Minum (SPAM) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.05",
    "kode_kegiatan": "1.03.05.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Air Limbah Domestik dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.05",
    "kode_kegiatan": "1.03.05.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Air Limbah Domestik dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.05",
    "kode_kegiatan": "1.03.05.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Air Limbah Domestik dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.06",
    "kode_kegiatan": "1.03.06.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Drainase yang Terhubung Langsung dengan Sungai dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.06",
    "kode_kegiatan": "1.03.06.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Drainase yang Terhubung Langsung dengan Sungai dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.06",
    "kode_kegiatan": "1.03.06.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Drainase yang Terhubung Langsung dengan Sungai dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.06",
    "kode_kegiatan": "1.03.06.2.01",
    "nama_kegiatan": "Pengelolaan dan Pengembangan Sistem Drainase yang Terhubung Langsung dengan Sungai dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.08",
    "kode_kegiatan": "1.03.08.2.01",
    "nama_kegiatan": "Penyelenggaraan Bangunan Gedung di Wilayah Daerah Kabupaten/Kota, Pemberian Izin Mendirikan Bangunan (IMB) dan Sertifikat Laik Fungsi Bangunan Gedung"
  },
  {
    "kode_program": "1.03.08",
    "kode_kegiatan": "1.03.08.2.01",
    "nama_kegiatan": "Penyelenggaraan Bangunan Gedung di Wilayah Daerah Kabupaten/Kota, Pemberian Izin Mendirikan Bangunan (IMB) dan Sertifikat Laik Fungsi Bangunan Gedung"
  },
  {
    "kode_program": "1.03.08",
    "kode_kegiatan": "1.03.08.2.01",
    "nama_kegiatan": "Penyelenggaraan Bangunan Gedung di Wilayah Daerah Kabupaten/Kota, Pemberian Izin Mendirikan Bangunan (IMB) dan Sertifikat Laik Fungsi Bangunan Gedung"
  },
  {
    "kode_program": "1.03.08",
    "kode_kegiatan": "1.03.08.2.01",
    "nama_kegiatan": "Penyelenggaraan Bangunan Gedung di Wilayah Daerah Kabupaten/Kota, Pemberian Izin Mendirikan Bangunan (IMB) dan Sertifikat Laik Fungsi Bangunan Gedung"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.10",
    "kode_kegiatan": "1.03.10.2.01",
    "nama_kegiatan": "Penyelenggaraan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.11",
    "kode_kegiatan": "1.03.11.2.01",
    "nama_kegiatan": "Penyelenggaraan Pelatihan Tenaga Terampil Konstruksi"
  },
  {
    "kode_program": "1.03.11",
    "kode_kegiatan": "1.03.11.2.02",
    "nama_kegiatan": "Penyelenggaraan Sistem Informasi Jasa Konstruksi Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.11",
    "kode_kegiatan": "1.03.11.2.04",
    "nama_kegiatan": "Pengawasan Tertib Usaha, Tertib Penyelenggaraan dan Tertib Pemanfaatan Jasa Konstruksi"
  },
  {
    "kode_program": "1.03.12",
    "kode_kegiatan": "1.03.12.2.01",
    "nama_kegiatan": "Penetapan Rencana Tata Ruang Wilayah (RTRW) dan Rencana Rinci Tata Ruang (RRTR) Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.12",
    "kode_kegiatan": "1.03.12.2.01",
    "nama_kegiatan": "Penetapan Rencana Tata Ruang Wilayah (RTRW) dan Rencana Rinci Tata Ruang (RRTR) Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.12",
    "kode_kegiatan": "1.03.12.2.02",
    "nama_kegiatan": "Koordinasi dan Sinkronisasi Perencanaan Tata Ruang Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.12",
    "kode_kegiatan": "1.03.12.2.04",
    "nama_kegiatan": "Koordinasi dan Sinkronisasi Pengendalian Pemanfaatan Ruang Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.03.01",
    "kode_kegiatan": "1.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.04.02",
    "kode_kegiatan": "1.04.02.2.03",
    "nama_kegiatan": "Pembangunan dan Rehabilitasi Rumah Korban Bencana atau Relokasi Program Kabupaten/Kota"
  },
  {
    "kode_program": "1.04.02",
    "kode_kegiatan": "1.04.02.2.05",
    "nama_kegiatan": "Pembinaan Pengelolaan Rumah Susun Umum dan/atau Rumah Khusus"
  },
  {
    "kode_program": "1.04.03",
    "kode_kegiatan": "1.04.03.2.03",
    "nama_kegiatan": "Peningkatan Kualitas Kawasan Permukiman Kumuh dengan Luas di Bawah 10 (Sepuluh) Ha"
  },
  {
    "kode_program": "1.04.03",
    "kode_kegiatan": "1.04.03.2.03",
    "nama_kegiatan": "Peningkatan Kualitas Kawasan Permukiman Kumuh dengan Luas di Bawah 10 (Sepuluh) Ha"
  },
  {
    "kode_program": "1.04.05",
    "kode_kegiatan": "1.04.05.2.01",
    "nama_kegiatan": "Urusan Penyelenggaraan PSU Perumahan"
  },
  {
    "kode_program": "1.04.05",
    "kode_kegiatan": "1.04.05.2.01",
    "nama_kegiatan": "Urusan Penyelenggaraan PSU Perumahan"
  },
  {
    "kode_program": "1.04.05",
    "kode_kegiatan": "1.04.05.2.01",
    "nama_kegiatan": "Urusan Penyelenggaraan PSU Perumahan"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.04.01",
    "kode_kegiatan": "1.04.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.10.04",
    "kode_kegiatan": "2.10.04.2.01",
    "nama_kegiatan": "Penyelesaian Sengketa Tanah Garapan dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.10.04",
    "kode_kegiatan": "2.10.04.2.01",
    "nama_kegiatan": "Penyelesaian Sengketa Tanah Garapan dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.10.05",
    "kode_kegiatan": "2.10.05.2.01",
    "nama_kegiatan": "Penyelesaian Masalah Ganti Kerugian dan Santunan Tanah untuk Pembangunan oleh Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.10.06",
    "kode_kegiatan": "2.10.06.2.01",
    "nama_kegiatan": "Penetapan Subjek dan Objek Redistribusi Tanah serta Ganti Kerugian Tanah Kelebihan Maksimum dan Tanah Absentee dalam 1 (Satu) Daerah Kabupaten/Kota "
  },
  {
    "kode_program": "2.10.06",
    "kode_kegiatan": "2.10.06.2.01",
    "nama_kegiatan": "Penetapan Subjek dan Objek Redistribusi Tanah serta Ganti Kerugian Tanah Kelebihan Maksimum dan Tanah Absentee dalam 1 (Satu) Daerah Kabupaten/Kota "
  },
  {
    "kode_program": "2.10.08",
    "kode_kegiatan": "2.10.08.2.02",
    "nama_kegiatan": "Inventarisasi dan Pemanfaatan Tanah Kosong"
  },
  {
    "kode_program": "2.10.10",
    "kode_kegiatan": "2.10.10.2.01",
    "nama_kegiatan": "Penggunaan Tanah yang Hamparannya dalam satu Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.10.10",
    "kode_kegiatan": "2.10.10.2.01",
    "nama_kegiatan": "Penggunaan Tanah yang Hamparannya dalam satu Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.01",
    "nama_kegiatan": "Penanganan Gangguan Ketenteraman dan Ketertiban Umum dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.02",
    "nama_kegiatan": "Penegakan Peraturan Daerah Kabupaten/Kota dan Peraturan Bupati/Wali Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.02",
    "nama_kegiatan": "Penegakan Peraturan Daerah Kabupaten/Kota dan Peraturan Bupati/Wali Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.02",
    "nama_kegiatan": "Penegakan Peraturan Daerah Kabupaten/Kota dan Peraturan Bupati/Wali Kota"
  },
  {
    "kode_program": "1.05.02",
    "kode_kegiatan": "1.05.02.2.03",
    "nama_kegiatan": "Pembinaan Penyidik Pegawai Negeri Sipil (PPNS) Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.01",
    "nama_kegiatan": "Pencegahan, Pengendalian, Pemadaman, Penyelamatan, dan Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.02",
    "nama_kegiatan": "Inspeksi Peralatan Proteksi Kebakaran"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.04",
    "nama_kegiatan": "Pemberdayaan Masyarakat dalam Pencegahan Kebakaran"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.04",
    "nama_kegiatan": "Pemberdayaan Masyarakat dalam Pencegahan Kebakaran"
  },
  {
    "kode_program": "1.05.04",
    "kode_kegiatan": "1.05.04.2.05",
    "nama_kegiatan": "Penyelenggaraan Operasi Pencarian dan Pertolongan Terhadap Kondisi Membahayakan Manusia"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.01",
    "nama_kegiatan": "Pelayanan Informasi Rawan Bencana Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.01",
    "nama_kegiatan": "Pelayanan Informasi Rawan Bencana Kabupaten/Kota"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.02",
    "nama_kegiatan": "Pelayanan Pencegahan dan Kesiapsiagaan Terhadap Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.02",
    "nama_kegiatan": "Pelayanan Pencegahan dan Kesiapsiagaan Terhadap Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.02",
    "nama_kegiatan": "Pelayanan Pencegahan dan Kesiapsiagaan Terhadap Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.02",
    "nama_kegiatan": "Pelayanan Pencegahan dan Kesiapsiagaan Terhadap Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.03",
    "nama_kegiatan": "Pelayanan Penyelamatan dan Evakuasi Korban Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.04",
    "nama_kegiatan": "Penataan Sistem Dasar Penanggulangan Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.04",
    "nama_kegiatan": "Penataan Sistem Dasar Penanggulangan Bencana"
  },
  {
    "kode_program": "1.05.03",
    "kode_kegiatan": "1.05.03.2.04",
    "nama_kegiatan": "Penataan Sistem Dasar Penanggulangan Bencana"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.05.01",
    "kode_kegiatan": "1.05.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.02",
    "kode_kegiatan": "1.06.02.2.03",
    "nama_kegiatan": "Pengembangan Potensi Sumber Kesejahteraan Sosial Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.02",
    "kode_kegiatan": "1.06.02.2.03",
    "nama_kegiatan": "Pengembangan Potensi Sumber Kesejahteraan Sosial Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.02",
    "kode_kegiatan": "1.06.02.2.03",
    "nama_kegiatan": "Pengembangan Potensi Sumber Kesejahteraan Sosial Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.02",
    "kode_kegiatan": "1.06.02.2.03",
    "nama_kegiatan": "Pengembangan Potensi Sumber Kesejahteraan Sosial Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.01",
    "nama_kegiatan": "Rehabilitasi Sosial Dasar Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.01",
    "nama_kegiatan": "Rehabilitasi Sosial Dasar Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.01",
    "nama_kegiatan": "Rehabilitasi Sosial Dasar Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.01",
    "nama_kegiatan": "Rehabilitasi Sosial Dasar Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.01",
    "nama_kegiatan": "Rehabilitasi Sosial Dasar Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.01",
    "nama_kegiatan": "Rehabilitasi Sosial Dasar Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.02",
    "nama_kegiatan": "Rehabilitasi Sosial Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.02",
    "nama_kegiatan": "Rehabilitasi Sosial Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.02",
    "nama_kegiatan": "Rehabilitasi Sosial Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.02",
    "nama_kegiatan": "Rehabilitasi Sosial Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.02",
    "nama_kegiatan": "Rehabilitasi Sosial Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.04",
    "kode_kegiatan": "1.06.04.2.02",
    "nama_kegiatan": "Rehabilitasi Sosial Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA di Luar Panti Sosial"
  },
  {
    "kode_program": "1.06.05",
    "kode_kegiatan": "1.06.05.2.02",
    "nama_kegiatan": "Pengelolaan Data Fakir Miskin Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.05",
    "kode_kegiatan": "1.06.05.2.02",
    "nama_kegiatan": "Pengelolaan Data Fakir Miskin Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.06",
    "kode_kegiatan": "1.06.06.2.01",
    "nama_kegiatan": "Perlindungan Sosial Korban Bencana Alam dan Sosial Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.06",
    "kode_kegiatan": "1.06.06.2.02",
    "nama_kegiatan": "Penyelenggaraan Pemberdayaan Masyarakat Terhadap Kesiapsiagaan Bencana Kabupaten/Kota"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "1.06.01",
    "kode_kegiatan": "1.06.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.07.03",
    "kode_kegiatan": "2.07.03.2.01",
    "nama_kegiatan": "Pelaksanaan Pelatihan berdasarkan Unit Kompetensi"
  },
  {
    "kode_program": "2.07.03",
    "kode_kegiatan": "2.07.03.2.02",
    "nama_kegiatan": "Pembinaan Lembaga Pelatihan Kerja Swasta"
  },
  {
    "kode_program": "2.07.03",
    "kode_kegiatan": "2.07.03.2.04",
    "nama_kegiatan": "Konsultansi Produktivitas pada Perusahaan Kecil"
  },
  {
    "kode_program": "2.07.04",
    "kode_kegiatan": "2.07.04.2.01",
    "nama_kegiatan": "Pelayanan antar Kerja di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.04",
    "kode_kegiatan": "2.07.04.2.01",
    "nama_kegiatan": "Pelayanan antar Kerja di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.04",
    "kode_kegiatan": "2.07.04.2.01",
    "nama_kegiatan": "Pelayanan antar Kerja di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.04",
    "kode_kegiatan": "2.07.04.2.01",
    "nama_kegiatan": "Pelayanan antar Kerja di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.04",
    "kode_kegiatan": "2.07.04.2.04",
    "nama_kegiatan": "Pelindungan PMI (Pra dan Purna Penempatan) di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.05",
    "kode_kegiatan": "2.07.05.2.01",
    "nama_kegiatan": "Pengesahan Peraturan Perusahaan dan Pendaftaran Perjanjian Kerja Bersama untuk Perusahaan yang Hanya Beroperasi dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.05",
    "kode_kegiatan": "2.07.05.2.01",
    "nama_kegiatan": "Pengesahan Peraturan Perusahaan dan Pendaftaran Perjanjian Kerja Bersama untuk Perusahaan yang Hanya Beroperasi dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.05",
    "kode_kegiatan": "2.07.05.2.02",
    "nama_kegiatan": "Pencegahan dan Penyelesaian Perselisihan Hubungan Industrial, Mogok Kerja dan Penutupan Perusahaan di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.05",
    "kode_kegiatan": "2.07.05.2.02",
    "nama_kegiatan": "Pencegahan dan Penyelesaian Perselisihan Hubungan Industrial, Mogok Kerja dan Penutupan Perusahaan di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.07.01",
    "kode_kegiatan": "2.07.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.31.02",
    "kode_kegiatan": "3.31.02.2.01",
    "nama_kegiatan": "Penyusunan dan Evaluasi Rencana Pembangunan Industri Kabupaten/Kota"
  },
  {
    "kode_program": "3.31.03",
    "kode_kegiatan": "3.31.03.2.01",
    "nama_kegiatan": "Penerbitan Izin Usaha Industri (IUI), Izin Perluasan Usaha Industri (IPUI), Izin Usaha Kawasan Industri (IUKI) dan Izin Perluasan Kawasan Industri (IPKI) Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "3.31.04",
    "kode_kegiatan": "3.31.04.2.01",
    "nama_kegiatan": "Penyediaan Informasi Industri untuk Informasi Industri untuk IUI, IPUI, IUKI dan IPKI Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "3.32.03",
    "kode_kegiatan": "3.32.03.2.01",
    "nama_kegiatan": "Penataan Persebaran Penduduk yang Berasal dari 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.32.03",
    "kode_kegiatan": "3.32.03.2.01",
    "nama_kegiatan": "Penataan Persebaran Penduduk yang Berasal dari 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.09.03",
    "kode_kegiatan": "2.09.03.2.01",
    "nama_kegiatan": "Penyediaan dan Penyaluran Pangan Pokok atau Pangan Lainnya sesuai dengan Kebutuhan Daerah Kabupaten/Kota dalam rangka Stabilisasi Pasokan dan Harga Pangan"
  },
  {
    "kode_program": "2.09.03",
    "kode_kegiatan": "2.09.03.2.01",
    "nama_kegiatan": "Penyediaan dan Penyaluran Pangan Pokok atau Pangan Lainnya sesuai dengan Kebutuhan Daerah Kabupaten/Kota dalam rangka Stabilisasi Pasokan dan Harga Pangan"
  },
  {
    "kode_program": "2.09.03",
    "kode_kegiatan": "2.09.03.2.02",
    "nama_kegiatan": "Pengelolaan dan Keseimbangan Cadangan Pangan Kabupaten/Kota"
  },
  {
    "kode_program": "2.09.03",
    "kode_kegiatan": "2.09.03.2.04",
    "nama_kegiatan": "Pelaksanaan Pencapaian Target Konsumsi Pangan Perkapita/Tahun sesuai dengan Angka Kecukupan Gizi"
  },
  {
    "kode_program": "2.09.03",
    "kode_kegiatan": "2.09.03.2.04",
    "nama_kegiatan": "Pelaksanaan Pencapaian Target Konsumsi Pangan Perkapita/Tahun sesuai dengan Angka Kecukupan Gizi"
  },
  {
    "kode_program": "2.09.04",
    "kode_kegiatan": "2.09.04.2.02",
    "nama_kegiatan": "Penanganan Kerawanan Pangan Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "2.09.05",
    "kode_kegiatan": "2.09.05.2.01",
    "nama_kegiatan": "Pelaksanaan Pengawasan Keamanan Pangan Segar Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.09.05",
    "kode_kegiatan": "2.09.05.2.01",
    "nama_kegiatan": "Pelaksanaan Pengawasan Keamanan Pangan Segar Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.09.01",
    "kode_kegiatan": "2.09.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.02",
    "kode_kegiatan": "3.27.02.2.05",
    "nama_kegiatan": "Pengendalian dan Pengawasan Penyediaan dan Peredaran Benih/Bibit Ternak, dan Hijauan Pakan Ternak dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.04",
    "kode_kegiatan": "3.27.04.2.01",
    "nama_kegiatan": "Penjaminan Kesehatan Hewan, Penutupan dan Pembukaan Daerah Wabah Penyakit Hewan Menular Dalam daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.27.04",
    "kode_kegiatan": "3.27.04.2.03",
    "nama_kegiatan": "Pengelolaan Pelayanan Jasa Laboratorium dan Jasa Medik Veteriner dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.27.07",
    "kode_kegiatan": "3.27.07.2.01",
    "nama_kegiatan": "Pelaksanaan Penyuluhan Pertanian"
  },
  {
    "kode_program": "2.11.02",
    "kode_kegiatan": "2.11.02.2.01",
    "nama_kegiatan": "Rencana Perlindungan dan Pengelolaan Lingkungan Hidup (RPPLH) Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.02",
    "kode_kegiatan": "2.11.02.2.01",
    "nama_kegiatan": "Rencana Perlindungan dan Pengelolaan Lingkungan Hidup (RPPLH) Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.02",
    "kode_kegiatan": "2.11.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Kajian Lingkungan Hidup Strategis (KLHS) Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.02",
    "kode_kegiatan": "2.11.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Kajian Lingkungan Hidup Strategis (KLHS) Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.02",
    "kode_kegiatan": "2.11.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Kajian Lingkungan Hidup Strategis (KLHS) Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.03",
    "kode_kegiatan": "2.11.03.2.01",
    "nama_kegiatan": "Pencegahan Pencemaran dan/atau Kerusakan Lingkungan Hidup Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.03",
    "kode_kegiatan": "2.11.03.2.01",
    "nama_kegiatan": "Pencegahan Pencemaran dan/atau Kerusakan Lingkungan Hidup Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.03",
    "kode_kegiatan": "2.11.03.2.01",
    "nama_kegiatan": "Pencegahan Pencemaran dan/atau Kerusakan Lingkungan Hidup Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.03",
    "kode_kegiatan": "2.11.03.2.02",
    "nama_kegiatan": "Penanggulangan Pencemaran dan/atau Kerusakan Lingkungan Hidup Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.03",
    "kode_kegiatan": "2.11.03.2.02",
    "nama_kegiatan": "Penanggulangan Pencemaran dan/atau Kerusakan Lingkungan Hidup Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.03",
    "kode_kegiatan": "2.11.03.2.03",
    "nama_kegiatan": "Pemulihan Pencemaran dan/atau Kerusakan Lingkungan Hidup Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.04",
    "kode_kegiatan": "2.11.04.2.01",
    "nama_kegiatan": "Pengelolaan Keanekaragaman Hayati Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.04",
    "kode_kegiatan": "2.11.04.2.01",
    "nama_kegiatan": "Pengelolaan Keanekaragaman Hayati Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.04",
    "kode_kegiatan": "2.11.04.2.01",
    "nama_kegiatan": "Pengelolaan Keanekaragaman Hayati Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.04",
    "kode_kegiatan": "2.11.04.2.01",
    "nama_kegiatan": "Pengelolaan Keanekaragaman Hayati Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.05",
    "kode_kegiatan": "2.11.05.2.01",
    "nama_kegiatan": "Penyimpanan sementara Limbah B3"
  },
  {
    "kode_program": "2.11.05",
    "kode_kegiatan": "2.11.05.2.01",
    "nama_kegiatan": "Penyimpanan sementara Limbah B3"
  },
  {
    "kode_program": "2.11.06",
    "kode_kegiatan": "2.11.06.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Terhadap Usaha dan/atau Kegiatan yang Izin Lingkungan dan Izin PPLH Diterbitkan oleh Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.08",
    "kode_kegiatan": "2.11.08.2.01",
    "nama_kegiatan": "Penyelenggaraan Pendidikan, Pelatihan, dan Penyuluhan Lingkungan Hidup untuk Lembaga Kemasyarakatan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.08",
    "kode_kegiatan": "2.11.08.2.01",
    "nama_kegiatan": "Penyelenggaraan Pendidikan, Pelatihan, dan Penyuluhan Lingkungan Hidup untuk Lembaga Kemasyarakatan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.09",
    "kode_kegiatan": "2.11.09.2.01",
    "nama_kegiatan": "Pemberian Penghargaan Lingkungan Hidup Tingkat Daerah Kabupaten/Kota "
  },
  {
    "kode_program": "2.11.10",
    "kode_kegiatan": "2.11.10.2.01",
    "nama_kegiatan": "Penyelesaian Pengaduan Masyarakat di Bidang Perlindungan dan Pengelolaan Lingkungan Hidup (PPLH) Kabupaten/Kota"
  },
  {
    "kode_program": "2.11.11",
    "kode_kegiatan": "2.11.11.2.01",
    "nama_kegiatan": "Pengelolaan Sampah"
  },
  {
    "kode_program": "2.11.11",
    "kode_kegiatan": "2.11.11.2.01",
    "nama_kegiatan": "Pengelolaan Sampah"
  },
  {
    "kode_program": "2.11.11",
    "kode_kegiatan": "2.11.11.2.01",
    "nama_kegiatan": "Pengelolaan Sampah"
  },
  {
    "kode_program": "2.11.11",
    "kode_kegiatan": "2.11.11.2.01",
    "nama_kegiatan": "Pengelolaan Sampah"
  },
  {
    "kode_program": "2.11.11",
    "kode_kegiatan": "2.11.11.2.01",
    "nama_kegiatan": "Pengelolaan Sampah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.11.01",
    "kode_kegiatan": "2.11.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.01",
    "nama_kegiatan": "Pelayanan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.01",
    "nama_kegiatan": "Pelayanan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.01",
    "nama_kegiatan": "Pelayanan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.01",
    "nama_kegiatan": "Pelayanan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.02",
    "nama_kegiatan": "Penataan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.02",
    "nama_kegiatan": "Penataan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.03",
    "nama_kegiatan": "Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.03",
    "nama_kegiatan": "Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.03",
    "nama_kegiatan": "Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.03",
    "nama_kegiatan": "Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.04",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.04",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.02",
    "kode_kegiatan": "2.12.02.2.04",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Pendaftaran Penduduk"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.01",
    "nama_kegiatan": "Pelayanan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.01",
    "nama_kegiatan": "Pelayanan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.01",
    "nama_kegiatan": "Pelayanan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.03",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.03",
    "kode_kegiatan": "2.12.03.2.03",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Pencatatan Sipil"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.01",
    "nama_kegiatan": "Pengumpulan Data Kependudukan dan Pemanfaatan dan Penyajian Database Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.01",
    "nama_kegiatan": "Pengumpulan Data Kependudukan dan Pemanfaatan dan Penyajian Database Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.01",
    "nama_kegiatan": "Pengumpulan Data Kependudukan dan Pemanfaatan dan Penyajian Database Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.02",
    "nama_kegiatan": "Penataan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.03",
    "nama_kegiatan": "Penyelenggaraan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.03",
    "nama_kegiatan": "Penyelenggaraan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.03",
    "nama_kegiatan": "Penyelenggaraan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.03",
    "nama_kegiatan": "Penyelenggaraan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.03",
    "nama_kegiatan": "Penyelenggaraan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.03",
    "nama_kegiatan": "Penyelenggaraan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.04",
    "nama_kegiatan": "Pembinaan dan Pengawasan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.04",
    "kode_kegiatan": "2.12.04.2.04",
    "nama_kegiatan": "Pembinaan dan Pengawasan Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_program": "2.12.05",
    "kode_kegiatan": "2.12.05.2.01",
    "nama_kegiatan": "Penyusunan Profil Kependudukan"
  },
  {
    "kode_program": "2.12.05",
    "kode_kegiatan": "2.12.05.2.01",
    "nama_kegiatan": "Penyusunan Profil Kependudukan"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.12.01",
    "kode_kegiatan": "2.12.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.13.02",
    "kode_kegiatan": "2.13.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Penataan Desa"
  },
  {
    "kode_program": "2.13.03",
    "kode_kegiatan": "2.13.03.2.01",
    "nama_kegiatan": "Fasilitasi Kerja Sama antar Desa"
  },
  {
    "kode_program": "2.13.03",
    "kode_kegiatan": "2.13.03.2.01",
    "nama_kegiatan": "Fasilitasi Kerja Sama antar Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.04",
    "kode_kegiatan": "2.13.04.2.01",
    "nama_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_program": "2.13.05",
    "kode_kegiatan": "2.13.05.2.01",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan yang Bergerak di Bidang Pemberdayaan Desa dan Lembaga Adat Tingkat Daerah Kabupaten/Kota serta Pemberdayaan Masyarakat Hukum Adat yang Masyarakat Pelakunya Hukum Adat yang Sama dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.13.05",
    "kode_kegiatan": "2.13.05.2.01",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan yang Bergerak di Bidang Pemberdayaan Desa dan Lembaga Adat Tingkat Daerah Kabupaten/Kota serta Pemberdayaan Masyarakat Hukum Adat yang Masyarakat Pelakunya Hukum Adat yang Sama dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.13.05",
    "kode_kegiatan": "2.13.05.2.01",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan yang Bergerak di Bidang Pemberdayaan Desa dan Lembaga Adat Tingkat Daerah Kabupaten/Kota serta Pemberdayaan Masyarakat Hukum Adat yang Masyarakat Pelakunya Hukum Adat yang Sama dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.13.05",
    "kode_kegiatan": "2.13.05.2.01",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan yang Bergerak di Bidang Pemberdayaan Desa dan Lembaga Adat Tingkat Daerah Kabupaten/Kota serta Pemberdayaan Masyarakat Hukum Adat yang Masyarakat Pelakunya Hukum Adat yang Sama dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.13.05",
    "kode_kegiatan": "2.13.05.2.01",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan yang Bergerak di Bidang Pemberdayaan Desa dan Lembaga Adat Tingkat Daerah Kabupaten/Kota serta Pemberdayaan Masyarakat Hukum Adat yang Masyarakat Pelakunya Hukum Adat yang Sama dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.13.05",
    "kode_kegiatan": "2.13.05.2.01",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan yang Bergerak di Bidang Pemberdayaan Desa dan Lembaga Adat Tingkat Daerah Kabupaten/Kota serta Pemberdayaan Masyarakat Hukum Adat yang Masyarakat Pelakunya Hukum Adat yang Sama dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.13.01",
    "kode_kegiatan": "2.13.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.08.02",
    "kode_kegiatan": "2.08.02.2.01",
    "nama_kegiatan": "Pelembagaan Pengarusutamaan Gender (PUG) pada Lembaga Pemerintah Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "2.08.02",
    "kode_kegiatan": "2.08.02.2.02",
    "nama_kegiatan": "Pemberdayaan Perempuan Bidang Politik, Hukum, Sosial, dan Ekonomi pada Organisasi Kemasyarakatan Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "2.08.02",
    "kode_kegiatan": "2.08.02.2.03",
    "nama_kegiatan": "Penguatan dan Pengembangan Lembaga Penyedia Layanan Pemberdayaan Perempuan Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "2.08.03",
    "kode_kegiatan": "2.08.03.2.03",
    "nama_kegiatan": "Penguatan dan Pengembangan Lembaga Penyedia Layanan Perlindungan Perempuan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.08.06",
    "kode_kegiatan": "2.08.06.2.02",
    "nama_kegiatan": "Penguatan dan Pengembangan Lembaga Penyedia Layanan Peningkatan Kualitas Hidup Anak Kewenangan Kabupaten/Kota"
  },
  {
    "kode_program": "2.08.07",
    "kode_kegiatan": "2.08.07.2.02",
    "nama_kegiatan": "Penyediaan Layanan bagi Anak yang Memerlukan Perlindungan Khusus yang Memerlukan Koordinasi Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.08.07",
    "kode_kegiatan": "2.08.07.2.02",
    "nama_kegiatan": "Penyediaan Layanan bagi Anak yang Memerlukan Perlindungan Khusus yang Memerlukan Koordinasi Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.02",
    "kode_kegiatan": "2.14.02.2.01",
    "nama_kegiatan": "Pemaduan dan Sinkronisasi Kebijakan Pemerintah Daerah Provinsi dengan Pemerintah Daerah Kabupaten/Kota dalam rangka Pengendalian Kuantitas Penduduk"
  },
  {
    "kode_program": "2.14.02",
    "kode_kegiatan": "2.14.02.2.02",
    "nama_kegiatan": "Pemetaan Perkiraan Pengendalian Penduduk Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.02",
    "kode_kegiatan": "2.14.02.2.02",
    "nama_kegiatan": "Pemetaan Perkiraan Pengendalian Penduduk Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.02",
    "kode_kegiatan": "2.14.02.2.02",
    "nama_kegiatan": "Pemetaan Perkiraan Pengendalian Penduduk Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.02",
    "kode_kegiatan": "2.14.02.2.02",
    "nama_kegiatan": "Pemetaan Perkiraan Pengendalian Penduduk Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.01",
    "nama_kegiatan": "Pelaksanaan Advokasi, Komunikasi, Informasi dan Edukasi (KIE) Pengendalian Penduduk dan KB Sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.01",
    "nama_kegiatan": "Pelaksanaan Advokasi, Komunikasi, Informasi dan Edukasi (KIE) Pengendalian Penduduk dan KB Sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.01",
    "nama_kegiatan": "Pelaksanaan Advokasi, Komunikasi, Informasi dan Edukasi (KIE) Pengendalian Penduduk dan KB Sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.01",
    "nama_kegiatan": "Pelaksanaan Advokasi, Komunikasi, Informasi dan Edukasi (KIE) Pengendalian Penduduk dan KB Sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.01",
    "nama_kegiatan": "Pelaksanaan Advokasi, Komunikasi, Informasi dan Edukasi (KIE) Pengendalian Penduduk dan KB Sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.01",
    "nama_kegiatan": "Pelaksanaan Advokasi, Komunikasi, Informasi dan Edukasi (KIE) Pengendalian Penduduk dan KB Sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.02",
    "nama_kegiatan": "Pendayagunaan Tenaga Penyuluh KB/Petugas Lapangan KB (PKB/PLKB)"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.02",
    "nama_kegiatan": "Pendayagunaan Tenaga Penyuluh KB/Petugas Lapangan KB (PKB/PLKB)"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.03",
    "nama_kegiatan": "Pengendalian dan Pendistribusian Kebutuhan Alat dan Obat Kontrasepsi serta Pelaksanaan Pelayanan KB di Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.04",
    "nama_kegiatan": "Pemberdayaan dan Peningkatan Peran Serta Organisasi Kemasyarakatan Tingkat Daerah Kabupaten/Kota dalam Pelaksanaan Pelayanan dan Pembinaan Kesertaan Ber-KB"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.04",
    "nama_kegiatan": "Pemberdayaan dan Peningkatan Peran Serta Organisasi Kemasyarakatan Tingkat Daerah Kabupaten/Kota dalam Pelaksanaan Pelayanan dan Pembinaan Kesertaan Ber-KB"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.04",
    "nama_kegiatan": "Pemberdayaan dan Peningkatan Peran Serta Organisasi Kemasyarakatan Tingkat Daerah Kabupaten/Kota dalam Pelaksanaan Pelayanan dan Pembinaan Kesertaan Ber-KB"
  },
  {
    "kode_program": "2.14.03",
    "kode_kegiatan": "2.14.03.2.04",
    "nama_kegiatan": "Pemberdayaan dan Peningkatan Peran Serta Organisasi Kemasyarakatan Tingkat Daerah Kabupaten/Kota dalam Pelaksanaan Pelayanan dan Pembinaan Kesertaan Ber-KB"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.01",
    "nama_kegiatan": "Pelaksanaan Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.01",
    "nama_kegiatan": "Pelaksanaan Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.01",
    "nama_kegiatan": "Pelaksanaan Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.01",
    "nama_kegiatan": "Pelaksanaan Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.01",
    "nama_kegiatan": "Pelaksanaan Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.01",
    "nama_kegiatan": "Pelaksanaan Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.02",
    "nama_kegiatan": "Pelaksanaan dan Peningkatan Peran Serta Organisasi Kemasyarakatan Tingkat Daerah Kabupaten/ Kota dalam Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.04",
    "kode_kegiatan": "2.14.04.2.02",
    "nama_kegiatan": "Pelaksanaan dan Peningkatan Peran Serta Organisasi Kemasyarakatan Tingkat Daerah Kabupaten/ Kota dalam Pembangunan Keluarga Melalui Pembinaan Ketahanan dan Kesejahteraan Keluarga"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.14.01",
    "kode_kegiatan": "2.14.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.01",
    "nama_kegiatan": "Penetapan Rencana Induk Jaringan LLAJ Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.02",
    "nama_kegiatan": "Penyediaan Perlengkapan Jalan di Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.02",
    "nama_kegiatan": "Penyediaan Perlengkapan Jalan di Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.02",
    "nama_kegiatan": "Penyediaan Perlengkapan Jalan di Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.02",
    "nama_kegiatan": "Penyediaan Perlengkapan Jalan di Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.03",
    "nama_kegiatan": "Pengelolaan Terminal Penumpang Tipe C"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.03",
    "nama_kegiatan": "Pengelolaan Terminal Penumpang Tipe C"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.04",
    "nama_kegiatan": "Penerbitan Izin Penyelenggaraan dan Pembangunan Fasilitas Parkir"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.05",
    "nama_kegiatan": "Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.05",
    "nama_kegiatan": "Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.05",
    "nama_kegiatan": "Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.05",
    "nama_kegiatan": "Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.05",
    "nama_kegiatan": "Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.06",
    "nama_kegiatan": "Pelaksanaan Manajemen dan Rekayasa Lalu Lintas untuk Jaringan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.06",
    "nama_kegiatan": "Pelaksanaan Manajemen dan Rekayasa Lalu Lintas untuk Jaringan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.06",
    "nama_kegiatan": "Pelaksanaan Manajemen dan Rekayasa Lalu Lintas untuk Jaringan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.06",
    "nama_kegiatan": "Pelaksanaan Manajemen dan Rekayasa Lalu Lintas untuk Jaringan Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.07",
    "nama_kegiatan": "Persetujuan Hasil Analisis Dampak Lalu Lintas (Andalalin) untuk Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.07",
    "nama_kegiatan": "Persetujuan Hasil Analisis Dampak Lalu Lintas (Andalalin) untuk Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.07",
    "nama_kegiatan": "Persetujuan Hasil Analisis Dampak Lalu Lintas (Andalalin) untuk Jalan Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.08",
    "nama_kegiatan": "Audit dan Inspeksi Keselamatan LLAJ di Jalan"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.09",
    "nama_kegiatan": "Penyediaan Angkutan Umum untuk Jasa Angkutan Orang dan/atau Barang Antar Kota dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.09",
    "nama_kegiatan": "Penyediaan Angkutan Umum untuk Jasa Angkutan Orang dan/atau Barang Antar Kota dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.02",
    "kode_kegiatan": "2.15.02.2.11",
    "nama_kegiatan": "Penetapan Rencana Umum Jaringan Trayek Perkotaan dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.15.01",
    "kode_kegiatan": "2.15.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.16.02",
    "kode_kegiatan": "2.16.02.2.01",
    "nama_kegiatan": "Pengelolaan Informasi dan Komunikasi Publik Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.02",
    "kode_kegiatan": "2.16.02.2.01",
    "nama_kegiatan": "Pengelolaan Informasi dan Komunikasi Publik Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.02",
    "kode_kegiatan": "2.16.02.2.01",
    "nama_kegiatan": "Pengelolaan Informasi dan Komunikasi Publik Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.03",
    "kode_kegiatan": "2.16.03.2.01",
    "nama_kegiatan": "Pengelolaan Nama Domain yang Telah Ditetapkan oleh Pemerintah Pusat dan Sub Domain di Lingkup Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.03",
    "kode_kegiatan": "2.16.03.2.02",
    "nama_kegiatan": "Pengelolaan E-government di Lingkup Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.03",
    "kode_kegiatan": "2.16.03.2.02",
    "nama_kegiatan": "Pengelolaan E-government di Lingkup Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.03",
    "kode_kegiatan": "2.16.03.2.02",
    "nama_kegiatan": "Pengelolaan E-government di Lingkup Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.16.01",
    "kode_kegiatan": "2.16.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.20.02",
    "kode_kegiatan": "2.20.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Statistik Sektoral di Lingkup Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.20.02",
    "kode_kegiatan": "2.20.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Statistik Sektoral di Lingkup Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.20.02",
    "kode_kegiatan": "2.20.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Statistik Sektoral di Lingkup Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.21.02",
    "kode_kegiatan": "2.21.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Persandian untuk Pengamanan Informasi Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.21.02",
    "kode_kegiatan": "2.21.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Persandian untuk Pengamanan Informasi Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.21.02",
    "kode_kegiatan": "2.21.02.2.02",
    "nama_kegiatan": "Penetapan Pola Hubungan Komunikasi Sandi Antar Perangkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.17.02",
    "kode_kegiatan": "2.17.02.2.01",
    "nama_kegiatan": "Penerbitan Izin Usaha Simpan Pinjam untuk Koperasi dengan Wilayah Keanggotaan dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.17.03",
    "kode_kegiatan": "2.17.03.2.01",
    "nama_kegiatan": "Pemeriksaan dan Pengawasan Koperasi, Koperasi Simpan Pinjam/Unit Simpan Pinjam Koperasi yang Wilayah Keanggotaannya dalam Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "2.17.03",
    "kode_kegiatan": "2.17.03.2.01",
    "nama_kegiatan": "Pemeriksaan dan Pengawasan Koperasi, Koperasi Simpan Pinjam/Unit Simpan Pinjam Koperasi yang Wilayah Keanggotaannya dalam Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "2.17.04",
    "kode_kegiatan": "2.17.04.2.01",
    "nama_kegiatan": "Penilaian Kesehatan Koperasi Simpan Pinjam/Unit Simpan Pinjam Koperasi yang Wilayah Keanggotaanya dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.17.05",
    "kode_kegiatan": "2.17.05.2.01",
    "nama_kegiatan": "Pendidikan dan Latihan Perkoperasian Bagi Koperasi yang Wilayah Keanggotaan dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.17.06",
    "kode_kegiatan": "2.17.06.2.01",
    "nama_kegiatan": "Pemberdayaan dan Perlindungan Koperasi yang Keanggotaannya dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.17.07",
    "kode_kegiatan": "2.17.07.2.01",
    "nama_kegiatan": "Pemberdayaan Usaha Mikro yang Dilakukan Melalui Pendataan, Kemitraan, Kemudahan Perizinan, Penguatan Kelembagaan dan Koordinasi dengan Para Pemangku Kepentingan"
  },
  {
    "kode_program": "2.17.07",
    "kode_kegiatan": "2.17.07.2.01",
    "nama_kegiatan": "Pemberdayaan Usaha Mikro yang Dilakukan Melalui Pendataan, Kemitraan, Kemudahan Perizinan, Penguatan Kelembagaan dan Koordinasi dengan Para Pemangku Kepentingan"
  },
  {
    "kode_program": "2.17.07",
    "kode_kegiatan": "2.17.07.2.01",
    "nama_kegiatan": "Pemberdayaan Usaha Mikro yang Dilakukan Melalui Pendataan, Kemitraan, Kemudahan Perizinan, Penguatan Kelembagaan dan Koordinasi dengan Para Pemangku Kepentingan"
  },
  {
    "kode_program": "2.17.07",
    "kode_kegiatan": "2.17.07.2.01",
    "nama_kegiatan": "Pemberdayaan Usaha Mikro yang Dilakukan Melalui Pendataan, Kemitraan, Kemudahan Perizinan, Penguatan Kelembagaan dan Koordinasi dengan Para Pemangku Kepentingan"
  },
  {
    "kode_program": "2.17.07",
    "kode_kegiatan": "2.17.07.2.01",
    "nama_kegiatan": "Pemberdayaan Usaha Mikro yang Dilakukan Melalui Pendataan, Kemitraan, Kemudahan Perizinan, Penguatan Kelembagaan dan Koordinasi dengan Para Pemangku Kepentingan"
  },
  {
    "kode_program": "2.17.08",
    "kode_kegiatan": "2.17.08.2.01",
    "nama_kegiatan": "Pengembangan Usaha Mikro dengan Orientasi Peningkatan Skala Usaha Menjadi Usaha Kecil"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.17.01",
    "kode_kegiatan": "2.17.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.30.02",
    "kode_kegiatan": "3.30.02.2.02",
    "nama_kegiatan": "Penerbitan Tanda Daftar Gudang"
  },
  {
    "kode_program": "3.30.02",
    "kode_kegiatan": "3.30.02.2.03",
    "nama_kegiatan": "Penerbitan Surat Tanda Pendaftaran Waralaba (STPW) untuk Penerima Waralaba dari Waralaba Dalam Negeri"
  },
  {
    "kode_program": "3.30.02",
    "kode_kegiatan": "3.30.02.2.06",
    "nama_kegiatan": "Pengendalian Fasilitas Penyimpanan Bahan Berbahaya dan Pengawasan Distribusi, Pengemasan dan Pelabelan Bahan Berbahaya di Tingkat Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "3.30.03",
    "kode_kegiatan": "3.30.03.2.01",
    "nama_kegiatan": "Pembangunan dan Pengelolaan Sarana Distribusi Perdagangan"
  },
  {
    "kode_program": "3.30.03",
    "kode_kegiatan": "3.30.03.2.01",
    "nama_kegiatan": "Pembangunan dan Pengelolaan Sarana Distribusi Perdagangan"
  },
  {
    "kode_program": "3.30.03",
    "kode_kegiatan": "3.30.03.2.02",
    "nama_kegiatan": "Pembinaan Terhadap Pengelola Sarana Distribusi Perdagangan Masyarakat di Wilayah Kerjanya"
  },
  {
    "kode_program": "3.30.03",
    "kode_kegiatan": "3.30.03.2.02",
    "nama_kegiatan": "Pembinaan Terhadap Pengelola Sarana Distribusi Perdagangan Masyarakat di Wilayah Kerjanya"
  },
  {
    "kode_program": "3.30.04",
    "kode_kegiatan": "3.30.04.2.01",
    "nama_kegiatan": "Menjamin Ketersediaan Barang Kebutuhan Pokok dan Barang Penting di Tingkat Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "3.30.04",
    "kode_kegiatan": "3.30.04.2.01",
    "nama_kegiatan": "Menjamin Ketersediaan Barang Kebutuhan Pokok dan Barang Penting di Tingkat Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "3.30.04",
    "kode_kegiatan": "3.30.04.2.02",
    "nama_kegiatan": "Pengendalian Harga, dan Stok Barang Kebutuhan Pokok dan Barang Penting di Tingkat Pasar Kabupaten/Kota"
  },
  {
    "kode_program": "3.30.04",
    "kode_kegiatan": "3.30.04.2.02",
    "nama_kegiatan": "Pengendalian Harga, dan Stok Barang Kebutuhan Pokok dan Barang Penting di Tingkat Pasar Kabupaten/Kota"
  },
  {
    "kode_program": "3.30.04",
    "kode_kegiatan": "3.30.04.2.03",
    "nama_kegiatan": "Pengawasan Pupuk dan Pestisida Bersubsidi di Tingkat Daerah Kabupaten/Kota "
  },
  {
    "kode_program": "3.30.05",
    "kode_kegiatan": "3.30.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Promosi Dagang Melalui Pameran Dagang dan Misi Dagang bagi Produk Ekspor Unggulan yang Terdapat pada 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.30.05",
    "kode_kegiatan": "3.30.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Promosi Dagang Melalui Pameran Dagang dan Misi Dagang bagi Produk Ekspor Unggulan yang Terdapat pada 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.30.06",
    "kode_kegiatan": "3.30.06.2.01",
    "nama_kegiatan": "Pelaksanaan Metrologi Legal, Berupa Tera, Tera Ulang, dan Pengawasan"
  },
  {
    "kode_program": "3.30.06",
    "kode_kegiatan": "3.30.06.2.01",
    "nama_kegiatan": "Pelaksanaan Metrologi Legal, Berupa Tera, Tera Ulang, dan Pengawasan"
  },
  {
    "kode_program": "3.30.07",
    "kode_kegiatan": "3.30.07.2.01",
    "nama_kegiatan": "Pelaksanaan Promosi, Pemasaran dan Peningkatan Penggunaan Produk Dalam Negeri"
  },
  {
    "kode_program": "3.30.07",
    "kode_kegiatan": "3.30.07.2.01",
    "nama_kegiatan": "Pelaksanaan Promosi, Pemasaran dan Peningkatan Penggunaan Produk Dalam Negeri"
  },
  {
    "kode_program": "2.18.02",
    "kode_kegiatan": "2.18.02.2.01",
    "nama_kegiatan": "Penetapan Pemberian Fasilitas/Insentif Dibidang Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.02",
    "kode_kegiatan": "2.18.02.2.01",
    "nama_kegiatan": "Penetapan Pemberian Fasilitas/Insentif Dibidang Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.02",
    "kode_kegiatan": "2.18.02.2.02",
    "nama_kegiatan": "Pembuatan Peta Potensi Investasi Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.03",
    "kode_kegiatan": "2.18.03.2.01",
    "nama_kegiatan": "Penyelenggaraan Promosi Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.03",
    "kode_kegiatan": "2.18.03.2.01",
    "nama_kegiatan": "Penyelenggaraan Promosi Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.04",
    "kode_kegiatan": "2.18.04.2.01",
    "nama_kegiatan": "Pelayanan Perizinan dan Non Perizinan Secara Terpadu Satu Pintu dibidang Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "2.18.04",
    "kode_kegiatan": "2.18.04.2.01",
    "nama_kegiatan": "Pelayanan Perizinan dan Non Perizinan Secara Terpadu Satu Pintu dibidang Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "2.18.05",
    "kode_kegiatan": "2.18.05.2.01",
    "nama_kegiatan": "Pengendalian Pelaksanaan Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.05",
    "kode_kegiatan": "2.18.05.2.01",
    "nama_kegiatan": "Pengendalian Pelaksanaan Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.05",
    "kode_kegiatan": "2.18.05.2.01",
    "nama_kegiatan": "Pengendalian Pelaksanaan Penanaman Modal yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.06",
    "kode_kegiatan": "2.18.06.2.01",
    "nama_kegiatan": "Pengelolaan Data dan Informasi Perizinan dan Non Perizinan yang Terintegrasi pada Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.18.01",
    "kode_kegiatan": "2.18.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.19.02",
    "kode_kegiatan": "2.19.02.2.01",
    "nama_kegiatan": "Penyadaran, Pemberdayaan, dan Pengembangan Pemuda dan Kepemudaan Terhadap Pemuda Pelopor Kabupaten/Kota, Wirausaha Muda Pemula, dan Pemuda Kader Kabupaten/Kota"
  },
  {
    "kode_program": "2.19.02",
    "kode_kegiatan": "2.19.02.2.01",
    "nama_kegiatan": "Penyadaran, Pemberdayaan, dan Pengembangan Pemuda dan Kepemudaan Terhadap Pemuda Pelopor Kabupaten/Kota, Wirausaha Muda Pemula, dan Pemuda Kader Kabupaten/Kota"
  },
  {
    "kode_program": "2.19.02",
    "kode_kegiatan": "2.19.02.2.01",
    "nama_kegiatan": "Penyadaran, Pemberdayaan, dan Pengembangan Pemuda dan Kepemudaan Terhadap Pemuda Pelopor Kabupaten/Kota, Wirausaha Muda Pemula, dan Pemuda Kader Kabupaten/Kota"
  },
  {
    "kode_program": "2.19.03",
    "kode_kegiatan": "2.19.03.2.01",
    "nama_kegiatan": "Pembinaan dan Pengembangan Olahraga Pendidikan pada Jenjang Pendidikan yang Menjadi Kewenangan Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.19.03",
    "kode_kegiatan": "2.19.03.2.02",
    "nama_kegiatan": "Penyelenggaraan Kejuaraan Olahraga Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.19.03",
    "kode_kegiatan": "2.19.03.2.03",
    "nama_kegiatan": "Pembinaan dan Pengembangan Olahraga Prestasi Tingkat Daerah Provinsi"
  },
  {
    "kode_program": "2.19.03",
    "kode_kegiatan": "2.19.03.2.05",
    "nama_kegiatan": "Pembinaan dan Pengembangan Olahraga Rekreasi"
  },
  {
    "kode_program": "2.19.03",
    "kode_kegiatan": "2.19.03.2.05",
    "nama_kegiatan": "Pembinaan dan Pengembangan Olahraga Rekreasi"
  },
  {
    "kode_program": "2.19.01",
    "kode_kegiatan": "2.19.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "3.26.02",
    "kode_kegiatan": "3.26.02.2.02",
    "nama_kegiatan": "Pengelolaan Kawasan Strategis Pariwisata Kabupaten/Kota"
  },
  {
    "kode_program": "3.26.02",
    "kode_kegiatan": "3.26.02.2.03",
    "nama_kegiatan": "Pengelolaan Destinasi Pariwisata Kabupaten/Kota"
  },
  {
    "kode_program": "3.26.02",
    "kode_kegiatan": "3.26.02.2.04",
    "nama_kegiatan": "Penetapan Tanda Daftar Usaha Pariwisata Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "3.26.03",
    "kode_kegiatan": "3.26.03.2.01",
    "nama_kegiatan": "Pemasaran Pariwisata Dalam dan Luar Negeri Daya Tarik, Destinasi dan Kawasan Strategis Pariwisata Kabupaten/Kota"
  },
  {
    "kode_program": "3.26.03",
    "kode_kegiatan": "3.26.03.2.01",
    "nama_kegiatan": "Pemasaran Pariwisata Dalam dan Luar Negeri Daya Tarik, Destinasi dan Kawasan Strategis Pariwisata Kabupaten/Kota"
  },
  {
    "kode_program": "3.26.05",
    "kode_kegiatan": "3.26.05.2.01",
    "nama_kegiatan": "Pelaksanaan Peningkatan Kapasitas Sumber Daya Manusia Pariwisata dan Ekonomi Kreatif Tingkat Dasar"
  },
  {
    "kode_program": "3.26.05",
    "kode_kegiatan": "3.26.05.2.01",
    "nama_kegiatan": "Pelaksanaan Peningkatan Kapasitas Sumber Daya Manusia Pariwisata dan Ekonomi Kreatif Tingkat Dasar"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.01",
    "nama_kegiatan": "Pengelolaan Perpustakaan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.01",
    "nama_kegiatan": "Pengelolaan Perpustakaan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.01",
    "nama_kegiatan": "Pengelolaan Perpustakaan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.01",
    "nama_kegiatan": "Pengelolaan Perpustakaan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.01",
    "nama_kegiatan": "Pengelolaan Perpustakaan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.02",
    "nama_kegiatan": "Pembudayaan Gemar Membaca Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.02",
    "nama_kegiatan": "Pembudayaan Gemar Membaca Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.02",
    "nama_kegiatan": "Pembudayaan Gemar Membaca Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.02",
    "kode_kegiatan": "2.23.02.2.02",
    "nama_kegiatan": "Pembudayaan Gemar Membaca Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.23.01",
    "kode_kegiatan": "2.23.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "2.24.02",
    "kode_kegiatan": "2.24.02.2.01",
    "nama_kegiatan": "Pengelolaan Arsip Dinamis Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.02",
    "kode_kegiatan": "2.24.02.2.01",
    "nama_kegiatan": "Pengelolaan Arsip Dinamis Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.02",
    "kode_kegiatan": "2.24.02.2.01",
    "nama_kegiatan": "Pengelolaan Arsip Dinamis Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.02",
    "kode_kegiatan": "2.24.02.2.02",
    "nama_kegiatan": "Pengelolaan Arsip Statis Daerah Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.02",
    "kode_kegiatan": "2.24.02.2.03",
    "nama_kegiatan": "Pengelolaan Simpul Jaringan Informasi Kearsipan Nasional Tingkat Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.02",
    "kode_kegiatan": "2.24.02.2.03",
    "nama_kegiatan": "Pengelolaan Simpul Jaringan Informasi Kearsipan Nasional Tingkat Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.03",
    "kode_kegiatan": "2.24.03.2.01",
    "nama_kegiatan": "Pemusnahan Arsip Dilingkungan Pemerintah Daerah Kabupaten/Kota yang Memiliki Retensi di Bawah 10 (Sepuluh) Tahun"
  },
  {
    "kode_program": "2.24.03",
    "kode_kegiatan": "2.24.03.2.01",
    "nama_kegiatan": "Pemusnahan Arsip Dilingkungan Pemerintah Daerah Kabupaten/Kota yang Memiliki Retensi di Bawah 10 (Sepuluh) Tahun"
  },
  {
    "kode_program": "2.24.03",
    "kode_kegiatan": "2.24.03.2.03",
    "nama_kegiatan": "Penyelamatan Arsip Perangkat Daerah Kabupaten/Kota yang Digabung dan/atau Dibubarkan, dan Pemekaran Daerah Kecamatan dan Desa/Kelurahan"
  },
  {
    "kode_program": "2.24.03",
    "kode_kegiatan": "2.24.03.2.04",
    "nama_kegiatan": "Autentikasi Arsip Statis dan Arsip Hasil Alih Media Kabupaten/Kota"
  },
  {
    "kode_program": "2.24.03",
    "kode_kegiatan": "2.24.03.2.04",
    "nama_kegiatan": "Autentikasi Arsip Statis dan Arsip Hasil Alih Media Kabupaten/Kota"
  },
  {
    "kode_program": "3.25.03",
    "kode_kegiatan": "3.25.03.2.01",
    "nama_kegiatan": "Pengelolaan Penangkapan Ikan di Wilayah Sungai, Danau, Waduk, Rawa, dan Genangan Air Lainnya yang Dapat Diusahakan dalam 1 (Satu) Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "3.25.04",
    "kode_kegiatan": "3.25.04.2.04",
    "nama_kegiatan": "Pengelolaan Pembudidayaan Ikan"
  },
  {
    "kode_program": "3.25.06",
    "kode_kegiatan": "3.25.06.2.03",
    "nama_kegiatan": "Penyediaan dan Penyaluran Bahan Baku Industri Pengolahan Ikan dalam 1 (Satu) Daerah Kabupaten/ Kota"
  },
  {
    "kode_program": "3.27.02",
    "kode_kegiatan": "3.27.02.2.01",
    "nama_kegiatan": "Pengawasan Penggunaan Sarana Pertanian"
  },
  {
    "kode_program": "3.27.02",
    "kode_kegiatan": "3.27.02.2.01",
    "nama_kegiatan": "Pengawasan Penggunaan Sarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.01",
    "nama_kegiatan": "Pengembangan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.01",
    "nama_kegiatan": "Pengembangan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.03",
    "kode_kegiatan": "3.27.03.2.02",
    "nama_kegiatan": "Pembangunan Prasarana Pertanian"
  },
  {
    "kode_program": "3.27.05",
    "kode_kegiatan": "3.27.05.2.01",
    "nama_kegiatan": "Pengendalian dan Penanggulangan Bencana Pertanian Kabupaten/Kota"
  },
  {
    "kode_program": "3.27.07",
    "kode_kegiatan": "3.27.07.2.01",
    "nama_kegiatan": "Pelaksanaan Penyuluhan Pertanian"
  },
  {
    "kode_program": "3.27.07",
    "kode_kegiatan": "3.27.07.2.01",
    "nama_kegiatan": "Pelaksanaan Penyuluhan Pertanian"
  },
  {
    "kode_program": "3.27.07",
    "kode_kegiatan": "3.27.07.2.01",
    "nama_kegiatan": "Pelaksanaan Penyuluhan Pertanian"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "3.27.01",
    "kode_kegiatan": "3.27.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.01",
    "nama_kegiatan": "Administrasi Tata Pemerintahan"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.01",
    "nama_kegiatan": "Administrasi Tata Pemerintahan"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.01",
    "nama_kegiatan": "Administrasi Tata Pemerintahan"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.02",
    "nama_kegiatan": "Pelaksanaan Kebijakan Kesejahteraan Rakyat"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.02",
    "nama_kegiatan": "Pelaksanaan Kebijakan Kesejahteraan Rakyat"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.02",
    "nama_kegiatan": "Pelaksanaan Kebijakan Kesejahteraan Rakyat"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.02",
    "nama_kegiatan": "Pelaksanaan Kebijakan Kesejahteraan Rakyat"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.02",
    "nama_kegiatan": "Pelaksanaan Kebijakan Kesejahteraan Rakyat"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.02",
    "nama_kegiatan": "Pelaksanaan Kebijakan Kesejahteraan Rakyat"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.03",
    "nama_kegiatan": "Fasilitasi dan Koordinasi Hukum"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.03",
    "nama_kegiatan": "Fasilitasi dan Koordinasi Hukum"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.03",
    "nama_kegiatan": "Fasilitasi dan Koordinasi Hukum"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.04",
    "nama_kegiatan": "Fasilitasi Kerja Sama Daerah"
  },
  {
    "kode_program": "4.01.02",
    "kode_kegiatan": "4.01.02.2.04",
    "nama_kegiatan": "Fasilitasi Kerja Sama Daerah"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.01",
    "nama_kegiatan": "Pelaksanaan Kebijakan Perekonomian"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.01",
    "nama_kegiatan": "Pelaksanaan Kebijakan Perekonomian"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.02",
    "nama_kegiatan": "Pelaksanaan Administrasi Pembangunan"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.02",
    "nama_kegiatan": "Pelaksanaan Administrasi Pembangunan"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.02",
    "nama_kegiatan": "Pelaksanaan Administrasi Pembangunan"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.03",
    "nama_kegiatan": "Pengelolaan Pengadaan Barang dan Jasa"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.03",
    "nama_kegiatan": "Pengelolaan Pengadaan Barang dan Jasa"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.03",
    "nama_kegiatan": "Pengelolaan Pengadaan Barang dan Jasa"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.04",
    "nama_kegiatan": "Pemantauan Kebijakan Sumber Daya Alam"
  },
  {
    "kode_program": "4.01.03",
    "kode_kegiatan": "4.01.03.2.04",
    "nama_kegiatan": "Pemantauan Kebijakan Sumber Daya Alam"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.11",
    "nama_kegiatan": "Administrasi Keuangan dan Operasional Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.11",
    "nama_kegiatan": "Administrasi Keuangan dan Operasional Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.11",
    "nama_kegiatan": "Administrasi Keuangan dan Operasional Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.11",
    "nama_kegiatan": "Administrasi Keuangan dan Operasional Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.12",
    "nama_kegiatan": "Fasilitasi Kerumahtanggaan Sekretariat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.12",
    "nama_kegiatan": "Fasilitasi Kerumahtanggaan Sekretariat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.12",
    "nama_kegiatan": "Fasilitasi Kerumahtanggaan Sekretariat Daerah"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.13",
    "nama_kegiatan": "Penataan Organisasi"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.13",
    "nama_kegiatan": "Penataan Organisasi"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.13",
    "nama_kegiatan": "Penataan Organisasi"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.13",
    "nama_kegiatan": "Penataan Organisasi"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.13",
    "nama_kegiatan": "Penataan Organisasi"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.01.01",
    "kode_kegiatan": "4.01.01.2.14",
    "nama_kegiatan": "Pelaksanaan Protokol dan Komunikasi Pimpinan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.01",
    "nama_kegiatan": "Pembentukan Peraturan Daerah dan Peraturan DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.01",
    "nama_kegiatan": "Pembentukan Peraturan Daerah dan Peraturan DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.01",
    "nama_kegiatan": "Pembentukan Peraturan Daerah dan Peraturan DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.01",
    "nama_kegiatan": "Pembentukan Peraturan Daerah dan Peraturan DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.01",
    "nama_kegiatan": "Pembentukan Peraturan Daerah dan Peraturan DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.02",
    "nama_kegiatan": "Pembahasan Kebijakan Anggaran"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.02",
    "nama_kegiatan": "Pembahasan Kebijakan Anggaran"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.02",
    "nama_kegiatan": "Pembahasan Kebijakan Anggaran"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.02",
    "nama_kegiatan": "Pembahasan Kebijakan Anggaran"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.02",
    "nama_kegiatan": "Pembahasan Kebijakan Anggaran"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.02",
    "nama_kegiatan": "Pembahasan Kebijakan Anggaran"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.03",
    "nama_kegiatan": "Pengawasan Penyelenggaraan Pemerintahan"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.04",
    "nama_kegiatan": "Peningkatan Kapasitas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.05",
    "nama_kegiatan": "Penyerapan dan Penghimpunan Aspirasi Masyarakat"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.05",
    "nama_kegiatan": "Penyerapan dan Penghimpunan Aspirasi Masyarakat"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.05",
    "nama_kegiatan": "Penyerapan dan Penghimpunan Aspirasi Masyarakat"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.06",
    "nama_kegiatan": "Pelaksanaan dan Pengawasan Kode Etik DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.08",
    "nama_kegiatan": "Fasilitasi Tugas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.08",
    "nama_kegiatan": "Fasilitasi Tugas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.08",
    "nama_kegiatan": "Fasilitasi Tugas DPRD"
  },
  {
    "kode_program": "4.02.02",
    "kode_kegiatan": "4.02.02.2.08",
    "nama_kegiatan": "Fasilitasi Tugas DPRD"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.15",
    "nama_kegiatan": "Layanan Keuangan dan Kesejahteraan DPRD"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.15",
    "nama_kegiatan": "Layanan Keuangan dan Kesejahteraan DPRD"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.15",
    "nama_kegiatan": "Layanan Keuangan dan Kesejahteraan DPRD"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.16",
    "nama_kegiatan": "Layanan Administrasi DPRD"
  },
  {
    "kode_program": "4.02.01",
    "kode_kegiatan": "4.02.01.2.16",
    "nama_kegiatan": "Layanan Administrasi DPRD"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.01",
    "nama_kegiatan": "Penyusunan Perencanaan dan Pendanaan"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.01",
    "nama_kegiatan": "Penyusunan Perencanaan dan Pendanaan"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.01",
    "nama_kegiatan": "Penyusunan Perencanaan dan Pendanaan"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.01",
    "nama_kegiatan": "Penyusunan Perencanaan dan Pendanaan"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.01",
    "nama_kegiatan": "Penyusunan Perencanaan dan Pendanaan"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.01",
    "nama_kegiatan": "Penyusunan Perencanaan dan Pendanaan"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.02",
    "nama_kegiatan": "Analisis Data dan Informasi Pemerintahan Daerah Bidang Perencanaan Pembangunan Daerah "
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.02",
    "nama_kegiatan": "Analisis Data dan Informasi Pemerintahan Daerah Bidang Perencanaan Pembangunan Daerah "
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.03",
    "nama_kegiatan": "Pengendalian, Evaluasi dan Pelaporan Bidang Perencanaan Pembangunan Daerah"
  },
  {
    "kode_program": "5.01.02",
    "kode_kegiatan": "5.01.02.2.03",
    "nama_kegiatan": "Pengendalian, Evaluasi dan Pelaporan Bidang Perencanaan Pembangunan Daerah"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.01",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Pemerintahan dan Pembangunan Manusia"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.02",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Perekonomian dan SDA (Sumber Daya Alam)"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.03",
    "kode_kegiatan": "5.01.03.2.03",
    "nama_kegiatan": "Koordinasi Perencanaan Bidang Infrastruktur dan Kewilayahan"
  },
  {
    "kode_program": "5.01.01",
    "kode_kegiatan": "5.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.05.02",
    "kode_kegiatan": "5.05.02.2.01",
    "nama_kegiatan": "Penelitian dan Pengembangan Bidang Penyelenggaraan Pemerintahan dan Pengkajian Peraturan"
  },
  {
    "kode_program": "5.05.02",
    "kode_kegiatan": "5.05.02.2.01",
    "nama_kegiatan": "Penelitian dan Pengembangan Bidang Penyelenggaraan Pemerintahan dan Pengkajian Peraturan"
  },
  {
    "kode_program": "5.05.02",
    "kode_kegiatan": "5.05.02.2.02",
    "nama_kegiatan": "Penelitian dan Pengembangan Bidang Sosial dan Kependudukan"
  },
  {
    "kode_program": "5.05.02",
    "kode_kegiatan": "5.05.02.2.02",
    "nama_kegiatan": "Penelitian dan Pengembangan Bidang Sosial dan Kependudukan"
  },
  {
    "kode_program": "5.05.02",
    "kode_kegiatan": "5.05.02.2.03",
    "nama_kegiatan": "Penelitian dan Pengembangan Bidang Ekonomi dan Pembangunan"
  },
  {
    "kode_program": "5.05.02",
    "kode_kegiatan": "5.05.02.2.04",
    "nama_kegiatan": "Pengembangan Inovasi dan Teknologi"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.01",
    "nama_kegiatan": "Koordinasi dan Penyusunan Rencana Anggaran Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.02",
    "nama_kegiatan": "Koordinasi dan Pengelolaan Perbendaharaan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.02",
    "nama_kegiatan": "Koordinasi dan Pengelolaan Perbendaharaan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.02",
    "nama_kegiatan": "Koordinasi dan Pengelolaan Perbendaharaan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.02",
    "nama_kegiatan": "Koordinasi dan Pengelolaan Perbendaharaan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.02",
    "nama_kegiatan": "Koordinasi dan Pengelolaan Perbendaharaan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.02",
    "nama_kegiatan": "Koordinasi dan Pengelolaan Perbendaharaan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.03",
    "nama_kegiatan": "Koordinasi dan Pelaksanaan Akuntansi dan Pelaporan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.03",
    "nama_kegiatan": "Koordinasi dan Pelaksanaan Akuntansi dan Pelaporan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.03",
    "nama_kegiatan": "Koordinasi dan Pelaksanaan Akuntansi dan Pelaporan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.03",
    "nama_kegiatan": "Koordinasi dan Pelaksanaan Akuntansi dan Pelaporan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.04",
    "nama_kegiatan": "Penunjang Urusan Kewenangan Pengelolaan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.04",
    "nama_kegiatan": "Penunjang Urusan Kewenangan Pengelolaan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.02",
    "kode_kegiatan": "5.02.02.2.04",
    "nama_kegiatan": "Penunjang Urusan Kewenangan Pengelolaan Keuangan Daerah"
  },
  {
    "kode_program": "5.02.03",
    "kode_kegiatan": "5.02.03.2.01",
    "nama_kegiatan": "Pengelolaan Barang Milik Daerah"
  },
  {
    "kode_program": "5.02.03",
    "kode_kegiatan": "5.02.03.2.01",
    "nama_kegiatan": "Pengelolaan Barang Milik Daerah"
  },
  {
    "kode_program": "5.02.03",
    "kode_kegiatan": "5.02.03.2.01",
    "nama_kegiatan": "Pengelolaan Barang Milik Daerah"
  },
  {
    "kode_program": "5.02.03",
    "kode_kegiatan": "5.02.03.2.01",
    "nama_kegiatan": "Pengelolaan Barang Milik Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.04",
    "kode_kegiatan": "5.02.04.2.01",
    "nama_kegiatan": "Kegiatan Pengelolaan Pendapatan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.01",
    "kode_kegiatan": "5.02.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.02.03",
    "kode_kegiatan": "5.02.03.2.01",
    "nama_kegiatan": "Pengelolaan Barang Milik Daerah"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.01",
    "nama_kegiatan": "Pengadaan, Pemberhentian dan Informasi Kepegawaian ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.01",
    "nama_kegiatan": "Pengadaan, Pemberhentian dan Informasi Kepegawaian ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.01",
    "nama_kegiatan": "Pengadaan, Pemberhentian dan Informasi Kepegawaian ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.02",
    "nama_kegiatan": "Mutasi dan Promosi ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.02",
    "nama_kegiatan": "Mutasi dan Promosi ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.02",
    "nama_kegiatan": "Mutasi dan Promosi ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.03",
    "nama_kegiatan": "Pengembangan Kompetensi ASN"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.04",
    "nama_kegiatan": "Penilaian dan Evaluasi Kinerja Aparatur"
  },
  {
    "kode_program": "5.03.02",
    "kode_kegiatan": "5.03.02.2.04",
    "nama_kegiatan": "Penilaian dan Evaluasi Kinerja Aparatur"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "5.03.01",
    "kode_kegiatan": "5.03.01.2.13",
    "nama_kegiatan": "Penataan Organisasi"
  },
  {
    "kode_program": "5.04.02",
    "kode_kegiatan": "5.04.02.2.01",
    "nama_kegiatan": "Pengembangan Kompetensi Teknis"
  },
  {
    "kode_program": "5.04.02",
    "kode_kegiatan": "5.04.02.2.02",
    "nama_kegiatan": "Sertifikasi, Kelembagaan, Pengembangan Kompetensi Manajerial dan Fungsional"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.01",
    "nama_kegiatan": "Penyelenggaraan Pengawasan Internal"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Pengawasan dengan Tujuan Tertentu"
  },
  {
    "kode_program": "6.01.02",
    "kode_kegiatan": "6.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Pengawasan dengan Tujuan Tertentu"
  },
  {
    "kode_program": "6.01.03",
    "kode_kegiatan": "6.01.03.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis di Bidang Pengawasan dan Fasilitasi Pengawasan"
  },
  {
    "kode_program": "6.01.03",
    "kode_kegiatan": "6.01.03.2.02",
    "nama_kegiatan": "Pendampingan dan Asistensi"
  },
  {
    "kode_program": "6.01.03",
    "kode_kegiatan": "6.01.03.2.02",
    "nama_kegiatan": "Pendampingan dan Asistensi"
  },
  {
    "kode_program": "6.01.03",
    "kode_kegiatan": "6.01.03.2.02",
    "nama_kegiatan": "Pendampingan dan Asistensi"
  },
  {
    "kode_program": "6.01.03",
    "kode_kegiatan": "6.01.03.2.02",
    "nama_kegiatan": "Pendampingan dan Asistensi"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "6.01.01",
    "kode_kegiatan": "6.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.01",
    "nama_kegiatan": "Koordinasi Penyelenggaraan Kegiatan Pemerintahan di Tingkat Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.03",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan Tingkat Kecamatan"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "X.XX.01",
    "kode_kegiatan": "X.XX.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.03",
    "nama_kegiatan": "Koordinasi Pemeliharaan Prasarana dan Sarana Pelayanan Umum"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.03",
    "nama_kegiatan": "Administrasi Barang Milik Daerah pada Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.03",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan Tingkat Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.03",
    "nama_kegiatan": "Pemberdayaan Lembaga Kemasyarakatan Tingkat Kecamatan"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.02",
    "nama_kegiatan": "Koordinasi Penerapan dan Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.05",
    "nama_kegiatan": "Administrasi Kepegawaian Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.02",
    "nama_kegiatan": "Kegiatan Pemberdayaan Kelurahan"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.02",
    "kode_kegiatan": "7.01.02.2.02",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan yang Tidak Dilaksanakan oleh Unit Kerja Perangkat Daerah yang Ada di Kecamatan"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.03",
    "kode_kegiatan": "7.01.03.2.01",
    "nama_kegiatan": "Koordinasi Kegiatan Pemberdayaan Desa"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.04",
    "kode_kegiatan": "7.01.04.2.01",
    "nama_kegiatan": "Koordinasi Upaya Penyelenggaraan Ketenteraman dan Ketertiban Umum"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.05",
    "kode_kegiatan": "7.01.05.2.01",
    "nama_kegiatan": "Penyelenggaraan Urusan Pemerintahan Umum Sesuai Penugasan Kepala Daerah"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.06",
    "kode_kegiatan": "7.01.06.2.01",
    "nama_kegiatan": "Fasilitasi, Rekomendasi dan Koordinasi Pembinaan dan Pengawasan Pemerintahan Desa"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.07",
    "nama_kegiatan": "Pengadaan Barang Milik Daerah Penunjang Urusan Pemerintah Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "7.01.01",
    "kode_kegiatan": "7.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "8.01.02",
    "kode_kegiatan": "8.01.02.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pemantapan Pelaksanaan Bidang Ideologi Pancasila dan Karakter Kebangsaan"
  },
  {
    "kode_program": "8.01.03",
    "kode_kegiatan": "8.01.03.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pemantapan Pelaksanaan Bidang Pendidikan Politik, Etika Budaya Politik, Peningkatan Demokrasi, Fasilitasi Kelembagaan Pemerintahan, Perwakilan dan Partai Politik, Pemilihan Umum/Pemilihan Umum Kepala Daerah, serta Pemantauan Situasi Politik"
  },
  {
    "kode_program": "8.01.04",
    "kode_kegiatan": "8.01.04.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pemantapan Pelaksanaan Bidang Pemberdayaan dan Pengawasan Organisasi Kemasyarakatan"
  },
  {
    "kode_program": "8.01.05",
    "kode_kegiatan": "8.01.05.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pemantapan Pelaksanaan Bidang Ketahanan Ekonomi, Sosial dan Budaya"
  },
  {
    "kode_program": "8.01.06",
    "kode_kegiatan": "8.01.06.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pelaksanaan Pemantapan Kewaspadaan Nasional dan Penanganan Konflik Sosial"
  },
  {
    "kode_program": "8.01.06",
    "kode_kegiatan": "8.01.06.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pelaksanaan Pemantapan Kewaspadaan Nasional dan Penanganan Konflik Sosial"
  },
  {
    "kode_program": "8.01.06",
    "kode_kegiatan": "8.01.06.2.01",
    "nama_kegiatan": "Perumusan Kebijakan Teknis dan Pelaksanaan Pemantapan Kewaspadaan Nasional dan Penanganan Konflik Sosial"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.01",
    "nama_kegiatan": "Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.02",
    "nama_kegiatan": "Administrasi Keuangan Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.06",
    "nama_kegiatan": "Administrasi Umum Perangkat Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.08",
    "nama_kegiatan": "Penyediaan Jasa Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  },
  {
    "kode_program": "8.01.01",
    "kode_kegiatan": "8.01.01.2.09",
    "nama_kegiatan": "Pemeliharaan Barang Milik Daerah Penunjang Urusan Pemerintahan Daerah"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const uniqueData = data.reduce((acc, current) => {
      const x = acc.find(item => item.kode_kegiatan === current.kode_kegiatan);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    uniqueData.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Kegiatans', uniqueData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kegiatans', null, {});
  }
};
