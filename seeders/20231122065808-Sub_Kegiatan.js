'use strict';

const data = [
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0003",
    "nama_sub_kegiatan": "Pembangunan Ruang Guru/Kepala Sekolah/TU"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0004",
    "nama_sub_kegiatan": "Pembangunan Ruang Unit Kesehatan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0005",
    "nama_sub_kegiatan": "Pembangunan Perpustakaan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0006",
    "nama_sub_kegiatan": "Pembangunan Sarana, Prasarana dan Utilitas Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0009",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Guru/Kepala Sekolah/TU"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0011",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Perpustakaan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0014",
    "nama_sub_kegiatan": "Pengadaan Mebel Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0021",
    "nama_sub_kegiatan": "Penyediaan Biaya Personil Peserta Didik Sekolah Dasar"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0022",
    "nama_sub_kegiatan": "Pengadaan Alat Praktik dan Peraga Siswa"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0025",
    "nama_sub_kegiatan": "Pembinaan Minat, Bakat dan Kreativitas Siswa"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0026",
    "nama_sub_kegiatan": "Penyediaan Pendidik dan Tenaga Kependidikan bagi Satuan Pendidikan Sekolah Dasar"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0027",
    "nama_sub_kegiatan": "Pengembangan Karir Pendidik dan Tenaga Kependidikan pada Satuan Pendidikan Sekolah Dasar"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0028",
    "nama_sub_kegiatan": "Pembinaan Kelembagaan dan Manajemen Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0029",
    "nama_sub_kegiatan": "Pengelolaan Dana BOS Sekolah Dasar"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0030",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Pengelolaan Dana BOS Sekolah Dasar"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0031",
    "nama_sub_kegiatan": "Pembangunan Laboratorium Sekolah Dasar"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0036",
    "nama_sub_kegiatan": "Pengembangan konten digital untuk pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0037",
    "nama_sub_kegiatan": "Pelatihan Penggunaan Aplikasi Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0038",
    "nama_sub_kegiatan": "Koordinasi, Perencanaan, Supervisi dan Evaluasi Layanan di Bidang Pendidikan "
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0039",
    "nama_sub_kegiatan": "Sosialisasi dan Advokasi Kebijakan Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0041",
    "nama_sub_kegiatan": "Fasilitasi Komunitas Belajar Pendidik dan Tenaga Kependidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0043",
    "nama_sub_kegiatan": "Pemberian layanan pendampingan bagi satuan pendidikan untuk pencegahan perundungan, kekerasan, dan intoleransi"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0046",
    "nama_sub_kegiatan": "Pengadaan Perlengkapan Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0047",
    "nama_sub_kegiatan": "Pembangunan Ruang Kelas Baru"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0048",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Sarana, Prasarana dan Utilitas Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0049",
    "nama_sub_kegiatan": "Bimbingan Teknis, Pelatihan, dan/atau Magang/PKL untuk Peningkatan Kapasitas Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0050",
    "nama_sub_kegiatan": "Penyelenggaraan Proses Belajar Bagi Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.02.2.01",
    "kode_sub_kegiatan": "1.01.02.2.01.0051",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Kelas Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0003",
    "nama_sub_kegiatan": "Pembangunan Ruang Guru/Kepala Sekolah/TU"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0004",
    "nama_sub_kegiatan": "Pembangunan Ruang Unit Kesehatan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0005",
    "nama_sub_kegiatan": "Pembangunan Perpustakaan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0006",
    "nama_sub_kegiatan": "Pembangunan Laboratorium"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0012",
    "nama_sub_kegiatan": "Pembangunan Sarana, Prasarana dan Utilitas Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0014",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Kelas Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0016",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Unit Kesehatan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0017",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Perpustakaan Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0018",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Laboratorium"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0019",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Serba Guna/Aula"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0024",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Sarana, Prasarana dan Utilitas Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0025",
    "nama_sub_kegiatan": "Pengadaan Mebel Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0032",
    "nama_sub_kegiatan": "Penyediaan Biaya Personil Peserta Didik Sekolah Menengah Pertama"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0035",
    "nama_sub_kegiatan": "Pengadaan Alat Praktik dan Peraga Siswa"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0038",
    "nama_sub_kegiatan": "Pembinaan Minat, Bakat dan Kreativitas Siswa"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0039",
    "nama_sub_kegiatan": "Penyediaan Pendidik dan Tenaga Kependidikan bagi Satuan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0040",
    "nama_sub_kegiatan": "Pengembangan Karir Pendidik dan Tenaga Kependidikan pada Satuan Pendidikan Sekolah Menengah Pertama"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0041",
    "nama_sub_kegiatan": "Pembinaan Kelembagaan dan Manajemen Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0042",
    "nama_sub_kegiatan": "Pengelolaan Dana BOS Sekolah Menengah Pertama"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0043",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Pengelolaan Dana BOS Sekolah Menengah Pertama"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0044",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang TU"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0045",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Kepala Sekolah"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0049",
    "nama_sub_kegiatan": "Pengembangan konten digital untuk pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0050",
    "nama_sub_kegiatan": "Pelatihan Penggunaan Aplikasi Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0051",
    "nama_sub_kegiatan": "Koordinasi, Perencanaan, Supervisi dan Evaluasi Layanan di Bidang Pendidikan "
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0052",
    "nama_sub_kegiatan": "Sosialisasi dan Advokasi Kebijakan Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0054",
    "nama_sub_kegiatan": "Fasilitasi Komunitas Belajar Pendidik dan Tenaga Kependidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0055",
    "nama_sub_kegiatan": "Pemberian layanan pendampingan bagi satuan pendidikan untuk pencegahan perundungan, kekerasan, dan intoleransi"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0058",
    "nama_sub_kegiatan": "Penyelenggaraan Proses Belajar bagi Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0059",
    "nama_sub_kegiatan": "Pembangunan Ruang Kelas Baru"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0060",
    "nama_sub_kegiatan": "Bimbingan Teknis, Pelatihan, dan/atau Magang/PKL untuk Peningkatan Kapasitas Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0062",
    "nama_sub_kegiatan": "Pengadaan Perlengkapan Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.02.2.02",
    "kode_sub_kegiatan": "1.01.02.2.02.0064",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Ruang Guru/Kepala Sekolah/TU"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana, Prasarana dan Utilitas PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0003",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Gedung/Ruang Kelas/Ruang Guru PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0004",
    "nama_sub_kegiatan": "Rehabilitasi Sedang/Berat Pembangunan Sarana, Prasarana dan Utilitas PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0007",
    "nama_sub_kegiatan": "Pengadaan Mebel PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0011",
    "nama_sub_kegiatan": "Penyediaan Biaya Personil Peserta Didik PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0012",
    "nama_sub_kegiatan": "Pengadaan Alat Praktik dan Peraga Siswa PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0013",
    "nama_sub_kegiatan": "Penyelenggaraan Proses Belajar PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0015",
    "nama_sub_kegiatan": "Penyediaan Pendidik dan Tenaga Kependidikan bagi Satuan PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0016",
    "nama_sub_kegiatan": "Pengembangan Karir Pendidik dan Tenaga Kependidikan pada Satuan Pendidikan PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0017",
    "nama_sub_kegiatan": "Pembinaan Kelembagaan dan Manajemen PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0018",
    "nama_sub_kegiatan": "Pengelolaan Dana BOP PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0019",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Pengelolaan Dana BOP PAUD"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0023",
    "nama_sub_kegiatan": "Pengembangan konten digital untuk pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0024",
    "nama_sub_kegiatan": "Pelatihan Penggunaan Aplikasi Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0025",
    "nama_sub_kegiatan": "Koordinasi, Perencanaan, Supervisi dan Evaluasi Layanan di Bidang Pendidikan "
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0026",
    "nama_sub_kegiatan": "Sosialisasi dan Advokasi Kebijakan Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0029",
    "nama_sub_kegiatan": "Fasilitasi Komunitas Belajar Pendidik dan Tenaga Kependidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0037",
    "nama_sub_kegiatan": "Pemberian layanan pendampingan bagi satuan pendidikan untuk pencegahan perundungan, kekerasan, dan intoleransi"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0039",
    "nama_sub_kegiatan": "Bimbingan Teknis, Pelatihan, dan/atau Magang/PKL untuk Peningkatan Kapasitas Bidang Pendidikan"
  },
  {
    "kode_kegiatan": "1.01.02.2.03",
    "kode_sub_kegiatan": "1.01.02.2.03.0041",
    "nama_sub_kegiatan": "Pengadaan Perlengkapan Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0010",
    "nama_sub_kegiatan": "Penyediaan Biaya Personil Peserta Didik Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0011",
    "nama_sub_kegiatan": "Pengadaan Alat Praktik dan Peraga Siswa Nonformal / Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0014",
    "nama_sub_kegiatan": "Penyediaan Pendidik dan Tenaga Kependidikan bagi Satuan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0015",
    "nama_sub_kegiatan": "Pengembangan Karir Pendidik dan Tenaga Kependidikan pada Satuan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0016",
    "nama_sub_kegiatan": "Pembinaan Kelembagaan dan Manajemen Sekolah Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0017",
    "nama_sub_kegiatan": "Pengelolaan Dana BOP Sekolah Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0018",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Pengelolaan Dana BOP Sekolah Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0027",
    "nama_sub_kegiatan": "Koordinasi, Perencanaan, Supervisi dan Evaluasi Layanan di Bidang Pendidikan "
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0036",
    "nama_sub_kegiatan": "Pengadaan Perlengkapan Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.02.2.04",
    "kode_sub_kegiatan": "1.01.02.2.04.0046",
    "nama_sub_kegiatan": "Penyelenggaraan Proses Belajar bagi Peserta Didik"
  },
  {
    "kode_kegiatan": "1.01.03.2.01",
    "kode_sub_kegiatan": "1.01.03.2.01.0002",
    "nama_sub_kegiatan": "Penyusunan Silabus Muatan Lokal Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.01.03.2.01",
    "kode_sub_kegiatan": "1.01.03.2.01.0003",
    "nama_sub_kegiatan": "Penyediaan Buku Teks Pelajaran Muatan Lokal Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.01.03.2.01",
    "kode_sub_kegiatan": "1.01.03.2.01.0007",
    "nama_sub_kegiatan": "Penyusunan Kompetensi Dasar/Capaian Pembelajaran Muatan Lokal Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.01.04.2.01",
    "kode_sub_kegiatan": "1.01.04.2.01.0001",
    "nama_sub_kegiatan": "Perhitungan dan Pemetaan Pendidik dan Tenaga Kependidikan Satuan Pendidikan Dasar, PAUD, dan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.04.2.01",
    "kode_sub_kegiatan": "1.01.04.2.01.0002",
    "nama_sub_kegiatan": "Penataan Pendistribusian Pendidik dan Tenaga Kependidikan bagi Satuan Pendidikan Dasar, PAUD, dan Pendidikan Nonformal/Kesetaraan"
  },
  {
    "kode_kegiatan": "1.01.01.2.01",
    "kode_sub_kegiatan": "1.01.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "1.01.01.2.01",
    "kode_sub_kegiatan": "1.01.01.2.01.0007",
    "nama_sub_kegiatan": "Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_kegiatan": "1.01.01.2.02",
    "kode_sub_kegiatan": "1.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.01.01.2.06",
    "kode_sub_kegiatan": "1.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "1.01.01.2.07",
    "kode_sub_kegiatan": "1.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "1.01.01.2.07",
    "kode_sub_kegiatan": "1.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "1.01.01.2.08",
    "kode_sub_kegiatan": "1.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "1.01.01.2.08",
    "kode_sub_kegiatan": "1.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "1.01.01.2.09",
    "kode_sub_kegiatan": "1.01.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "1.01.01.2.09",
    "kode_sub_kegiatan": "1.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "1.01.01.2.09",
    "kode_sub_kegiatan": "1.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "1.01.01.2.09",
    "kode_sub_kegiatan": "1.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.22.02.2.01",
    "kode_sub_kegiatan": "2.22.02.2.01.0001",
    "nama_sub_kegiatan": "Pelindungan, Pengembangan, Pemanfaatan Objek Pemajuan Kebudayaan"
  },
  {
    "kode_kegiatan": "2.22.02.2.01",
    "kode_sub_kegiatan": "2.22.02.2.01.0002",
    "nama_sub_kegiatan": "Pembinaan Sumber Daya Manusia, Lembaga, dan Pranata Kebudayaan"
  },
  {
    "kode_kegiatan": "2.22.02.2.02",
    "kode_sub_kegiatan": "2.22.02.2.02.0001",
    "nama_sub_kegiatan": "Pelindungan, Pengembangan, Pemanfaatan Objek Pemajuan Tradisi Budaya"
  },
  {
    "kode_kegiatan": "2.22.02.2.02",
    "kode_sub_kegiatan": "2.22.02.2.02.0002",
    "nama_sub_kegiatan": "Pembinaan Sumber Daya Manusia, Lembaga, dan Pranata Tradisional"
  },
  {
    "kode_kegiatan": "2.22.02.2.02",
    "kode_sub_kegiatan": "2.22.02.2.02.0003",
    "nama_sub_kegiatan": "Pemberian Penghargaan kepada Pihak yang Berprestasi atau Berkontribusi Luar Biasa Sesuai dengan Prestasi dan Kontribusinya dalam Pemajuan Kebudayaan"
  },
  {
    "kode_kegiatan": "2.22.02.2.03",
    "kode_sub_kegiatan": "2.22.02.2.03.0001",
    "nama_sub_kegiatan": "Pelindungan, Pengembangan, Pemanfaatan Objek Pemajuan Lembaga Adat"
  },
  {
    "kode_kegiatan": "2.22.02.2.03",
    "kode_sub_kegiatan": "2.22.02.2.03.0002",
    "nama_sub_kegiatan": "Pembinaan Sumber Daya Manusia, Lembaga, dan Pranata Adat"
  },
  {
    "kode_kegiatan": "2.22.02.2.03",
    "kode_sub_kegiatan": "2.22.02.2.03.0003",
    "nama_sub_kegiatan": "Penyediaan Sarana dan Prasarana Pembinaan Lembaga Adat "
  },
  {
    "kode_kegiatan": "2.22.04.2.01",
    "kode_sub_kegiatan": "2.22.04.2.01.0001",
    "nama_sub_kegiatan": "Pemberdayaan Sumber Daya Manusia dan Lembaga Sejarah Lokal Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.22.04.2.01",
    "kode_sub_kegiatan": "2.22.04.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Akses Masyarakat Terhadap Data dan Informasi Sejarah"
  },
  {
    "kode_kegiatan": "2.22.05.2.01",
    "kode_sub_kegiatan": "2.22.05.2.01.0001",
    "nama_sub_kegiatan": "Pendaftaran Objek Diduga Cagar Budaya"
  },
  {
    "kode_kegiatan": "2.22.05.2.01",
    "kode_sub_kegiatan": "2.22.05.2.01.0002",
    "nama_sub_kegiatan": "Penetapan Cagar Budaya"
  },
  {
    "kode_kegiatan": "2.22.05.2.02",
    "kode_sub_kegiatan": "2.22.05.2.02.0001",
    "nama_sub_kegiatan": "Pelindungan Cagar Budaya"
  },
  {
    "kode_kegiatan": "2.22.05.2.02",
    "kode_sub_kegiatan": "2.22.05.2.02.0003",
    "nama_sub_kegiatan": "Pemanfaatan Cagar Budaya"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0006",
    "nama_sub_kegiatan": "Pengembangan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0007",
    "nama_sub_kegiatan": "Pengembangan Fasilitas Kesehatan Lainnya"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0008",
    "nama_sub_kegiatan": "Rehabilitasi dan Pemeliharaan Rumah Sakit"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0014",
    "nama_sub_kegiatan": "Pengadaan Alat Kesehatan/Alat Penunjang Medik Fasilitas Pelayanan Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0014",
    "nama_sub_kegiatan": "Pengadaan Alat Kesehatan/Alat Penunjang Medik Fasilitas Pelayanan Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0014",
    "nama_sub_kegiatan": "Pengadaan Alat Kesehatan/Alat Penunjang Medik Fasilitas Pelayanan Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0020",
    "nama_sub_kegiatan": "Pemeliharaan Rutin dan Berkala Alat Kesehatan/Alat Penunjang Medik Fasilitas Pelayanan Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0022",
    "nama_sub_kegiatan": "Pengembangan Rumah Sakit"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0022",
    "nama_sub_kegiatan": "Pengembangan Rumah Sakit"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0023",
    "nama_sub_kegiatan": "Pengadaan Obat, Bahan Habis Pakai, Bahan Medis Habis Pakai,, Vaksin, Makanan dan Minuman di Fasilitas Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0023",
    "nama_sub_kegiatan": "Pengadaan Obat, Bahan Habis Pakai, Bahan Medis Habis Pakai,, Vaksin, Makanan dan Minuman di Fasilitas Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0024",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Dasar Melalui Pendekatan Keluarga"
  },
  {
    "kode_kegiatan": "1.02.02.2.01",
    "kode_sub_kegiatan": "1.02.02.2.01.0026",
    "nama_sub_kegiatan": "Distribusi  Alat Kesehatan, Obat, Bahan Habis Pakai, Bahan Medis Habis Pakai, Vaksin, Makanan dan Minuman ke Fasilitas Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Hamil"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0002",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Bersalin"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0002",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Ibu Bersalin"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0003",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Bayi Baru Lahir"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0003",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Bayi Baru Lahir"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0003",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Bayi Baru Lahir"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Balita"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Pendidikan Dasar"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0006",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Produktif"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0006",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Produktif"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0006",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Produktif"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0006",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Produktif"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0007",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan pada Usia Lanjut "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0008",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Penderita Hipertensi"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0008",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Penderita Hipertensi"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0009",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Penderita Diabetes Melitus"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0010",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Gangguan Jiwa Berat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang Terduga Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0012",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Risiko Terinfeksi HIV"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0013",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk pada Kondisi Kejadian Luar Biasa (KLB)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0013",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk pada Kondisi Kejadian Luar Biasa (KLB)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0014",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk Terdampak Krisis Kesehatan Akibat Bencana dan/atau Berpotensi Bencana"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0014",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk Terdampak Krisis Kesehatan Akibat Bencana dan/atau Berpotensi Bencana"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0014",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk Terdampak Krisis Kesehatan Akibat Bencana dan/atau Berpotensi Bencana"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0014",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk Terdampak Krisis Kesehatan Akibat Bencana dan/atau Berpotensi Bencana"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0014",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk Terdampak Krisis Kesehatan Akibat Bencana dan/atau Berpotensi Bencana"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0014",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan bagi Penduduk Terdampak Krisis Kesehatan Akibat Bencana dan/atau Berpotensi Bencana"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0015",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Gizi Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0016",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Kerja dan Olahraga"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0017",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Lingkungan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0018",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Promosi Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0019",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Tradisional, Akupuntur, Asuhan Mandiri, dan Tradisional Lainnya"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0020",
    "nama_sub_kegiatan": "Pengelolaan Surveilans Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0021",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Masalah Kesehatan Jiwa (ODMK)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0021",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Masalah Kesehatan Jiwa (ODMK)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0021",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Orang dengan Masalah Kesehatan Jiwa (ODMK)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0022",
    "nama_sub_kegiatan": "Pengelolaan Pelayanan Kesehatan Jiwa dan NAPZA"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0024",
    "nama_sub_kegiatan": "Pengelolaan Upaya Pengurangan Risiko Krisis Kesehatan dan Pasca Krisis Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0025",
    "nama_sub_kegiatan": "Pelayanan Kesehatan Penyakit Menular dan Tidak Menular"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0026",
    "nama_sub_kegiatan": "Pengelolaan Jaminan Kesehatan Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0028",
    "nama_sub_kegiatan": "Pengambilan dan Pengiriman Spesimen Penyakit Potensial KLB ke Laboratorium Rujukan/Nasional"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0033",
    "nama_sub_kegiatan": "Operasional Pelayanan Puskesmas"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0035",
    "nama_sub_kegiatan": "Pelaksanaan Akreditasi Fasilitas Kesehatan di Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0036",
    "nama_sub_kegiatan": "Investigasi Awal Kejadian Tidak Diharapkan (Kejadian Ikutan Pasca Imunisasi dan Pemberian Obat Massal)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0037",
    "nama_sub_kegiatan": "Pelaksanaan Kewaspadaan Dini dan Respon Wabah"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0038",
    "nama_sub_kegiatan": "Penyediaan dan Pengelolaan Sistem Penanganan Gawat Darurat Terpadu (SPGDT)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0040",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan Tuberkulosis"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0041",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan orang dengan HIV (ODHIV)"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0042",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan Malaria"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0042",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan Malaria"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0042",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan Malaria"
  },
  {
    "kode_kegiatan": "1.02.02.2.02",
    "kode_sub_kegiatan": "1.02.02.2.02.0042",
    "nama_sub_kegiatan": "Pengelolaan pelayanan kesehatan Malaria"
  },
  {
    "kode_kegiatan": "1.02.02.2.04",
    "kode_sub_kegiatan": "1.02.02.2.04.0003",
    "nama_sub_kegiatan": "Peningkatan Mutu Pelayanan Fasilitas Kesehatan "
  },
  {
    "kode_kegiatan": "1.02.02.2.04",
    "kode_sub_kegiatan": "1.02.02.2.04.0004",
    "nama_sub_kegiatan": "Penyiapan Perumusan dan Pelaksanaan Pelayanan Kesehatan Rujukan"
  },
  {
    "kode_kegiatan": "1.02.03.2.01",
    "kode_sub_kegiatan": "1.02.03.2.01.0002",
    "nama_sub_kegiatan": "Pembinaan dan Pengawasan Tenaga Kesehatan serta Tindak Lanjut Perizinan Praktik Tenaga Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.03.2.02",
    "kode_sub_kegiatan": "1.02.03.2.02.0001",
    "nama_sub_kegiatan": "Perencanaan dan Distribusi serta Pemerataan Sumber Daya Manusia Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.03.2.02",
    "kode_sub_kegiatan": "1.02.03.2.02.0002",
    "nama_sub_kegiatan": "Pemenuhan Kebutuhan Sumber Daya Manusia Kesehatan Sesuai Standar"
  },
  {
    "kode_kegiatan": "1.02.03.2.02",
    "kode_sub_kegiatan": "1.02.03.2.02.0003",
    "nama_sub_kegiatan": "Pembinaan dan Pengawasan Sumber Daya Manusia Kesehatan"
  },
  {
    "kode_kegiatan": "1.02.03.2.03",
    "kode_sub_kegiatan": "1.02.03.2.03.0001",
    "nama_sub_kegiatan": "Pengembangan Mutu dan Peningkatan Kompetensi Teknis Sumber Daya Manusia Kesehatan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.02.04.2.01",
    "kode_sub_kegiatan": "1.02.04.2.01.0001",
    "nama_sub_kegiatan": "Pengendalian dan Pengawasan serta Tindak Lanjut Pengawasan Perizinan Apotek, Toko Obat, Toko Alat Kesehatan, dan Optikal, Usaha Mikro Obat Tradisional (UMOT)"
  },
  {
    "kode_kegiatan": "1.02.04.2.03",
    "kode_sub_kegiatan": "1.02.04.2.03.0001",
    "nama_sub_kegiatan": "Pengendalian dan Pengawasan serta Tindak Lanjut Pengawasan Sertifikat Produksi Pangan Industri Rumah Tangga dan Nomor P-IRT sebagai Izin Produksi, untuk Produk Makanan Minuman Tertentu yang Dapat Diproduksi oleh Industri Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.02.04.2.04",
    "kode_sub_kegiatan": "1.02.04.2.04.0001",
    "nama_sub_kegiatan": "Pengendalian dan Pengawasan serta Tindak Lanjut Pengawasan Penerbitan Sertifikat Laik Higiene Sanitasi Tempat Pengelolaan Makanan (TPM) antara lain Jasa Boga, Rumah Makan/Restoran dan Depot Air Minum (DAM)"
  },
  {
    "kode_kegiatan": "1.02.04.2.05",
    "kode_sub_kegiatan": "1.02.04.2.05.0001",
    "nama_sub_kegiatan": "Pengendalian dan Pengawasan serta Tindak Lanjut Penerbitan Stiker Pembinaan pada Makanan Jajanan dan Sentra Makanan Jajanan"
  },
  {
    "kode_kegiatan": "1.02.04.2.06",
    "kode_sub_kegiatan": "1.02.04.2.06.0001",
    "nama_sub_kegiatan": "Pemeriksaan Post Market pada Produk Makanan-Minuman Industri Rumah Tangga yang Beredar dan Pengawasan serta Tindak Lanjut Pengawasan"
  },
  {
    "kode_kegiatan": "1.02.05.2.01",
    "kode_sub_kegiatan": "1.02.05.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Upaya Promosi Kesehatan, Advokasi, Kemitraan dan Pemberdayaan Masyarakat"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.05.2.03",
    "kode_sub_kegiatan": "1.02.05.2.03.0001",
    "nama_sub_kegiatan": "Bimbingan Teknis dan Supervisi Pengembangan dan Pelaksanaan Upaya Kesehatan Bersumber Daya Masyarakat (UKBM)"
  },
  {
    "kode_kegiatan": "1.02.01.2.02",
    "kode_sub_kegiatan": "1.02.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.02.01.2.02",
    "kode_sub_kegiatan": "1.02.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.02.01.2.02",
    "kode_sub_kegiatan": "1.02.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.02.01.2.02",
    "kode_sub_kegiatan": "1.02.01.2.02.0002",
    "nama_sub_kegiatan": "Penyediaan Administrasi Pelaksanaan Tugas ASN"
  },
  {
    "kode_kegiatan": "1.02.01.2.06",
    "kode_sub_kegiatan": "1.02.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.02.01.2.06",
    "kode_sub_kegiatan": "1.02.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.02.01.2.06",
    "kode_sub_kegiatan": "1.02.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.02.01.2.07",
    "kode_sub_kegiatan": "1.02.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "1.02.01.2.10",
    "kode_sub_kegiatan": "1.02.01.2.10.0001",
    "nama_sub_kegiatan": "Pelayanan dan Penunjang Pelayanan BLUD"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "X.XX.01.2.08",
    "kode_sub_kegiatan": "X.XX.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "X.XX.01.2.08",
    "kode_sub_kegiatan": "X.XX.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "X.XX.01.2.08",
    "kode_sub_kegiatan": "X.XX.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.09",
    "kode_sub_kegiatan": "X.XX.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "X.XX.01.2.09",
    "kode_sub_kegiatan": "X.XX.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "X.XX.01.2.09",
    "kode_sub_kegiatan": "X.XX.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.03.02.2.01",
    "kode_sub_kegiatan": "1.03.02.2.01.0075",
    "nama_sub_kegiatan": "Pembinaan dan Pemberdayaan Kelembagaan Pengelolaan SDA Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.02.2.01",
    "kode_sub_kegiatan": "1.03.02.2.01.0081",
    "nama_sub_kegiatan": "Operasi dan Pemeliharaan Kanal Banjir"
  },
  {
    "kode_kegiatan": "1.03.02.2.01",
    "kode_sub_kegiatan": "1.03.02.2.01.0118",
    "nama_sub_kegiatan": "Penyusunan Pola dan Rencana Pengelolaan SDA WS Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.02.2.01",
    "kode_sub_kegiatan": "1.03.02.2.01.0122",
    "nama_sub_kegiatan": "Rehabilitasi Kanal Banjir"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0006",
    "nama_sub_kegiatan": "Pembangunan Sumur Jaringan Irigasi Air Tanah"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0008",
    "nama_sub_kegiatan": "Peningkatan Jaringan Irigasi Permukaan"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0013",
    "nama_sub_kegiatan": "Peningkatan Jaringan Irigasi Air Tanah"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0014",
    "nama_sub_kegiatan": "Rehabilitasi Jaringan Irigasi Permukaan"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0021",
    "nama_sub_kegiatan": "Operasi dan Pemeliharaan Jaringan Irigasi Permukaan"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0026",
    "nama_sub_kegiatan": "Operasi dan Pemeliharaan Jaringan Irigasi Air Tanah"
  },
  {
    "kode_kegiatan": "1.03.02.2.02",
    "kode_sub_kegiatan": "1.03.02.2.02.0032",
    "nama_sub_kegiatan": "Pengelolaan dan Pengawasan Alokasi Air Irigasi"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0026",
    "nama_sub_kegiatan": "Peningkatan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0026",
    "nama_sub_kegiatan": "Peningkatan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0028",
    "nama_sub_kegiatan": "Pembangunan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0028",
    "nama_sub_kegiatan": "Pembangunan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0028",
    "nama_sub_kegiatan": "Pembangunan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0032",
    "nama_sub_kegiatan": "Perluasan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0032",
    "nama_sub_kegiatan": "Perluasan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.03.2.01",
    "kode_sub_kegiatan": "1.03.03.2.01.0032",
    "nama_sub_kegiatan": "Perluasan Sistem Penyediaan Air Minum (SPAM) Jaringan Perpipaan"
  },
  {
    "kode_kegiatan": "1.03.05.2.01",
    "kode_sub_kegiatan": "1.03.05.2.01.0038",
    "nama_sub_kegiatan": "Operasi dan Pemeliharaan Sistem Pengelolaan Air Limbah Domestik (SPALD)"
  },
  {
    "kode_kegiatan": "1.03.05.2.01",
    "kode_sub_kegiatan": "1.03.05.2.01.0039",
    "nama_sub_kegiatan": "Penyediaan Sub Sistem Pengolahan Air Limbah Domestik (SPALD) Setempat"
  },
  {
    "kode_kegiatan": "1.03.05.2.01",
    "kode_sub_kegiatan": "1.03.05.2.01.0039",
    "nama_sub_kegiatan": "Penyediaan Sub Sistem Pengolahan Air Limbah Domestik (SPALD) Setempat"
  },
  {
    "kode_kegiatan": "1.03.06.2.01",
    "kode_sub_kegiatan": "1.03.06.2.01.0026",
    "nama_sub_kegiatan": "Penyediaan Sarana Pendukung Sistem Drainase Perkotaan"
  },
  {
    "kode_kegiatan": "1.03.06.2.01",
    "kode_sub_kegiatan": "1.03.06.2.01.0026",
    "nama_sub_kegiatan": "Penyediaan Sarana Pendukung Sistem Drainase Perkotaan"
  },
  {
    "kode_kegiatan": "1.03.06.2.01",
    "kode_sub_kegiatan": "1.03.06.2.01.0028",
    "nama_sub_kegiatan": "Rehabilitasi Sistem Drainase Perkotaan"
  },
  {
    "kode_kegiatan": "1.03.06.2.01",
    "kode_sub_kegiatan": "1.03.06.2.01.0031",
    "nama_sub_kegiatan": "Operasi dan Pemeliharaan Sistem Drainase Perkotaan"
  },
  {
    "kode_kegiatan": "1.03.08.2.01",
    "kode_sub_kegiatan": "1.03.08.2.01.0018",
    "nama_sub_kegiatan": "Pemeliharaan, Perawatan, dan Pemeriksaan Berkala Bangunan Gedung untuk Kepentingan Strategis Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.08.2.01",
    "kode_sub_kegiatan": "1.03.08.2.01.0021",
    "nama_sub_kegiatan": "Pembangunan, Pemanfaatan,  Pelestariaan dan Pembongkaran Bangunan Gedung untuk Kepentingan Strategis Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.08.2.01",
    "kode_sub_kegiatan": "1.03.08.2.01.0021",
    "nama_sub_kegiatan": "Pembangunan, Pemanfaatan,  Pelestariaan dan Pembongkaran Bangunan Gedung untuk Kepentingan Strategis Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.08.2.01",
    "kode_sub_kegiatan": "1.03.08.2.01.0023",
    "nama_sub_kegiatan": "Penyelenggaraan Penerbitan Persetujuan Bangunan Gedung (PBG), Sertifikat Laik Fungsi (SLF), Surat Bukti Kepemilikan Bangunan Gedung (SBKBG),  Rencana Teknis Pembongkaran Bangunan Gedung (RTB),  Tim Profesi Ahli (TPA), Tim Penilai Teknis (TPT), Penilik, dan Pendataan Bangunan Gedung melalui SIMBG"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0031",
    "nama_sub_kegiatan": "Penggantian Jembatan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0031",
    "nama_sub_kegiatan": "Penggantian Jembatan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0033",
    "nama_sub_kegiatan": "Rekonstruksi Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0033",
    "nama_sub_kegiatan": "Rekonstruksi Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0033",
    "nama_sub_kegiatan": "Rekonstruksi Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0034",
    "nama_sub_kegiatan": "Pemeliharaan Berkala Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0034",
    "nama_sub_kegiatan": "Pemeliharaan Berkala Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0037",
    "nama_sub_kegiatan": "Pelebaran Jalan Menuju Standar"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0037",
    "nama_sub_kegiatan": "Pelebaran Jalan Menuju Standar"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0039",
    "nama_sub_kegiatan": "Rehabilitasi Jembatan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0043",
    "nama_sub_kegiatan": "Survey Kondisi Jalan/Jembatan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0044",
    "nama_sub_kegiatan": "Rehabilitasi Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0044",
    "nama_sub_kegiatan": "Rehabilitasi Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0046",
    "nama_sub_kegiatan": "Pemeliharaan Rutin Jalan"
  },
  {
    "kode_kegiatan": "1.03.10.2.01",
    "kode_sub_kegiatan": "1.03.10.2.01.0048",
    "nama_sub_kegiatan": "Pelebaran Jembatan"
  },
  {
    "kode_kegiatan": "1.03.11.2.01",
    "kode_sub_kegiatan": "1.03.11.2.01.0016",
    "nama_sub_kegiatan": "Pelatihan Tenaga Kerja Konstruksi Kualifikasi Jabatan Operator, Teknisi atau Analis"
  },
  {
    "kode_kegiatan": "1.03.11.2.02",
    "kode_sub_kegiatan": "1.03.11.2.02.0012",
    "nama_sub_kegiatan": "Penyediaan Perangkat Pendukung Layanan Informasi Jasa Konstruksi"
  },
  {
    "kode_kegiatan": "1.03.11.2.04",
    "kode_sub_kegiatan": "1.03.11.2.04.0007",
    "nama_sub_kegiatan": "Pengawasan dan Evaluasi Tertib Usaha Jasa Konstruksi Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.12.2.01",
    "kode_sub_kegiatan": "1.03.12.2.01.0005",
    "nama_sub_kegiatan": "Pelaksanaan Persetujuan Substansi RTRW Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.12.2.01",
    "kode_sub_kegiatan": "1.03.12.2.01.0006",
    "nama_sub_kegiatan": "Pelaksanaan Persetujuan Substansi RDTR Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.12.2.02",
    "kode_sub_kegiatan": "1.03.12.2.02.0002",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Penyusunan RRTR Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.03.12.2.04",
    "kode_sub_kegiatan": "1.03.12.2.04.0009",
    "nama_sub_kegiatan": "Operasionalisasi Tugas dan Fungsi Forum Penataan Ruang"
  },
  {
    "kode_kegiatan": "1.03.01.2.01",
    "kode_sub_kegiatan": "1.03.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "1.03.01.2.02",
    "kode_sub_kegiatan": "1.03.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.03.01.2.03",
    "kode_sub_kegiatan": "1.03.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.03.01.2.06",
    "kode_sub_kegiatan": "1.03.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.03.01.2.07",
    "kode_sub_kegiatan": "1.03.01.2.07.0003",
    "nama_sub_kegiatan": "Pengadaan Alat Besar"
  },
  {
    "kode_kegiatan": "1.03.01.2.07",
    "kode_sub_kegiatan": "1.03.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "1.03.01.2.08",
    "kode_sub_kegiatan": "1.03.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "1.03.01.2.08",
    "kode_sub_kegiatan": "1.03.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "1.03.01.2.09",
    "kode_sub_kegiatan": "1.03.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "1.03.01.2.09",
    "kode_sub_kegiatan": "1.03.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "1.03.01.2.09",
    "kode_sub_kegiatan": "1.03.01.2.09.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan dan Perizinan Alat Besar"
  },
  {
    "kode_kegiatan": "1.03.01.2.09",
    "kode_sub_kegiatan": "1.03.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "1.03.01.2.09",
    "kode_sub_kegiatan": "1.03.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.04.02.2.03",
    "kode_sub_kegiatan": "1.04.02.2.03.0001",
    "nama_sub_kegiatan": "Rehabilitasi Rumah bagi Korban Bencana"
  },
  {
    "kode_kegiatan": "1.04.02.2.05",
    "kode_sub_kegiatan": "1.04.02.2.05.0001",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Kelembagaan dan Pemilik/Penghuni Rumah Susun"
  },
  {
    "kode_kegiatan": "1.04.03.2.03",
    "kode_sub_kegiatan": "1.04.03.2.03.0002",
    "nama_sub_kegiatan": "Perbaikan Rumah Tidak Layak Huni "
  },
  {
    "kode_kegiatan": "1.04.03.2.03",
    "kode_sub_kegiatan": "1.04.03.2.03.0009",
    "nama_sub_kegiatan": "Pelaksanaan Peremajaan Kawasan Permukiman Kumuh"
  },
  {
    "kode_kegiatan": "1.04.05.2.01",
    "kode_sub_kegiatan": "1.04.05.2.01.0002",
    "nama_sub_kegiatan": "Penyediaan Prasarana, Sarana, dan Utilitas Umum di Perumahan untuk Menunjang Fungsi Hunian"
  },
  {
    "kode_kegiatan": "1.04.05.2.01",
    "kode_sub_kegiatan": "1.04.05.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi dalam rangka Penyediaan Prasarana, Sarana, dan Utilitas Umum Perumahan"
  },
  {
    "kode_kegiatan": "1.04.05.2.01",
    "kode_sub_kegiatan": "1.04.05.2.01.0008",
    "nama_sub_kegiatan": "Operasional dan Pemeliharaan Prasarana, Sarana, dan Utilitas Umum di Perumahan"
  },
  {
    "kode_kegiatan": "1.04.01.2.01",
    "kode_sub_kegiatan": "1.04.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "1.04.01.2.02",
    "kode_sub_kegiatan": "1.04.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.04.01.2.06",
    "kode_sub_kegiatan": "1.04.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.04.01.2.06",
    "kode_sub_kegiatan": "1.04.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "1.04.01.2.06",
    "kode_sub_kegiatan": "1.04.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.04.01.2.06",
    "kode_sub_kegiatan": "1.04.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "1.04.01.2.06",
    "kode_sub_kegiatan": "1.04.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.04.01.2.06",
    "kode_sub_kegiatan": "1.04.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "1.04.01.2.07",
    "kode_sub_kegiatan": "1.04.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.04.01.2.07",
    "kode_sub_kegiatan": "1.04.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.04.01.2.08",
    "kode_sub_kegiatan": "1.04.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "1.04.01.2.08",
    "kode_sub_kegiatan": "1.04.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "1.04.01.2.09",
    "kode_sub_kegiatan": "1.04.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "1.04.01.2.09",
    "kode_sub_kegiatan": "1.04.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "1.04.01.2.09",
    "kode_sub_kegiatan": "1.04.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.10.04.2.01",
    "kode_sub_kegiatan": "2.10.04.2.01.0001",
    "nama_sub_kegiatan": "Inventarisasi Sengketa, Konflik, dan Perkara Pertanahan dalam 1 (satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.10.04.2.01",
    "kode_sub_kegiatan": "2.10.04.2.01.0002",
    "nama_sub_kegiatan": "Mediasi Penyelesaian Sengketa Tanah Garapan dalam 1 (satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.10.05.2.01",
    "kode_sub_kegiatan": "2.10.05.2.01.0002",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Penyelesaian Masalah Ganti Kerugian dan Santunan Tanah untuk Pembangunan oleh Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.10.06.2.01",
    "kode_sub_kegiatan": "2.10.06.2.01.0001",
    "nama_sub_kegiatan": "Inventarisasi Subjek dan Objek Redistribusi Tanah"
  },
  {
    "kode_kegiatan": "2.10.06.2.01",
    "kode_sub_kegiatan": "2.10.06.2.01.0002",
    "nama_sub_kegiatan": "Inventarisasi dan Rekomendasi Objek Redistribusi Tanah"
  },
  {
    "kode_kegiatan": "2.10.08.2.02",
    "kode_sub_kegiatan": "2.10.08.2.02.0001",
    "nama_sub_kegiatan": "Pelaksanaan Inventarisasi Tanah Kosong"
  },
  {
    "kode_kegiatan": "2.10.10.2.01",
    "kode_sub_kegiatan": "2.10.10.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Perencanaan Penggunaan Tanah"
  },
  {
    "kode_kegiatan": "2.10.10.2.01",
    "kode_sub_kegiatan": "2.10.10.2.01.0002",
    "nama_sub_kegiatan": "Koordinasi Pemetaan Zona Nilai Tanah Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi Penyelenggaraan Ketentraman dan Ketertiban Umum serta Perlindungan Masyarakat Tingkat Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0004",
    "nama_sub_kegiatan": "Pemberdayaan Perlindungan Masyarakat dalam rangka Ketentraman dan Ketertiban Umum"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0005",
    "nama_sub_kegiatan": "Peningkatan Kapasitas SDM Satuan Polisi Pamongpraja dan Satuan Perlindungan Masyarakat Termasuk dalam Pelaksanaan Tugas yang Bernuansa Hak Asasi Manusia "
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0006",
    "nama_sub_kegiatan": "Kerja Sama antar Lembaga dan Kemitraan dalam Teknik Pencegahan dan Penanganan Gangguan Ketentraman dan Ketertiban Umum"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0008",
    "nama_sub_kegiatan": "Penyusunan SOP Ketertiban Umum dan Ketenteraman Masyarakat"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0015",
    "nama_sub_kegiatan": "Pencegahan Gangguan Ketenteraman dan Ketertiban Umum Melalui Deteksi Dini dan Cegah Dini, Pembinaan dan Penyuluhan, Pelaksanaan Patroli, Pengamanan, dan Pengawalan"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0016",
    "nama_sub_kegiatan": "Penindakan Atas Gangguan Ketenteraman dan Ketertiban Umum berdasarkan Perda dan Perkada Melalui Penertiban dan Penanganan Unjuk Rasa dan Kerusuhan Massa"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0017",
    "nama_sub_kegiatan": "Penyediaan Layanan dasar dalam rangka Dampak Penegakan Peraturan Daerah dan Perturan kepala daerah"
  },
  {
    "kode_kegiatan": "1.05.02.2.01",
    "kode_sub_kegiatan": "1.05.02.2.01.0018",
    "nama_sub_kegiatan": "Pengadaan dan Pemeliharaan Sarana dan Prasarana Ketentraman dan Ketertiban Umum"
  },
  {
    "kode_kegiatan": "1.05.02.2.02",
    "kode_sub_kegiatan": "1.05.02.2.02.0010",
    "nama_sub_kegiatan": "Sosialisasi Penegakan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_kegiatan": "1.05.02.2.02",
    "kode_sub_kegiatan": "1.05.02.2.02.0011",
    "nama_sub_kegiatan": "Penanganan  Atas Pelanggaran Peraturan Daerah dan Peraturan  Kepala daerah"
  },
  {
    "kode_kegiatan": "1.05.02.2.02",
    "kode_sub_kegiatan": "1.05.02.2.02.0012",
    "nama_sub_kegiatan": "Pengawasan Atas Kepatuhan Terhadap Pelaksanaan Peraturan Daerah dan Peraturan Kepala Daerah"
  },
  {
    "kode_kegiatan": "1.05.02.2.03",
    "kode_sub_kegiatan": "1.05.02.2.03.0006",
    "nama_sub_kegiatan": "Pengembangan Kapasitas dan Karier PPNS"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0001",
    "nama_sub_kegiatan": "Pencegahan Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0002",
    "nama_sub_kegiatan": "Pemadaman dan Pengendalian Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0003",
    "nama_sub_kegiatan": "Penyelamatan dan Evakuasi Korban Kebakaran dan Non Kebakaran"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0004",
    "nama_sub_kegiatan": "Penanganan Bahan Berbahaya dan Beracun Kebakaran dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0007",
    "nama_sub_kegiatan": "Pembinaan Aparatur Pemadam Kebakaran"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0008",
    "nama_sub_kegiatan": "Pengelolaan Sistem Komunikasi dan Informasi Kebakaran dan Penyelamatan (SKIK)"
  },
  {
    "kode_kegiatan": "1.05.04.2.01",
    "kode_sub_kegiatan": "1.05.04.2.01.0017",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pencegahan, Penanggulangan Kebakaran dan Alat Pelindung Diri"
  },
  {
    "kode_kegiatan": "1.05.04.2.02",
    "kode_sub_kegiatan": "1.05.04.2.02.0002",
    "nama_sub_kegiatan": "Penilaian Sarana Prasarana Proteksi Kebakaran"
  },
  {
    "kode_kegiatan": "1.05.04.2.04",
    "kode_sub_kegiatan": "1.05.04.2.04.0002",
    "nama_sub_kegiatan": "Pembentukan dan Pembinaan Relawan Pemadam Kebakaran"
  },
  {
    "kode_kegiatan": "1.05.04.2.04",
    "kode_sub_kegiatan": "1.05.04.2.04.0003",
    "nama_sub_kegiatan": "Dukungan Pemberdayaan Masyarakat/Relawan Pemadam Kebakaran Melalui Penyediaan Sarana dan PraSarana"
  },
  {
    "kode_kegiatan": "1.05.04.2.05",
    "kode_sub_kegiatan": "1.05.04.2.05.0001",
    "nama_sub_kegiatan": "Penyelenggaraan Operasi Pencarian dan Pertolongan pada Peristiwa yang Menimpa, Membahayakan, dan/atau Mengancam Keselamatan Manusia"
  },
  {
    "kode_kegiatan": "1.05.01.2.02",
    "kode_sub_kegiatan": "1.05.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.05.01.2.02",
    "kode_sub_kegiatan": "1.05.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "1.05.01.2.05",
    "kode_sub_kegiatan": "1.05.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.05.01.2.08",
    "kode_sub_kegiatan": "1.05.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "1.05.01.2.08",
    "kode_sub_kegiatan": "1.05.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.08",
    "kode_sub_kegiatan": "1.05.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "1.05.03.2.01",
    "kode_sub_kegiatan": "1.05.03.2.01.0003",
    "nama_sub_kegiatan": "Penyusunan Kajian Risiko Bencana Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.03.2.01",
    "kode_sub_kegiatan": "1.05.03.2.01.0004",
    "nama_sub_kegiatan": "Sosialisasi, Komunikasi, Informasi dan Edukasi (KIE) Rawan Bencana Kabupaten/Kota (Per Jenis Ancaman Bencana)"
  },
  {
    "kode_kegiatan": "1.05.03.2.02",
    "kode_sub_kegiatan": "1.05.03.2.02.0010",
    "nama_sub_kegiatan": "Gladi Kesiapsiagaan Terhadap Bencana"
  },
  {
    "kode_kegiatan": "1.05.03.2.02",
    "kode_sub_kegiatan": "1.05.03.2.02.0014",
    "nama_sub_kegiatan": "Penyusunan Rencana Penanggulangan Bencana Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.03.2.02",
    "kode_sub_kegiatan": "1.05.03.2.02.0015",
    "nama_sub_kegiatan": "Penyediaan Peralatan Perlindungan dan Kesiapsiagaan Terhadap Bencana kabupaten/kota"
  },
  {
    "kode_kegiatan": "1.05.03.2.02",
    "kode_sub_kegiatan": "1.05.03.2.02.0016",
    "nama_sub_kegiatan": "Pelatihan Pencegahan dan Mitigasi Bencana Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.03.2.03",
    "kode_sub_kegiatan": "1.05.03.2.03.0003",
    "nama_sub_kegiatan": "Pencarian, Pertolongan dan Evakuasi Korban Bencana Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.03.2.04",
    "kode_sub_kegiatan": "1.05.03.2.04.0002",
    "nama_sub_kegiatan": "Penguatan Kelembagaan Bencana Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.05.03.2.04",
    "kode_sub_kegiatan": "1.05.03.2.04.0004",
    "nama_sub_kegiatan": "Pengelolaan dan Pemanfaatan Sistem Informasi Kebencanaan"
  },
  {
    "kode_kegiatan": "1.05.03.2.04",
    "kode_sub_kegiatan": "1.05.03.2.04.0013",
    "nama_sub_kegiatan": "Penyusunan Kajian Kebutuhan Pascabencana (JITUPASNA) dan Rencana Rehabilitasi dan Rekontruksi Pascabencana (R3P) Kab/Kota"
  },
  {
    "kode_kegiatan": "1.05.01.2.02",
    "kode_sub_kegiatan": "1.05.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.05.01.2.06",
    "kode_sub_kegiatan": "1.05.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "1.05.01.2.08",
    "kode_sub_kegiatan": "1.05.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "1.05.01.2.08",
    "kode_sub_kegiatan": "1.05.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "1.05.01.2.08",
    "kode_sub_kegiatan": "1.05.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0007",
    "nama_sub_kegiatan": "Pemeliharaan Aset Tetap Lainnya"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0008",
    "nama_sub_kegiatan": "Pemeliharaan Aset Tak Berwujud"
  },
  {
    "kode_kegiatan": "1.05.01.2.09",
    "kode_sub_kegiatan": "1.05.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.06.02.2.03",
    "kode_sub_kegiatan": "1.06.02.2.03.0001",
    "nama_sub_kegiatan": "Peningkatan Kemampuan Potensi Pekerja Sosial Masyarakat Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.06.02.2.03",
    "kode_sub_kegiatan": "1.06.02.2.03.0002",
    "nama_sub_kegiatan": "Peningkatan Kemampuan Potensi Tenaga Kesejahteraan Sosial Kecamatan Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.06.02.2.03",
    "kode_sub_kegiatan": "1.06.02.2.03.0003",
    "nama_sub_kegiatan": "Peningkatan Kemampuan Potensi Sumber Kesejahteraan Sosial Keluarga Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.06.02.2.03",
    "kode_sub_kegiatan": "1.06.02.2.03.0004",
    "nama_sub_kegiatan": "Peningkatan Kemampuan Potensi Sumber Kesejahteraan Sosial Kelembagaan Masyarakat Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.06.04.2.01",
    "kode_sub_kegiatan": "1.06.04.2.01.0002",
    "nama_sub_kegiatan": "Penyediaan Sandang"
  },
  {
    "kode_kegiatan": "1.06.04.2.01",
    "kode_sub_kegiatan": "1.06.04.2.01.0004",
    "nama_sub_kegiatan": "Pemberian Pelayanan Reunifikasi Keluarga"
  },
  {
    "kode_kegiatan": "1.06.04.2.01",
    "kode_sub_kegiatan": "1.06.04.2.01.0006",
    "nama_sub_kegiatan": "Pemberian Bimbingan Sosial kepada Keluarga Penyandang Disabilitas Terlantar, Anak Terlantar, Lanjut Usia Terlantar, serta Gelandangan Pengemis dan Masyarakat"
  },
  {
    "kode_kegiatan": "1.06.04.2.01",
    "kode_sub_kegiatan": "1.06.04.2.01.0010",
    "nama_sub_kegiatan": "Pemberian Layanan Kedaruratan"
  },
  {
    "kode_kegiatan": "1.06.04.2.01",
    "kode_sub_kegiatan": "1.06.04.2.01.0011",
    "nama_sub_kegiatan": "Pemberian Pelayanan Penelusuran Keluarga"
  },
  {
    "kode_kegiatan": "1.06.04.2.01",
    "kode_sub_kegiatan": "1.06.04.2.01.0012",
    "nama_sub_kegiatan": "Pemberian Layanan Rujukan"
  },
  {
    "kode_kegiatan": "1.06.04.2.02",
    "kode_sub_kegiatan": "1.06.04.2.02.0001",
    "nama_sub_kegiatan": "Pemberian Layanan Data dan Pengaduan"
  },
  {
    "kode_kegiatan": "1.06.04.2.02",
    "kode_sub_kegiatan": "1.06.04.2.02.0003",
    "nama_sub_kegiatan": "Penyediaan Permakanan"
  },
  {
    "kode_kegiatan": "1.06.04.2.02",
    "kode_sub_kegiatan": "1.06.04.2.02.0007",
    "nama_sub_kegiatan": "Pemberian Bimbingan Fisik, Mental, Spiritual, dan Sosial"
  },
  {
    "kode_kegiatan": "1.06.04.2.02",
    "kode_sub_kegiatan": "1.06.04.2.02.0008",
    "nama_sub_kegiatan": "Pemberian Bimbingan Sosial kepada Keluarga Penyandang Masalah Kesejahteraan Sosial (PMKS) Lainnya Bukan Korban HIV/AIDS dan NAPZA"
  },
  {
    "kode_kegiatan": "1.06.04.2.02",
    "kode_sub_kegiatan": "1.06.04.2.02.0013",
    "nama_sub_kegiatan": "Pemberian Layanan Rujukan"
  },
  {
    "kode_kegiatan": "1.06.04.2.02",
    "kode_sub_kegiatan": "1.06.04.2.02.0014",
    "nama_sub_kegiatan": "Kerja Sama antar Lembaga dan Kemitraan dalam Pelaksanaan Rehabilitasi Sosial Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.06.05.2.02",
    "kode_sub_kegiatan": "1.06.05.2.02.0001",
    "nama_sub_kegiatan": "Pendataan Fakir Miskin Cakupan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "1.06.05.2.02",
    "kode_sub_kegiatan": "1.06.05.2.02.0003",
    "nama_sub_kegiatan": "Fasilitasi Bantuan Sosial Kesejahteraan Keluarga"
  },
  {
    "kode_kegiatan": "1.06.06.2.01",
    "kode_sub_kegiatan": "1.06.06.2.01.0004",
    "nama_sub_kegiatan": "Penanganan Khusus bagi Kelompok Rentan"
  },
  {
    "kode_kegiatan": "1.06.06.2.02",
    "kode_sub_kegiatan": "1.06.06.2.02.0002",
    "nama_sub_kegiatan": "Koordinasi, Sosialisasi dan Pelaksanaan Taruna Siaga Bencana"
  },
  {
    "kode_kegiatan": "1.06.01.2.01",
    "kode_sub_kegiatan": "1.06.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "1.06.01.2.01",
    "kode_sub_kegiatan": "1.06.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "1.06.01.2.02",
    "kode_sub_kegiatan": "1.06.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "1.06.01.2.06",
    "kode_sub_kegiatan": "1.06.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "1.06.01.2.07",
    "kode_sub_kegiatan": "1.06.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "1.06.01.2.07",
    "kode_sub_kegiatan": "1.06.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "1.06.01.2.07",
    "kode_sub_kegiatan": "1.06.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "1.06.01.2.08",
    "kode_sub_kegiatan": "1.06.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "1.06.01.2.08",
    "kode_sub_kegiatan": "1.06.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "1.06.01.2.08",
    "kode_sub_kegiatan": "1.06.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "1.06.01.2.09",
    "kode_sub_kegiatan": "1.06.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "1.06.01.2.09",
    "kode_sub_kegiatan": "1.06.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "1.06.01.2.09",
    "kode_sub_kegiatan": "1.06.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "1.06.01.2.09",
    "kode_sub_kegiatan": "1.06.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.07.03.2.01",
    "kode_sub_kegiatan": "2.07.03.2.01.0001",
    "nama_sub_kegiatan": "Proses Pelaksanaan Pendidikan dan Pelatihan Keterampilan bagi Pencari Kerja berdasarkan Klaster Kompetensi"
  },
  {
    "kode_kegiatan": "2.07.03.2.02",
    "kode_sub_kegiatan": "2.07.03.2.02.0001",
    "nama_sub_kegiatan": "Pembinaan Lembaga Pelatihan Kerja Swasta"
  },
  {
    "kode_kegiatan": "2.07.03.2.04",
    "kode_sub_kegiatan": "2.07.03.2.04.0001",
    "nama_sub_kegiatan": "Pelaksanaan Konsultasi Produktivitas kepada Perusahaan Kecil"
  },
  {
    "kode_kegiatan": "2.07.04.2.01",
    "kode_sub_kegiatan": "2.07.04.2.01.0001",
    "nama_sub_kegiatan": "Penyediaan Sumber Daya Pelayanan antar Kerja"
  },
  {
    "kode_kegiatan": "2.07.04.2.01",
    "kode_sub_kegiatan": "2.07.04.2.01.0002",
    "nama_sub_kegiatan": "Pelayanan antar Kerja"
  },
  {
    "kode_kegiatan": "2.07.04.2.01",
    "kode_sub_kegiatan": "2.07.04.2.01.0003",
    "nama_sub_kegiatan": "Penyuluhan dan Bimbingan Jabatan bagi Pencari Kerja"
  },
  {
    "kode_kegiatan": "2.07.04.2.01",
    "kode_sub_kegiatan": "2.07.04.2.01.0004",
    "nama_sub_kegiatan": "Penyelenggaraan Unit Layanan Disabilitas Ketenagakerjaan"
  },
  {
    "kode_kegiatan": "2.07.04.2.04",
    "kode_sub_kegiatan": "2.07.04.2.04.0003",
    "nama_sub_kegiatan": "Pemberdayaan Pekerja Migran Indonesia Purna Penempatan"
  },
  {
    "kode_kegiatan": "2.07.05.2.01",
    "kode_sub_kegiatan": "2.07.05.2.01.0001",
    "nama_sub_kegiatan": "Pengesahan Peraturan Perusahaan bagi Perusahaan"
  },
  {
    "kode_kegiatan": "2.07.05.2.01",
    "kode_sub_kegiatan": "2.07.05.2.01.0003",
    "nama_sub_kegiatan": "Penyelenggaraan Pendataan dan Informasi Sarana Hubungan Industrial dan Jaminan Sosial Tenaga Kerja serta Pengupahan"
  },
  {
    "kode_kegiatan": "2.07.05.2.02",
    "kode_sub_kegiatan": "2.07.05.2.02.0001",
    "nama_sub_kegiatan": "Pencegahan Perselisihan Hubungan Industrial, Mogok Kerja, dan Penutupan Perusahaan yang Berakibat/Berdampak pada Kepentingan di 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.07.05.2.02",
    "kode_sub_kegiatan": "2.07.05.2.02.0002",
    "nama_sub_kegiatan": "Penyelesaian Perselisihan Hubungan Industrial, Mogok Kerja, dan Penutupan Perusahaan yang Berakibat/Berdampak pada Kepentingan di 1 (satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.07.01.2.01",
    "kode_sub_kegiatan": "2.07.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "2.07.01.2.02",
    "kode_sub_kegiatan": "2.07.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.07.01.2.06",
    "kode_sub_kegiatan": "2.07.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.07.01.2.07",
    "kode_sub_kegiatan": "2.07.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.07.01.2.08",
    "kode_sub_kegiatan": "2.07.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.07.01.2.08",
    "kode_sub_kegiatan": "2.07.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.07.01.2.09",
    "kode_sub_kegiatan": "2.07.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.07.01.2.09",
    "kode_sub_kegiatan": "2.07.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "3.31.02.2.01",
    "kode_sub_kegiatan": "3.31.02.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi, dan Pelaksanaan Pembangunan Sumber Daya Industri"
  },
  {
    "kode_kegiatan": "3.31.03.2.01",
    "kode_sub_kegiatan": "3.31.03.2.01.0004",
    "nama_sub_kegiatan": "Fasilitasi verifikasi pemenuhan persyaratan/standar kegiatan usaha sektor perindustrian dalam rangka penerbitan perizinan berusaha berbasis risiko melalui Sistem Informasi Industri Nasional (SIINas) yang terintegrasi dengan Sistem Online Single Submission Risk Base Approach (OSS RBA)"
  },
  {
    "kode_kegiatan": "3.31.04.2.01",
    "kode_sub_kegiatan": "3.31.04.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Pengumpulan, Pengolahan dan Analisis Data Industri, Data Kawasan Industri serta Data Lain Lingkup Kabupaten/Kota Melalui Sistem Informasi Industri Nasional (SIINas)"
  },
  {
    "kode_kegiatan": "3.32.03.2.01",
    "kode_sub_kegiatan": "3.32.03.2.01.0004",
    "nama_sub_kegiatan": "Pemindahan dan Penempatan Transmigran yang Berasal dari 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.32.03.2.01",
    "kode_sub_kegiatan": "3.32.03.2.01.0005",
    "nama_sub_kegiatan": "Penyuluhan Transmigrasi"
  },
  {
    "kode_kegiatan": "2.09.03.2.01",
    "kode_sub_kegiatan": "2.09.03.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Pelaksanaan Distribusi Pangan Pokok dan Pangan Lainnya"
  },
  {
    "kode_kegiatan": "2.09.03.2.01",
    "kode_sub_kegiatan": "2.09.03.2.01.0014",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Pemantauan Stok, Pasokan dan Harga Pangan Pokok Strategis"
  },
  {
    "kode_kegiatan": "2.09.03.2.02",
    "kode_sub_kegiatan": "2.09.03.2.02.0006",
    "nama_sub_kegiatan": "Pengelolaan Cadangan Pangan Pemerintah Kab/Kota"
  },
  {
    "kode_kegiatan": "2.09.03.2.04",
    "kode_sub_kegiatan": "2.09.03.2.04.0001",
    "nama_sub_kegiatan": "Penyusunan dan Penetapan Target Konsumsi Pangan Per Kapita Per Tahun"
  },
  {
    "kode_kegiatan": "2.09.03.2.04",
    "kode_sub_kegiatan": "2.09.03.2.04.0002",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat dalam Penganekaragaman Konsumsi Pangan Berbasis Sumber Daya Lokal"
  },
  {
    "kode_kegiatan": "2.09.04.2.02",
    "kode_sub_kegiatan": "2.09.04.2.02.0003",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Penanganan Kerawanan Pangan dan Gizi Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.09.05.2.01",
    "kode_sub_kegiatan": "2.09.05.2.01.0004",
    "nama_sub_kegiatan": "Rekomendasi Keamanan Pangan Segar Asal Tumbuhan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.09.05.2.01",
    "kode_sub_kegiatan": "2.09.05.2.01.0007",
    "nama_sub_kegiatan": "Penyediaan Sarana Pengujian keamanan dan mutu pangan segar asal tumbuhan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.09.01.2.01",
    "kode_sub_kegiatan": "2.09.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.09.01.2.02",
    "kode_sub_kegiatan": "2.09.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.09.01.2.06",
    "kode_sub_kegiatan": "2.09.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.09.01.2.08",
    "kode_sub_kegiatan": "2.09.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "2.09.01.2.08",
    "kode_sub_kegiatan": "2.09.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.09.01.2.08",
    "kode_sub_kegiatan": "2.09.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.09.01.2.09",
    "kode_sub_kegiatan": "2.09.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "2.09.01.2.09",
    "kode_sub_kegiatan": "2.09.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "2.09.01.2.09",
    "kode_sub_kegiatan": "2.09.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.09.01.2.09",
    "kode_sub_kegiatan": "2.09.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "3.27.02.2.05",
    "kode_sub_kegiatan": "3.27.02.2.05.0009",
    "nama_sub_kegiatan": "Pengendalian Penyediaan Benih/Bibit Ternak dan Hijauan Pakan Ternak"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0009",
    "nama_sub_kegiatan": "Pembangunan, Rehabilitasi dan Pemeliharaan Prasarana Pertanian Lainnya"
  },
  {
    "kode_kegiatan": "3.27.04.2.01",
    "kode_sub_kegiatan": "3.27.04.2.01.0008",
    "nama_sub_kegiatan": "Pemberantasan Penyakit Hewan Menular dan Zoonosis dalam 1 (satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.27.04.2.03",
    "kode_sub_kegiatan": "3.27.04.2.03.0002",
    "nama_sub_kegiatan": "Penyediaan Pelayanan Jasa Medik Veteriner"
  },
  {
    "kode_kegiatan": "3.27.07.2.01",
    "kode_sub_kegiatan": "3.27.07.2.01.0002",
    "nama_sub_kegiatan": "Pengembangan Kapasitas Kelembagaan Petani di Kecamatan dan Desa"
  },
  {
    "kode_kegiatan": "2.11.02.2.01",
    "kode_sub_kegiatan": "2.11.02.2.01.0002",
    "nama_sub_kegiatan": "Pengendalian Pelaksanaan RPPLH Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.11.02.2.01",
    "kode_sub_kegiatan": "2.11.02.2.01.0006",
    "nama_sub_kegiatan": "Penyusunan RPPLH Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.11.02.2.02",
    "kode_sub_kegiatan": "2.11.02.2.02.0002",
    "nama_sub_kegiatan": "Pembuatan dan Pelaksanaan KLHS RPJPD/RPJMD"
  },
  {
    "kode_kegiatan": "2.11.02.2.02",
    "kode_sub_kegiatan": "2.11.02.2.02.0005",
    "nama_sub_kegiatan": "Penyelenggaraan KLHS Rencana Tata Ruang"
  },
  {
    "kode_kegiatan": "2.11.02.2.02",
    "kode_sub_kegiatan": "2.11.02.2.02.0006",
    "nama_sub_kegiatan": "Penyelenggaraan KLHS untuk KRP yang Berpotensi Menimbulkan Dampak/Resiko Lingkungan Hidup"
  },
  {
    "kode_kegiatan": "2.11.03.2.01",
    "kode_sub_kegiatan": "2.11.03.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi, dan Pelaksanaan Pencegahan Pencemaran Lingkungan Hidup Dilaksanakan Terhadap Media Tanah, Air, Udara, dan Laut"
  },
  {
    "kode_kegiatan": "2.11.03.2.01",
    "kode_sub_kegiatan": "2.11.03.2.01.0002",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Pelaksanaan Pengendalian Emisi Gas Rumah Kaca, Mitigasi dan Adaptasi Perubahan Iklim"
  },
  {
    "kode_kegiatan": "2.11.03.2.01",
    "kode_sub_kegiatan": "2.11.03.2.01.0015",
    "nama_sub_kegiatan": "Pengelolaan Laboratorium Lingkungan Hidup kabupaten/kota"
  },
  {
    "kode_kegiatan": "2.11.03.2.02",
    "kode_sub_kegiatan": "2.11.03.2.02.0001",
    "nama_sub_kegiatan": "Pemberian Informasi Peringatan Pencemaran dan/atau Kerusakan Lingkungan Hidup pada Masyarakat"
  },
  {
    "kode_kegiatan": "2.11.03.2.02",
    "kode_sub_kegiatan": "2.11.03.2.02.0003",
    "nama_sub_kegiatan": "Penghentian Pencemaran dan/atau Kerusakan Lingkungan Hidup"
  },
  {
    "kode_kegiatan": "2.11.03.2.03",
    "kode_sub_kegiatan": "2.11.03.2.03.0013",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi rehabilitasi"
  },
  {
    "kode_kegiatan": "2.11.04.2.01",
    "kode_sub_kegiatan": "2.11.04.2.01.0004",
    "nama_sub_kegiatan": "Pengelolaan Ruang Terbuka Hijau (RTH)"
  },
  {
    "kode_kegiatan": "2.11.04.2.01",
    "kode_sub_kegiatan": "2.11.04.2.01.0006",
    "nama_sub_kegiatan": "Pengembangan Kapasitas Kelembagaan dan SDM dalam Pengelolaan Keanekaragaman Hayati"
  },
  {
    "kode_kegiatan": "2.11.04.2.01",
    "kode_sub_kegiatan": "2.11.04.2.01.0007",
    "nama_sub_kegiatan": "Pengelolaan Sarana dan Prasarana Keanekaragaman Hayati"
  },
  {
    "kode_kegiatan": "2.11.04.2.01",
    "kode_sub_kegiatan": "2.11.04.2.01.0008",
    "nama_sub_kegiatan": "Pengelolaan Taman Keanekaragaman Hayati Lainnya"
  },
  {
    "kode_kegiatan": "2.11.05.2.01",
    "kode_sub_kegiatan": "2.11.05.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Pemenuhan Komitmen Izin Penyimpanan sementara Limbah B3 Dilaksanakan Melalui Sistem Pelayanan Perizinan Berusaha Terintegrasi Secara Elektronik"
  },
  {
    "kode_kegiatan": "2.11.05.2.01",
    "kode_sub_kegiatan": "2.11.05.2.01.0002",
    "nama_sub_kegiatan": "Verifikasi Lapangan untuk Memastikan Pemenuhan Persyaratan Administrasi dan Teknis Penyimpanan sementara Limbah B3"
  },
  {
    "kode_kegiatan": "2.11.06.2.01",
    "kode_sub_kegiatan": "2.11.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Pemenuhan Ketentuan dan Kewajiban Izin Lingkungan dan/atau Izin PPLH"
  },
  {
    "kode_kegiatan": "2.11.08.2.01",
    "kode_sub_kegiatan": "2.11.08.2.01.0002",
    "nama_sub_kegiatan": "Pendampingan Gerakan Peduli Lingkungan Hidup "
  },
  {
    "kode_kegiatan": "2.11.08.2.01",
    "kode_sub_kegiatan": "2.11.08.2.01.0005",
    "nama_sub_kegiatan": "Peningkatan Kapasitas dan Kompetensi Sumber Daya Manusia Bidang lingkungan hidup untuk Lembaga pendidikan formal/lembaga masyarakat/komunitas/kelompok masyarakat"
  },
  {
    "kode_kegiatan": "2.11.09.2.01",
    "kode_sub_kegiatan": "2.11.09.2.01.0001",
    "nama_sub_kegiatan": "Penilaian Kinerja Masyarakat/Lembaga Masyarakat/Dunia Usaha/Dunia Pendidikan/Filantropi dalam Perlindungan dan Pengelolaan Lingkungan Hidup"
  },
  {
    "kode_kegiatan": "2.11.10.2.01",
    "kode_sub_kegiatan": "2.11.10.2.01.0004",
    "nama_sub_kegiatan": "Pengelolaan Pengaduan permasalahan Pencemaran dan Perusakan Lingkungan Hidup tingkat Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.11.11.2.01",
    "kode_sub_kegiatan": "2.11.11.2.01.0004",
    "nama_sub_kegiatan": "Peningkatan Peran Serta Masyarakat dalam Pengelolaan Persampahan"
  },
  {
    "kode_kegiatan": "2.11.11.2.01",
    "kode_sub_kegiatan": "2.11.11.2.01.0005",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Penyediaan Prasarana dan Sarana Pengelolaan Persampahan"
  },
  {
    "kode_kegiatan": "2.11.11.2.01",
    "kode_sub_kegiatan": "2.11.11.2.01.0007",
    "nama_sub_kegiatan": "Penyediaan Sarana dan Prasarana Pengelolaan Persampahan di TPA/TPST/SPA Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.11.11.2.01",
    "kode_sub_kegiatan": "2.11.11.2.01.0013",
    "nama_sub_kegiatan": "Pengurangan sampah melalui pemanfaatan kembali sampah"
  },
  {
    "kode_kegiatan": "2.11.11.2.01",
    "kode_sub_kegiatan": "2.11.11.2.01.0020",
    "nama_sub_kegiatan": "Penanganan sampah melalui pemrosesan  akhir sampah di TPA/TPST kabupaten/kota atau TPA/TPST Regional"
  },
  {
    "kode_kegiatan": "2.11.01.2.01",
    "kode_sub_kegiatan": "2.11.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.11.01.2.02",
    "kode_sub_kegiatan": "2.11.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.11.01.2.06",
    "kode_sub_kegiatan": "2.11.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.11.01.2.08",
    "kode_sub_kegiatan": "2.11.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.11.01.2.08",
    "kode_sub_kegiatan": "2.11.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.11.01.2.09",
    "kode_sub_kegiatan": "2.11.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.11.01.2.09",
    "kode_sub_kegiatan": "2.11.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.11.01.2.09",
    "kode_sub_kegiatan": "2.11.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.12.02.2.01",
    "kode_sub_kegiatan": "2.12.02.2.01.0001",
    "nama_sub_kegiatan": "Pendataan Penduduk Non Permanen dan Rentan Administrasi Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.02.2.01",
    "kode_sub_kegiatan": "2.12.02.2.01.0003",
    "nama_sub_kegiatan": "Penyelesaian Masalah Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.01",
    "kode_sub_kegiatan": "2.12.02.2.01.0006",
    "nama_sub_kegiatan": "Pencatatan Atas Pelaporan Peristiwa Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.02.2.01",
    "kode_sub_kegiatan": "2.12.02.2.01.0007",
    "nama_sub_kegiatan": "Penerbitan Dokumen Atas Hasil Pelaporan Peristiwa Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.02.2.02",
    "kode_sub_kegiatan": "2.12.02.2.02.0001",
    "nama_sub_kegiatan": "Penyusunan Tata Cara Perencanaan, Pelaksanaan, Pemantauan, Evaluasi, Pengendalian, dan Pelaporan Penyelenggaraan Adminduk Terkait Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.02",
    "kode_sub_kegiatan": "2.12.02.2.02.0002",
    "nama_sub_kegiatan": "Pengadaan Dokumen Kependudukan selain Blangko KTP-El, Formulir, dan Buku Terkait Pendaftaran Penduduk Sesuai dengan Kebutuhan"
  },
  {
    "kode_kegiatan": "2.12.02.2.03",
    "kode_sub_kegiatan": "2.12.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi antar Lembaga Pemerintah dan Lembaga Non-Pemerintah di Kabupaten/Kota dalam Penertiban Pelayanan Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.03",
    "kode_sub_kegiatan": "2.12.02.2.03.0002",
    "nama_sub_kegiatan": "Pelayanan Secara Aktif Pendaftaran Peristiwa Kependudukan dan Pencatatan Peristiwa Penting Terkait Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.03",
    "kode_sub_kegiatan": "2.12.02.2.03.0003",
    "nama_sub_kegiatan": "Fasilitasi Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.03",
    "kode_sub_kegiatan": "2.12.02.2.03.0005",
    "nama_sub_kegiatan": "Sosialisasi Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.04",
    "kode_sub_kegiatan": "2.12.02.2.04.0001",
    "nama_sub_kegiatan": "Pengelolaan dan Pelaporan Penggunaan Blangko Dokumen Kependudukan, Formulir, dan Buku untuk Pelayanan Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.04",
    "kode_sub_kegiatan": "2.12.02.2.04.0002",
    "nama_sub_kegiatan": "Pembinaan dan Pengawasan Terkait Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.02.2.04",
    "kode_sub_kegiatan": "2.12.02.2.04.0003",
    "nama_sub_kegiatan": "Bimbingan Teknis Terkait Pendaftaran Penduduk"
  },
  {
    "kode_kegiatan": "2.12.03.2.01",
    "kode_sub_kegiatan": "2.12.03.2.01.0001",
    "nama_sub_kegiatan": "Pencatatan, Penatausahaan dan Penerbitan Dokumen Atas Pelaporan Peristiwa Penting"
  },
  {
    "kode_kegiatan": "2.12.03.2.01",
    "kode_sub_kegiatan": "2.12.03.2.01.0003",
    "nama_sub_kegiatan": "Pengumpulan, Analisis, dan Diseminasi Data Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.01",
    "kode_sub_kegiatan": "2.12.03.2.01.0005",
    "nama_sub_kegiatan": "Pengadaan Dokumen Kependudukan selain Blangko KTP-El, Formulir, dan Buku Terkait Pencatatan Sipil Sesuai dengan Kebutuhan"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi dengan Kantor Kementerian yang Menyelenggarakan Urusan Pemerintahan di Bidang Agama Kabupaten/Kota dan Pengadilan Agama yang Berkaitan dengan Pencatatan Nikah, Talak, Cerai, dan Rujuk bagi Penduduk yang Beragama Islam"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0002",
    "nama_sub_kegiatan": "Koordinasi dengan Kantor Kementerian yang Menyelenggarakan Urusan Pemerintahan di Bidang Agama Kabupaten/Kota dalam Memelihara Hubungan Timbal Balik Melalui Pembinaan Masing-Masing kepada Instansi Vertikal dan UPT Dinas Kependudukan dan Pencatatan Sipil Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0003",
    "nama_sub_kegiatan": "Koordinasi antar Lembaga Pemerintah dan Lembaga Non-Pemerintah di Kabupaten/Kota dalam Penertiban Pelayanan Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0004",
    "nama_sub_kegiatan": "Pelayanan Secara Aktif Pendaftaran Peristiwa Kependudukan dan Pencatatan Peristiwa Penting Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0005",
    "nama_sub_kegiatan": "Penerimaan dan Permintaan Data Kependudukan dari Perwakilan Republik Indonesia Melalui Menteri Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0006",
    "nama_sub_kegiatan": "Fasilitasi Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0008",
    "nama_sub_kegiatan": "Sosialisasi Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0010",
    "nama_sub_kegiatan": "Komunikasi, Informasi, dan Edukasi kepada Pemangku Kepentingan dan Masyarakat Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.02",
    "kode_sub_kegiatan": "2.12.03.2.02.0011",
    "nama_sub_kegiatan": "Penyajian Data Kependudukan yang Akurat dan Dapat Dipertanggungjawabkan Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.03",
    "kode_sub_kegiatan": "2.12.03.2.03.0001",
    "nama_sub_kegiatan": "Pengelolaan dan Pelaporan Penggunaan Blangko Dokumen Kependudukan, Formulir, dan Buku untuk Pelayanan Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.03.2.03",
    "kode_sub_kegiatan": "2.12.03.2.03.0004",
    "nama_sub_kegiatan": "Bimbingan Teknis Terkait Pencatatan Sipil"
  },
  {
    "kode_kegiatan": "2.12.04.2.01",
    "kode_sub_kegiatan": "2.12.04.2.01.0001",
    "nama_sub_kegiatan": "Pengolahan dan Penyajian Data Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.01",
    "kode_sub_kegiatan": "2.12.04.2.01.0002",
    "nama_sub_kegiatan": "Kerja Sama Pemanfaatan Data Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.01",
    "kode_sub_kegiatan": "2.12.04.2.01.0003",
    "nama_sub_kegiatan": "Inventarisasi Data untuk Kepentingan Pembangunan Daerah"
  },
  {
    "kode_kegiatan": "2.12.04.2.02",
    "kode_sub_kegiatan": "2.12.04.2.02.0001",
    "nama_sub_kegiatan": "Penyusunan Tata Cara Perencanaan, Pelaksanaan, Pemantauan, Evaluasi, Pengendalian, dan Pelaporan Penyelenggaraan Adminduk Terkait Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.03",
    "kode_sub_kegiatan": "2.12.04.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi Antar Lembaga Pemerintah dan Lembaga Non-Pemerintah di Kabupaten/Kota dalam Penertiban Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.03",
    "kode_sub_kegiatan": "2.12.04.2.03.0004",
    "nama_sub_kegiatan": "Penyelenggaraan Pemanfaatan Data Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.03",
    "kode_sub_kegiatan": "2.12.04.2.03.0005",
    "nama_sub_kegiatan": "Sosialisasi Terkait Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.03",
    "kode_sub_kegiatan": "2.12.04.2.03.0006",
    "nama_sub_kegiatan": "Kerja Sama dengan Organisasi Kemasyarakatan dan Perguruan Tinggi"
  },
  {
    "kode_kegiatan": "2.12.04.2.03",
    "kode_sub_kegiatan": "2.12.04.2.03.0007",
    "nama_sub_kegiatan": "Komunikasi, Informasi, dan Edukasi kepada Pemangku Kepentingan dan Masyarakat"
  },
  {
    "kode_kegiatan": "2.12.04.2.03",
    "kode_sub_kegiatan": "2.12.04.2.03.0008",
    "nama_sub_kegiatan": "Penyajian Data Kependudukan yang Akurat dan dapat Dipertanggungjawabkan"
  },
  {
    "kode_kegiatan": "2.12.04.2.04",
    "kode_sub_kegiatan": "2.12.04.2.04.0001",
    "nama_sub_kegiatan": "Pembinaan dan Pengawasan Terkait Pengelolaan Informasi Administrasi Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.04.2.04",
    "kode_sub_kegiatan": "2.12.04.2.04.0003",
    "nama_sub_kegiatan": "Bimbingan Teknis Terkait Pengelolaan Informasi Administrasi Kependudukan dan Pendayagunaan Data Kependudukan"
  },
  {
    "kode_kegiatan": "2.12.05.2.01",
    "kode_sub_kegiatan": "2.12.05.2.01.0001",
    "nama_sub_kegiatan": "Penyediaan Data Kependudukan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.12.05.2.01",
    "kode_sub_kegiatan": "2.12.05.2.01.0002",
    "nama_sub_kegiatan": "Penyusunan Profil Data Perkembangan dan Proyeksi Kependudukan serta Kebutuhan yang Lain"
  },
  {
    "kode_kegiatan": "2.12.01.2.01",
    "kode_sub_kegiatan": "2.12.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.12.01.2.02",
    "kode_sub_kegiatan": "2.12.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "2.12.01.2.06",
    "kode_sub_kegiatan": "2.12.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.12.01.2.07",
    "kode_sub_kegiatan": "2.12.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.12.01.2.08",
    "kode_sub_kegiatan": "2.12.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "2.12.01.2.08",
    "kode_sub_kegiatan": "2.12.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.12.01.2.08",
    "kode_sub_kegiatan": "2.12.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.12.01.2.08",
    "kode_sub_kegiatan": "2.12.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.13.02.2.01",
    "kode_sub_kegiatan": "2.13.02.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Penataan Kewenangan Desa"
  },
  {
    "kode_kegiatan": "2.13.03.2.01",
    "kode_sub_kegiatan": "2.13.03.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dalam Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.13.03.2.01",
    "kode_sub_kegiatan": "2.13.03.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pembangunan Kawasan Perdesaan"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyelenggaraan Administrasi Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Perencanaan Pembangunan Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0004",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0005",
    "nama_sub_kegiatan": "Pembinaan Peningkatan Kapasitas Aparatur Pemerintah Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Pemilihan, Pengangkatan dan Pemberhentian Kepala Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0011",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Profil Desa "
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0012",
    "nama_sub_kegiatan": "Fasilitasi Manajemen Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0013",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Aset Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0014",
    "nama_sub_kegiatan": "Pembinaan Peningkatan Kapasitas Anggota BPD"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0015",
    "nama_sub_kegiatan": "Fasilitasi Penetapan dan Penegasan Batas Desa"
  },
  {
    "kode_kegiatan": "2.13.04.2.01",
    "kode_sub_kegiatan": "2.13.04.2.01.0018",
    "nama_sub_kegiatan": "Fasilitasi Evaluasi Perkembangan Desa serta Lomba Desa dan Kelurahan"
  },
  {
    "kode_kegiatan": "2.13.05.2.01",
    "kode_sub_kegiatan": "2.13.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Penataan, Pemberdayaan dan Pendayagunaan Kelembagaan Lembaga Kemasyarakatan Desa/Kelurahan (RT, RW, PKK, Posyandu, LPM, dan Karang Taruna), Lembaga Adat Desa/Kelurahan dan Masyarakat Hukum Adat"
  },
  {
    "kode_kegiatan": "2.13.05.2.01",
    "kode_sub_kegiatan": "2.13.05.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Kelembagaan Lembaga Kemasyarakatan Desa/Kelurahan (RT, RW, PKK, Posyandu, LPM, dan Karang Taruna), Lembaga Adat Desa/Kelurahan dan Masyarakat Hukum Adat"
  },
  {
    "kode_kegiatan": "2.13.05.2.01",
    "kode_sub_kegiatan": "2.13.05.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pengembangan Usaha Ekonomi Masyarakat dan Pemerintah Desa dalam Meningkatkan Pendapatan Asli Desa"
  },
  {
    "kode_kegiatan": "2.13.05.2.01",
    "kode_sub_kegiatan": "2.13.05.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pemerintah Desa dalam Pemanfaatan Teknologi Tepat Guna"
  },
  {
    "kode_kegiatan": "2.13.05.2.01",
    "kode_sub_kegiatan": "2.13.05.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Bulan Bhakti Gotong Royong Masyarakat "
  },
  {
    "kode_kegiatan": "2.13.05.2.01",
    "kode_sub_kegiatan": "2.13.05.2.01.0009",
    "nama_sub_kegiatan": "Fasilitasi Tim Penggerak PKK dalam Penyelenggaraan Gerakan Pemberdayaan Masyarakat dan Kesejahteraan Keluarga"
  },
  {
    "kode_kegiatan": "2.13.01.2.01",
    "kode_sub_kegiatan": "2.13.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "2.13.01.2.01",
    "kode_sub_kegiatan": "2.13.01.2.01.0007",
    "nama_sub_kegiatan": "Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_kegiatan": "2.13.01.2.02",
    "kode_sub_kegiatan": "2.13.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.13.01.2.06",
    "kode_sub_kegiatan": "2.13.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.13.01.2.07",
    "kode_sub_kegiatan": "2.13.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.13.01.2.08",
    "kode_sub_kegiatan": "2.13.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.13.01.2.08",
    "kode_sub_kegiatan": "2.13.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.13.01.2.09",
    "kode_sub_kegiatan": "2.13.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.13.01.2.09",
    "kode_sub_kegiatan": "2.13.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "2.13.01.2.09",
    "kode_sub_kegiatan": "2.13.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.13.01.2.09",
    "kode_sub_kegiatan": "2.13.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.08.02.2.01",
    "kode_sub_kegiatan": "2.08.02.2.01.0003",
    "nama_sub_kegiatan": "Advokasi Kebijakan dan Pendampingan Pelaksanaan PUG termasuk PPRG"
  },
  {
    "kode_kegiatan": "2.08.02.2.02",
    "kode_sub_kegiatan": "2.08.02.2.02.0002",
    "nama_sub_kegiatan": "Advokasi Kebijakan dan Pendampingan Peningkatan Partisipasi Perempuan dan Politik, Hukum, Sosial dan Ekonomi"
  },
  {
    "kode_kegiatan": "2.08.02.2.03",
    "kode_sub_kegiatan": "2.08.02.2.03.0002",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Sumber Daya Lembaga Penyedia Layanan Pemberdayaan Perempuan Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.08.03.2.03",
    "kode_sub_kegiatan": "2.08.03.2.03.0004",
    "nama_sub_kegiatan": "Penguatan Jejaring antar Lembaga Penyedia Layanan Perlindungan Perempuan Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.08.06.2.02",
    "kode_sub_kegiatan": "2.08.06.2.02.0004",
    "nama_sub_kegiatan": "Penguatan Jejaring antar Lembaga Penyedia Layanan Peningkatan Kualitas Hidup Anak Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.08.07.2.02",
    "kode_sub_kegiatan": "2.08.07.2.02.0005",
    "nama_sub_kegiatan": "Penyediaan Layanan Pengaduan Masyarakat bagi Anak yang Memerlukan Perlindungan Khusus Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.08.07.2.02",
    "kode_sub_kegiatan": "2.08.07.2.02.0006",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Layanan AMPK"
  },
  {
    "kode_kegiatan": "2.14.02.2.01",
    "kode_sub_kegiatan": "2.14.02.2.01.0007",
    "nama_sub_kegiatan": "Penyediaan dan Pengembangan Materi Pendidikan Kependudukan Jalur Pendidikan Formal Sesuai Isu Lokal Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.14.02.2.02",
    "kode_sub_kegiatan": "2.14.02.2.02.0002",
    "nama_sub_kegiatan": "Penyediaan dan Pengolahan Data Kependudukan "
  },
  {
    "kode_kegiatan": "2.14.02.2.02",
    "kode_sub_kegiatan": "2.14.02.2.02.0009",
    "nama_sub_kegiatan": "Pembinaan dan Pengawasan Penyelenggaraan Sistem Informasi Keluarga"
  },
  {
    "kode_kegiatan": "2.14.02.2.02",
    "kode_sub_kegiatan": "2.14.02.2.02.0012",
    "nama_sub_kegiatan": "Pencatatan dan Pengumpulan Data Keluarga"
  },
  {
    "kode_kegiatan": "2.14.02.2.02",
    "kode_sub_kegiatan": "2.14.02.2.02.0013",
    "nama_sub_kegiatan": "Pengolahan dan Pelaporan Data Pengendalian Lapangan dan Pelayanan KB"
  },
  {
    "kode_kegiatan": "2.14.03.2.01",
    "kode_sub_kegiatan": "2.14.03.2.01.0008",
    "nama_sub_kegiatan": "Pengendalian Program KKBPK"
  },
  {
    "kode_kegiatan": "2.14.03.2.01",
    "kode_sub_kegiatan": "2.14.03.2.01.0010",
    "nama_sub_kegiatan": "Pengelolaan Operasional dan Sarana di Balai Penyuluhan Bangga Kencana"
  },
  {
    "kode_kegiatan": "2.14.03.2.01",
    "kode_sub_kegiatan": "2.14.03.2.01.0011",
    "nama_sub_kegiatan": "Pelaksanaan Mekanisme Operasional Program Bangga Kencana melalui Rapat Koordinasi Kecamatan (Rakorcam), Rapat Koordinasi Desa (Rakordes), dan Mini Lokakarya (Minilok)"
  },
  {
    "kode_kegiatan": "2.14.03.2.01",
    "kode_sub_kegiatan": "2.14.03.2.01.0012",
    "nama_sub_kegiatan": "Promosi dan KIE Program Bangga Kencana Melalui Media Massa Cetak dan Elektronik serta Media Luar Ruang"
  },
  {
    "kode_kegiatan": "2.14.03.2.01",
    "kode_sub_kegiatan": "2.14.03.2.01.0013",
    "nama_sub_kegiatan": "Komunikasi, Informasi dan Edukasi (KIE) ProgramBangga Kencana sesuai Kearifan Budaya Lokal"
  },
  {
    "kode_kegiatan": "2.14.03.2.01",
    "kode_sub_kegiatan": "2.14.03.2.01.0014",
    "nama_sub_kegiatan": "Advokasi Program Bangga kencana oleh pokja advokasi kepada Stakeholders dan Mitra Kerja"
  },
  {
    "kode_kegiatan": "2.14.03.2.02",
    "kode_sub_kegiatan": "2.14.03.2.02.0004",
    "nama_sub_kegiatan": "Penggerakan Kader Institusi Masyarakat Pedesaan (IMP)"
  },
  {
    "kode_kegiatan": "2.14.03.2.02",
    "kode_sub_kegiatan": "2.14.03.2.02.0005",
    "nama_sub_kegiatan": "Pembinaan IMP dan Program Bangga Kencana  di Lini Lapangan oleh PKB/PLKB"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0001",
    "nama_sub_kegiatan": "Pengendalian Pendistribusian Alat dan Obat Kontrasepsi dan Sarana Penunjang Pelayanan KB ke Fasilitas Kesehatan Termasuk Jaringan dan Jejaringnya"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0003",
    "nama_sub_kegiatan": "Peningkatan Kesertaan Penggunaan Metode Kontrasepsi Jangka Panjang (MKJP)"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0005",
    "nama_sub_kegiatan": "Penyusunan Rencana Kebutuhan Alat dan Obat Kontrasepsi (Alokon) dan Sarana Penunjang Pelayanan KB"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0006",
    "nama_sub_kegiatan": "Penyediaan Sarana Penunjang Pelayanan KB"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0008",
    "nama_sub_kegiatan": "Pembinaan Pelayanan Keluarga Berencana dan Kesehatan Reproduksi di Fasilitas Kesehatan Termasuk Jaringan dan Jejaringnya"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0010",
    "nama_sub_kegiatan": "Peningkatan Kompetensi Tenaga Pelayanan Keluarga Berencana dan Kesehatan Reproduksi"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0011",
    "nama_sub_kegiatan": "Dukungan Operasional Pelayanan KB Bergerak"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0013",
    "nama_sub_kegiatan": "Peningkatan Kesertaan KB Pria"
  },
  {
    "kode_kegiatan": "2.14.03.2.03",
    "kode_sub_kegiatan": "2.14.03.2.03.0016",
    "nama_sub_kegiatan": "Promosi dan Konseling KB Pasca Persalinan"
  },
  {
    "kode_kegiatan": "2.14.03.2.04",
    "kode_sub_kegiatan": "2.14.03.2.04.0001",
    "nama_sub_kegiatan": "Penguatan Peran Serta Organisasi Kemasyarakatan dan Mitra Kerja Lainnya dalam Pelaksanaan Pelayanan dan Pembinaan Kesertaan Ber-KB"
  },
  {
    "kode_kegiatan": "2.14.03.2.04",
    "kode_sub_kegiatan": "2.14.03.2.04.0002",
    "nama_sub_kegiatan": "Integrasi Pembangunan Lintas Sektor di Kampung KB"
  },
  {
    "kode_kegiatan": "2.14.03.2.04",
    "kode_sub_kegiatan": "2.14.03.2.04.0004",
    "nama_sub_kegiatan": "Pembinaan Terpadu Kampung KB"
  },
  {
    "kode_kegiatan": "2.14.03.2.04",
    "kode_sub_kegiatan": "2.14.03.2.04.0006",
    "nama_sub_kegiatan": "Pelaksanaan dan Pengelolaan Program Bangga Kencana di Kampung Keluarga Berkualitas"
  },
  {
    "kode_kegiatan": "2.14.04.2.01",
    "kode_sub_kegiatan": "2.14.04.2.01.0016",
    "nama_sub_kegiatan": "Pengelolaan Ketahanan Keluarga Melalui Pusat Pelayanan Keluarga Sejahtera (PPKS)"
  },
  {
    "kode_kegiatan": "2.14.04.2.01",
    "kode_sub_kegiatan": "2.14.04.2.01.0018",
    "nama_sub_kegiatan": "Pengadaan Sarana Kelompok Kegiatan Ketahanan dan Kesejahteraan Keluarga (BKB, BKR, BKL, PPKS, PIK-R dan Usaha Peningkatan Pendapatan Keluarga Akseptor (UPPKA)"
  },
  {
    "kode_kegiatan": "2.14.04.2.01",
    "kode_sub_kegiatan": "2.14.04.2.01.0019",
    "nama_sub_kegiatan": "Orientasi/Pelatihan Teknis Pelaksana/Kader Ketahanan dan Kesejahteraan Keluarga (BKB, BKR, BKL, PPKS, PIK-R dan Usaha Peningkatan Pendapatan Keluarga Akseptor (UPPKA)"
  },
  {
    "kode_kegiatan": "2.14.04.2.01",
    "kode_sub_kegiatan": "2.14.04.2.01.0021",
    "nama_sub_kegiatan": "Orientasi dan Pelatihan Teknis Pengelola Ketahanan dan Kesejahteraan Keluarga (BKB, BKR, BKL, PPKS, PIK-R dan Usaha Peningkatan Pendapatan Keluarga Akseptor (UPPKA)"
  },
  {
    "kode_kegiatan": "2.14.04.2.01",
    "kode_sub_kegiatan": "2.14.04.2.01.0024",
    "nama_sub_kegiatan": "Penyediaan Biaya Operasional bagi Pengelola dan Pelaksana (Kader) Ketahanan dan Kesejaheraan Keluarga (BKB, BKR, BKL, PPKS, PIK-R dan Usaha Peningkatan Pendapatan Keluarga Akseptor (UPPKA)"
  },
  {
    "kode_kegiatan": "2.14.04.2.01",
    "kode_sub_kegiatan": "2.14.04.2.01.0026",
    "nama_sub_kegiatan": "Penyediaan Biaya Operasional bagi Kelompok Kegiatan Ketahanan dan Kesejahteraan Keluarga (BKB, BKR, BKL, PPKS, PIK-R dan Usaha Peningkatan Pendapatan Keluarga Akseptor (UPPKA)"
  },
  {
    "kode_kegiatan": "2.14.04.2.02",
    "kode_sub_kegiatan": "2.14.04.2.02.0005",
    "nama_sub_kegiatan": "Pemantauan  Data dan Informasi Keluarga Berisiko Stunting (Termasuk remaja Calon Pengantin/Calon PUS, Ibu Hamil, Pasca salin/kelahiran, Baduta/Balita)"
  },
  {
    "kode_kegiatan": "2.14.04.2.02",
    "kode_sub_kegiatan": "2.14.04.2.02.0006",
    "nama_sub_kegiatan": "Pendampingan Keluarga Berisiko Stunting (Termasuk remaja Calon Pengantin/Calon PUS, Ibu Hamil, Pasca salin/kelahiran, Baduta/Balita)"
  },
  {
    "kode_kegiatan": "2.14.01.2.01",
    "kode_sub_kegiatan": "2.14.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.14.01.2.02",
    "kode_sub_kegiatan": "2.14.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.14.01.2.05",
    "kode_sub_kegiatan": "2.14.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.14.01.2.06",
    "kode_sub_kegiatan": "2.14.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.14.01.2.08",
    "kode_sub_kegiatan": "2.14.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "2.14.01.2.08",
    "kode_sub_kegiatan": "2.14.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.14.01.2.08",
    "kode_sub_kegiatan": "2.14.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.14.01.2.09",
    "kode_sub_kegiatan": "2.14.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "2.14.01.2.09",
    "kode_sub_kegiatan": "2.14.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "2.14.01.2.09",
    "kode_sub_kegiatan": "2.14.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.14.01.2.09",
    "kode_sub_kegiatan": "2.14.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.15.02.2.01",
    "kode_sub_kegiatan": "2.15.02.2.01.0002",
    "nama_sub_kegiatan": "Penetapan Kebijakan dan Sosialisasi Rencana Induk Jaringan LLAJ Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.02",
    "kode_sub_kegiatan": "2.15.02.2.02.0001",
    "nama_sub_kegiatan": "Pembangunan Prasarana Jalan di Jalan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.02",
    "kode_sub_kegiatan": "2.15.02.2.02.0002",
    "nama_sub_kegiatan": "Penyediaan Perlengkapan Jalan di Jalan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.02",
    "kode_sub_kegiatan": "2.15.02.2.02.0003",
    "nama_sub_kegiatan": "Rehabilitasi dan Pemeliharaan Prasarana Jalan"
  },
  {
    "kode_kegiatan": "2.15.02.2.02",
    "kode_sub_kegiatan": "2.15.02.2.02.0004",
    "nama_sub_kegiatan": "Rehabilitasi dan Pemeliharaan Perlengkapan Jalan"
  },
  {
    "kode_kegiatan": "2.15.02.2.03",
    "kode_sub_kegiatan": "2.15.02.2.03.0009",
    "nama_sub_kegiatan": "Pembangunan Terminal Penumpang Tipe C yang dilengkapi Fasilitas Utama dan Fasilitas Penunjang"
  },
  {
    "kode_kegiatan": "2.15.02.2.03",
    "kode_sub_kegiatan": "2.15.02.2.03.0011",
    "nama_sub_kegiatan": "Rehabilitasi dan Pemeliharaan Terminal Tipe C (Fasilitas Utama dan Penunjang)"
  },
  {
    "kode_kegiatan": "2.15.02.2.04",
    "kode_sub_kegiatan": "2.15.02.2.04.0002",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Pengawasan Pelaksanaan Izin Penyelenggaraan dan Pembangunan Fasilitas Parkir Kewenangan Kabupaten/Kota "
  },
  {
    "kode_kegiatan": "2.15.02.2.05",
    "kode_sub_kegiatan": "2.15.02.2.05.0001",
    "nama_sub_kegiatan": "Penyediaan Sarana dan Prasarana Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_kegiatan": "2.15.02.2.05",
    "kode_sub_kegiatan": "2.15.02.2.05.0002",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Sumber Daya Manusia Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_kegiatan": "2.15.02.2.05",
    "kode_sub_kegiatan": "2.15.02.2.05.0004",
    "nama_sub_kegiatan": "Penyediaan Bukti Lulus Uji Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_kegiatan": "2.15.02.2.05",
    "kode_sub_kegiatan": "2.15.02.2.05.0007",
    "nama_sub_kegiatan": "Pemeliharaan Sarana dan Prasarana Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_kegiatan": "2.15.02.2.05",
    "kode_sub_kegiatan": "2.15.02.2.05.0010",
    "nama_sub_kegiatan": "Monitoring dan Evaluasi Penyelenggaraan Pengujian Berkala Kendaraan Bermotor"
  },
  {
    "kode_kegiatan": "2.15.02.2.06",
    "kode_sub_kegiatan": "2.15.02.2.06.0004",
    "nama_sub_kegiatan": "Pengawasan dan Pengendalian Efektivitas Pelaksanaan Kebijakan untuk Jalan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.06",
    "kode_sub_kegiatan": "2.15.02.2.06.0014",
    "nama_sub_kegiatan": "Sosialisasi Pelaksanaan Manajemen dan Rekayasa Lalu Lintas untuk Jaringan Jalan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.06",
    "kode_sub_kegiatan": "2.15.02.2.06.0015",
    "nama_sub_kegiatan": "Forum Lalu Lintas dan Angkutan Jalan untuk Jaringan Jalan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.06",
    "kode_sub_kegiatan": "2.15.02.2.06.0016",
    "nama_sub_kegiatan": "Pengadaan dan Pemasangan Perlengkapan Jalan dalam rangka Manajemen dan Rekayasa Lalu Lintas"
  },
  {
    "kode_kegiatan": "2.15.02.2.07",
    "kode_sub_kegiatan": "2.15.02.2.07.0003",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Penilaian Hasil Andalalin"
  },
  {
    "kode_kegiatan": "2.15.02.2.07",
    "kode_sub_kegiatan": "2.15.02.2.07.0005",
    "nama_sub_kegiatan": "Peningkatan Kompetensi Penilai Andalalin"
  },
  {
    "kode_kegiatan": "2.15.02.2.07",
    "kode_sub_kegiatan": "2.15.02.2.07.0006",
    "nama_sub_kegiatan": "Pengawasan Pelaksanaan Rekomendasi Persetujuan Teknis Andalalin"
  },
  {
    "kode_kegiatan": "2.15.02.2.08",
    "kode_sub_kegiatan": "2.15.02.2.08.0004",
    "nama_sub_kegiatan": "Pelaksanaan Inspeksi, Audit dan Pemantauan Pemenuhan Persyaratan Penyelenggaraan Kompetensi Pengemudi Kendaraan Bermotor Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.09",
    "kode_sub_kegiatan": "2.15.02.2.09.0002",
    "nama_sub_kegiatan": "Pengendalian dan Pengawasan Ketersediaan Angkutan Umum untuk Jasa Angkutan Orang dan/atau Barang Antar Kota dalam 1 (Satu) Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.09",
    "kode_sub_kegiatan": "2.15.02.2.09.0003",
    "nama_sub_kegiatan": "Penyediaan Angkutan Umum untuk Jasa Angkutan Orang dan/atau Barang Antar Kota dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.02.2.11",
    "kode_sub_kegiatan": "2.15.02.2.11.0003",
    "nama_sub_kegiatan": "Pengendalian Pelaksanaan Rencana Umum Jaringan Trayek Perkotaan dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.15.01.2.01",
    "kode_sub_kegiatan": "2.15.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.15.01.2.02",
    "kode_sub_kegiatan": "2.15.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.15.01.2.05",
    "kode_sub_kegiatan": "2.15.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "2.15.01.2.05",
    "kode_sub_kegiatan": "2.15.01.2.05.0009",
    "nama_sub_kegiatan": "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.15.01.2.06",
    "kode_sub_kegiatan": "2.15.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.15.01.2.07",
    "kode_sub_kegiatan": "2.15.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.15.01.2.07",
    "kode_sub_kegiatan": "2.15.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "2.15.01.2.07",
    "kode_sub_kegiatan": "2.15.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.15.01.2.08",
    "kode_sub_kegiatan": "2.15.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "2.15.01.2.08",
    "kode_sub_kegiatan": "2.15.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.15.01.2.08",
    "kode_sub_kegiatan": "2.15.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.15.01.2.09",
    "kode_sub_kegiatan": "2.15.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "2.15.01.2.09",
    "kode_sub_kegiatan": "2.15.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.15.01.2.09",
    "kode_sub_kegiatan": "2.15.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.16.02.2.01",
    "kode_sub_kegiatan": "2.16.02.2.01.0005",
    "nama_sub_kegiatan": "Pengelolaan Media Komunikasi Publik"
  },
  {
    "kode_kegiatan": "2.16.02.2.01",
    "kode_sub_kegiatan": "2.16.02.2.01.0006",
    "nama_sub_kegiatan": "Pelayanan Informasi Publik"
  },
  {
    "kode_kegiatan": "2.16.02.2.01",
    "kode_sub_kegiatan": "2.16.02.2.01.0008",
    "nama_sub_kegiatan": "Kemitraan dengan Pemangku Kepentingan"
  },
  {
    "kode_kegiatan": "2.16.03.2.01",
    "kode_sub_kegiatan": "2.16.03.2.01.0003",
    "nama_sub_kegiatan": "Penyelenggaraan Sistem Jaringan Intra Pemerintah Daerah"
  },
  {
    "kode_kegiatan": "2.16.03.2.02",
    "kode_sub_kegiatan": "2.16.03.2.02.0001",
    "nama_sub_kegiatan": "Penatalaksanaan dan Pengawasan E-government dalam Penyelenggaraan Pemerintahan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.16.03.2.02",
    "kode_sub_kegiatan": "2.16.03.2.02.0003",
    "nama_sub_kegiatan": "Pengelolaan Pusat Data Pemerintahan Daerah"
  },
  {
    "kode_kegiatan": "2.16.03.2.02",
    "kode_sub_kegiatan": "2.16.03.2.02.0007",
    "nama_sub_kegiatan": "Pengembangan Aplikasi dan Proses Bisnis Pemerintahan Berbasis Elektronik"
  },
  {
    "kode_kegiatan": "2.16.01.2.01",
    "kode_sub_kegiatan": "2.16.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "2.16.01.2.02",
    "kode_sub_kegiatan": "2.16.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.16.01.2.06",
    "kode_sub_kegiatan": "2.16.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.16.01.2.06",
    "kode_sub_kegiatan": "2.16.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.16.01.2.06",
    "kode_sub_kegiatan": "2.16.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.16.01.2.06",
    "kode_sub_kegiatan": "2.16.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.16.01.2.06",
    "kode_sub_kegiatan": "2.16.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.16.01.2.06",
    "kode_sub_kegiatan": "2.16.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.16.01.2.07",
    "kode_sub_kegiatan": "2.16.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.16.01.2.08",
    "kode_sub_kegiatan": "2.16.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.16.01.2.08",
    "kode_sub_kegiatan": "2.16.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.16.01.2.09",
    "kode_sub_kegiatan": "2.16.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "2.16.01.2.09",
    "kode_sub_kegiatan": "2.16.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.16.01.2.09",
    "kode_sub_kegiatan": "2.16.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.20.02.2.01",
    "kode_sub_kegiatan": "2.20.02.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Pengumpulan, Pengolahan, Analisis dan Diseminasi Data Statistik Sektoral"
  },
  {
    "kode_kegiatan": "2.20.02.2.01",
    "kode_sub_kegiatan": "2.20.02.2.01.0002",
    "nama_sub_kegiatan": "Peningkatan Kapasitas SDM Pemerintah Daerah dalam Peningkatan Mutu Statistik Daerah yang Terintegrasi"
  },
  {
    "kode_kegiatan": "2.20.02.2.01",
    "kode_sub_kegiatan": "2.20.02.2.01.0006",
    "nama_sub_kegiatan": "Penyelenggaraan Otorisasi Statistik Sektoral di Daerah"
  },
  {
    "kode_kegiatan": "2.21.02.2.01",
    "kode_sub_kegiatan": "2.21.02.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Keamanan Informasi Pemerintahan Daerah Kabupaten/Kota Berbasis Elektronik dan Non Elektronik"
  },
  {
    "kode_kegiatan": "2.21.02.2.01",
    "kode_sub_kegiatan": "2.21.02.2.01.0004",
    "nama_sub_kegiatan": "Penyediaan Layanan Keamanan Informasi Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.21.02.2.02",
    "kode_sub_kegiatan": "2.21.02.2.02.0001",
    "nama_sub_kegiatan": "Operasionalisasi Jaring Komunikasi Sandi Pemerintah Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.17.02.2.01",
    "kode_sub_kegiatan": "2.17.02.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Pemenuhan Izin Usaha Simpan Pinjam dan Pembukaan Kantor Cabang, Cabang Pembantu dan Kantor Kas Koperasi Simpan Pinjam untuk Koperasi dengan Wilayah Keanggotaan dalam Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.17.03.2.01",
    "kode_sub_kegiatan": "2.17.03.2.01.0003",
    "nama_sub_kegiatan": "Penguatan Tata Kelola Kelembagaan Koperasi"
  },
  {
    "kode_kegiatan": "2.17.03.2.01",
    "kode_sub_kegiatan": "2.17.03.2.01.0004",
    "nama_sub_kegiatan": "Pelaksanaan Proses Pemeriksaan dan Pengawasan Koperasi yang Wilayah Keanggotaannya Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.17.04.2.01",
    "kode_sub_kegiatan": "2.17.04.2.01.0001",
    "nama_sub_kegiatan": "Pelaksanaan Penilaian Kesehatan KSP/USP Koperasi Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.17.05.2.01",
    "kode_sub_kegiatan": "2.17.05.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Pemahaman dan Pengetahuan Perkoperasian serta Kapasitas dan Kompetensi SDM Koperasi"
  },
  {
    "kode_kegiatan": "2.17.06.2.01",
    "kode_sub_kegiatan": "2.17.06.2.01.0009",
    "nama_sub_kegiatan": "Pemberdayaan  Koperasi dengan Keanggotaan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.17.07.2.01",
    "kode_sub_kegiatan": "2.17.07.2.01.0002",
    "nama_sub_kegiatan": "Pemberdayaan Melalui Kemitraan Usaha Mikro"
  },
  {
    "kode_kegiatan": "2.17.07.2.01",
    "kode_sub_kegiatan": "2.17.07.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Kemudahan Perizinan Usaha Mikro"
  },
  {
    "kode_kegiatan": "2.17.07.2.01",
    "kode_sub_kegiatan": "2.17.07.2.01.0004",
    "nama_sub_kegiatan": "Pemberdayaan Kelembagaan Potensi dan Pengembangan Usaha Mikro"
  },
  {
    "kode_kegiatan": "2.17.07.2.01",
    "kode_sub_kegiatan": "2.17.07.2.01.0014",
    "nama_sub_kegiatan": "Penyusunan Basis Data Usaha Mikro"
  },
  {
    "kode_kegiatan": "2.17.07.2.01",
    "kode_sub_kegiatan": "2.17.07.2.01.0015",
    "nama_sub_kegiatan": "Peningkatan Pemahaman dan Pengetahuan UMKM serta Kapasitas dan Kompetensi SDM UMKM dan Kewirausahaan melalui Pendidikan dan Pelatihan"
  },
  {
    "kode_kegiatan": "2.17.08.2.01",
    "kode_sub_kegiatan": "2.17.08.2.01.0002",
    "nama_sub_kegiatan": "Pengembangan Usaha Mikro"
  },
  {
    "kode_kegiatan": "2.17.01.2.01",
    "kode_sub_kegiatan": "2.17.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "2.17.01.2.02",
    "kode_sub_kegiatan": "2.17.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.17.01.2.03",
    "kode_sub_kegiatan": "2.17.01.2.03.0002",
    "nama_sub_kegiatan": "Pengamanan Barang Milik Daerah SKPD"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.17.01.2.06",
    "kode_sub_kegiatan": "2.17.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.17.01.2.08",
    "kode_sub_kegiatan": "2.17.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.17.01.2.08",
    "kode_sub_kegiatan": "2.17.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.17.01.2.09",
    "kode_sub_kegiatan": "2.17.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.17.01.2.09",
    "kode_sub_kegiatan": "2.17.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "2.17.01.2.09",
    "kode_sub_kegiatan": "2.17.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.17.01.2.09",
    "kode_sub_kegiatan": "2.17.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "3.30.02.2.02",
    "kode_sub_kegiatan": "3.30.02.2.02.0001",
    "nama_sub_kegiatan": "Fasilitasi Penerbitan Tanda Daftar Gudang"
  },
  {
    "kode_kegiatan": "3.30.02.2.03",
    "kode_sub_kegiatan": "3.30.02.2.03.0001",
    "nama_sub_kegiatan": "Fasilitasi Perizinan Surat Tanda Pendaftaran dan/atau Lanjutan Waralaba (STPW) Dalam Negeri Terintegrasi Secara Elektronik"
  },
  {
    "kode_kegiatan": "3.30.02.2.06",
    "kode_sub_kegiatan": "3.30.02.2.06.0003",
    "nama_sub_kegiatan": "Pengawasan Distribusi, Pengemasan dan Pelabelan Bahan Berbahaya Terhadap Pengguna Akhir Bahan Berbahaya (PA-B2) maupun Produsen B2 (P-B2)"
  },
  {
    "kode_kegiatan": "3.30.03.2.01",
    "kode_sub_kegiatan": "3.30.03.2.01.0001",
    "nama_sub_kegiatan": "Penyediaan Sarana Distribusi Perdagangan"
  },
  {
    "kode_kegiatan": "3.30.03.2.01",
    "kode_sub_kegiatan": "3.30.03.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Sarana Distribusi Perdagangan"
  },
  {
    "kode_kegiatan": "3.30.03.2.02",
    "kode_sub_kegiatan": "3.30.03.2.02.0001",
    "nama_sub_kegiatan": "Pembinaan dan Pengendalian Pengelola Sarana Distribusi Perdagangan"
  },
  {
    "kode_kegiatan": "3.30.03.2.02",
    "kode_sub_kegiatan": "3.30.03.2.02.0002",
    "nama_sub_kegiatan": "Pemberdayaan Pengelola Sarana Distribusi Perdagangan"
  },
  {
    "kode_kegiatan": "3.30.04.2.01",
    "kode_sub_kegiatan": "3.30.04.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Ketersediaan Barang Kebutuhan Pokok dan Barang Penting di Tingkat Agen dan Pasar Rakyat"
  },
  {
    "kode_kegiatan": "3.30.04.2.01",
    "kode_sub_kegiatan": "3.30.04.2.01.0003",
    "nama_sub_kegiatan": "Pengendalian Ketersediaan Barang Kebutuhan Pokok dan Barang Penting di Tingkat Agen dan Pasar Rakyat"
  },
  {
    "kode_kegiatan": "3.30.04.2.02",
    "kode_sub_kegiatan": "3.30.04.2.02.0002",
    "nama_sub_kegiatan": "Pemantauan Harga dan Stok Barang Kebutuhan Pokok dan Barang Penting pada Pasar Rakyat yang Terintegrasi dalam Sistem Informasi Perdagangan"
  },
  {
    "kode_kegiatan": "3.30.04.2.02",
    "kode_sub_kegiatan": "3.30.04.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Operasi Pasar Reguler dan Pasar Khusus yang Berdampak dalam 1 (Satu) Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.30.04.2.03",
    "kode_sub_kegiatan": "3.30.04.2.03.0003",
    "nama_sub_kegiatan": "Pengawasan Penyaluran dan Penggunaan Pupuk dan Pestisida Bersubsidi"
  },
  {
    "kode_kegiatan": "3.30.05.2.01",
    "kode_sub_kegiatan": "3.30.05.2.01.0002",
    "nama_sub_kegiatan": "Pameran Dagang Nasional"
  },
  {
    "kode_kegiatan": "3.30.05.2.01",
    "kode_sub_kegiatan": "3.30.05.2.01.0004",
    "nama_sub_kegiatan": "Misi Dagang bagi Produk Ekspor Unggulan"
  },
  {
    "kode_kegiatan": "3.30.06.2.01",
    "kode_sub_kegiatan": "3.30.06.2.01.0001",
    "nama_sub_kegiatan": "Pelaksanaan Metrologi Legal, Berupa Tera, Tera Ulang"
  },
  {
    "kode_kegiatan": "3.30.06.2.01",
    "kode_sub_kegiatan": "3.30.06.2.01.0002",
    "nama_sub_kegiatan": "Pengawasan/Penyuluhan Metrologi Legal "
  },
  {
    "kode_kegiatan": "3.30.07.2.01",
    "kode_sub_kegiatan": "3.30.07.2.01.0005",
    "nama_sub_kegiatan": "Pelaksanaan Promosi Penggunaan Produk Dalam Negeri di Tingkat Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.30.07.2.01",
    "kode_sub_kegiatan": "3.30.07.2.01.0006",
    "nama_sub_kegiatan": "Pemasaran dan Peningkatan Penggunaan Produk Dalam Negeri di Tingkat Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.18.02.2.01",
    "kode_sub_kegiatan": "2.18.02.2.01.0001",
    "nama_sub_kegiatan": "Penetapan Kebijakan Daerah Mengenai Pemberian Fasilitas/Insentif dan Kemudahan Penanaman Modal"
  },
  {
    "kode_kegiatan": "2.18.02.2.01",
    "kode_sub_kegiatan": "2.18.02.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Kemitraan yang dilakukan oleh Pemerintah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.18.02.2.02",
    "kode_sub_kegiatan": "2.18.02.2.02.0004",
    "nama_sub_kegiatan": "Penyusunan Peta Potensi Investasi Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.18.03.2.01",
    "kode_sub_kegiatan": "2.18.03.2.01.0002",
    "nama_sub_kegiatan": "Pelaksanaan Kegiatan Promosi Penanaman Modal Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.18.03.2.01",
    "kode_sub_kegiatan": "2.18.03.2.01.0003",
    "nama_sub_kegiatan": "Penyusunan Strategi Promosi Penanaman Modal Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.18.04.2.01",
    "kode_sub_kegiatan": "2.18.04.2.01.0006",
    "nama_sub_kegiatan": "Penyediaan Pelayanan Perizinan Berusaha melalui Sistem Perizinan Berusaha Berbasis Risiko Terintegrasi secara Elektronik"
  },
  {
    "kode_kegiatan": "2.18.04.2.01",
    "kode_sub_kegiatan": "2.18.04.2.01.0007",
    "nama_sub_kegiatan": "Penyediaan dan pengelolaan Layanan konsultasi perizinan berusaha berbasis risiko"
  },
  {
    "kode_kegiatan": "2.18.05.2.01",
    "kode_sub_kegiatan": "2.18.05.2.01.0004",
    "nama_sub_kegiatan": "Penyelesaian Permasalahan dan Hambatan yang dihadapi Pelaku Usaha dalam merealisasikan Kegiatan Usahanya"
  },
  {
    "kode_kegiatan": "2.18.05.2.01",
    "kode_sub_kegiatan": "2.18.05.2.01.0005",
    "nama_sub_kegiatan": "Bimbingan Teknis kepada Pelaku Usaha"
  },
  {
    "kode_kegiatan": "2.18.05.2.01",
    "kode_sub_kegiatan": "2.18.05.2.01.0006",
    "nama_sub_kegiatan": "Pengawasan Penanaman Modal"
  },
  {
    "kode_kegiatan": "2.18.06.2.01",
    "kode_sub_kegiatan": "2.18.06.2.01.0002",
    "nama_sub_kegiatan": "Pengolahan, Penyajian dan Pemanfaatan Data dan Informasi Perizinan Berbasis Sistem Pelayanan Perizinan Berusaha Terintegrasi secara Elektronik"
  },
  {
    "kode_kegiatan": "2.18.01.2.01",
    "kode_sub_kegiatan": "2.18.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.18.01.2.02",
    "kode_sub_kegiatan": "2.18.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.18.01.2.05",
    "kode_sub_kegiatan": "2.18.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.18.01.2.06",
    "kode_sub_kegiatan": "2.18.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.18.01.2.07",
    "kode_sub_kegiatan": "2.18.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.18.01.2.07",
    "kode_sub_kegiatan": "2.18.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.18.01.2.08",
    "kode_sub_kegiatan": "2.18.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.18.01.2.08",
    "kode_sub_kegiatan": "2.18.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.18.01.2.09",
    "kode_sub_kegiatan": "2.18.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.18.01.2.09",
    "kode_sub_kegiatan": "2.18.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.18.01.2.09",
    "kode_sub_kegiatan": "2.18.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.19.02.2.01",
    "kode_sub_kegiatan": "2.19.02.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Penyelenggaraan Peningkatan Kapasitas Daya Saing Pemuda Pelopor"
  },
  {
    "kode_kegiatan": "2.19.02.2.01",
    "kode_sub_kegiatan": "2.19.02.2.01.0002",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Penyelenggaraan Peningkatan Kapasitas Daya Saing Wira Usaha Pemula"
  },
  {
    "kode_kegiatan": "2.19.02.2.01",
    "kode_sub_kegiatan": "2.19.02.2.01.0006",
    "nama_sub_kegiatan": "Perencanaan, Pengadaan, Pemanfaatan, Pemeliharaan, dan Pengawasan Prasarana dan Sarana Kepemudaan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.19.03.2.01",
    "kode_sub_kegiatan": "2.19.03.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Pelaksanaan Penyediaan Sarana dan Prasarana Olahraga Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.19.03.2.02",
    "kode_sub_kegiatan": "2.19.03.2.02.0002",
    "nama_sub_kegiatan": "Penyelenggaraan Kejuaraan dan Pekan Olahraga Tingkat Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.19.03.2.03",
    "kode_sub_kegiatan": "2.19.03.2.03.0003",
    "nama_sub_kegiatan": "Pembinaan dan Pengembangan Atlet Berprestasi Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.19.03.2.05",
    "kode_sub_kegiatan": "2.19.03.2.05.0002",
    "nama_sub_kegiatan": "Pemberdayaan Perkumpulan Olahraga Rekreasi"
  },
  {
    "kode_kegiatan": "2.19.03.2.05",
    "kode_sub_kegiatan": "2.19.03.2.05.0005",
    "nama_sub_kegiatan": "Pemanfaatan Olahraga Tradisional dalam Masyarakat"
  },
  {
    "kode_kegiatan": "2.19.01.2.01",
    "kode_sub_kegiatan": "2.19.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "3.26.02.2.02",
    "kode_sub_kegiatan": "3.26.02.2.02.0008",
    "nama_sub_kegiatan": "Peningkatan Kapasitas SDM Pengelola Kawasan Strategis Pariwisata Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.26.02.2.03",
    "kode_sub_kegiatan": "3.26.02.2.03.0006",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat dalam Pengelolaan Destinasi Pariwisata Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.26.02.2.04",
    "kode_sub_kegiatan": "3.26.02.2.04.0007",
    "nama_sub_kegiatan": "Pembinaan dan Pengawasan untuk memastikan Kepatuhan Pelaku Usaha Melaksanakan Standar Usaha Risiko Menengah Rendah di kabupaten?kota"
  },
  {
    "kode_kegiatan": "3.26.03.2.01",
    "kode_sub_kegiatan": "3.26.03.2.01.0004",
    "nama_sub_kegiatan": "Peningkatan Kerja Sama dan Kemitraan Pariwisata Dalam dan Luar Negeri"
  },
  {
    "kode_kegiatan": "3.26.03.2.01",
    "kode_sub_kegiatan": "3.26.03.2.01.0007",
    "nama_sub_kegiatan": "Penguatan Promosi Melalui Media Cetak, Elektronik, dan Media Lainnya Baik Dalam dan Luar Negeri"
  },
  {
    "kode_kegiatan": "3.26.05.2.01",
    "kode_sub_kegiatan": "3.26.05.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Proses Kreasi, Produksi, Distribusi Konsumsi dan Konservasi Ekonomi Kreatif"
  },
  {
    "kode_kegiatan": "3.26.05.2.01",
    "kode_sub_kegiatan": "3.26.05.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pengembangan Kompetensi Sumber Daya Manusia Ekonomi Kreatif"
  },
  {
    "kode_kegiatan": "X.XX.01.2.02",
    "kode_sub_kegiatan": "X.XX.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "X.XX.01.2.02",
    "kode_sub_kegiatan": "X.XX.01.2.02.0002",
    "nama_sub_kegiatan": "Penyediaan Administrasi Pelaksanaan Tugas ASN"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.23.02.2.01",
    "kode_sub_kegiatan": "2.23.02.2.01.0001",
    "nama_sub_kegiatan": "Pengembangan dan Pemeliharaan Layanan Perpustakaan Elektronik"
  },
  {
    "kode_kegiatan": "2.23.02.2.01",
    "kode_sub_kegiatan": "2.23.02.2.01.0002",
    "nama_sub_kegiatan": "Pengembangan Perpustakaan di Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.23.02.2.01",
    "kode_sub_kegiatan": "2.23.02.2.01.0005",
    "nama_sub_kegiatan": "Pembinaan Perpustakaan Khusus Tingkat Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.23.02.2.01",
    "kode_sub_kegiatan": "2.23.02.2.01.0006",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Tenaga Perpustakaan dan Pustakawan Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.23.02.2.01",
    "kode_sub_kegiatan": "2.23.02.2.01.0008",
    "nama_sub_kegiatan": "Pengembangan Bahan Pustaka"
  },
  {
    "kode_kegiatan": "2.23.02.2.02",
    "kode_sub_kegiatan": "2.23.02.2.02.0001",
    "nama_sub_kegiatan": "Sosiaisasi Budaya Baca dan Literasi pada Satuan Pendidikan Dasar dan Pendidikan Khusus serta Masyarakat"
  },
  {
    "kode_kegiatan": "2.23.02.2.02",
    "kode_sub_kegiatan": "2.23.02.2.02.0003",
    "nama_sub_kegiatan": "Pemberian Penghargaan Gerakan Budaya Gemar Membaca "
  },
  {
    "kode_kegiatan": "2.23.02.2.02",
    "kode_sub_kegiatan": "2.23.02.2.02.0004",
    "nama_sub_kegiatan": "Pengembangan Literasi Berbasis Inklusi Sosial "
  },
  {
    "kode_kegiatan": "2.23.02.2.02",
    "kode_sub_kegiatan": "2.23.02.2.02.0005",
    "nama_sub_kegiatan": "Pemilihan Duta Baca Tingkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.23.01.2.01",
    "kode_sub_kegiatan": "2.23.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "2.23.01.2.02",
    "kode_sub_kegiatan": "2.23.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "2.23.01.2.06",
    "kode_sub_kegiatan": "2.23.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "2.23.01.2.08",
    "kode_sub_kegiatan": "2.23.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "2.23.01.2.08",
    "kode_sub_kegiatan": "2.23.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "2.23.01.2.09",
    "kode_sub_kegiatan": "2.23.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "2.23.01.2.09",
    "kode_sub_kegiatan": "2.23.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "2.23.01.2.09",
    "kode_sub_kegiatan": "2.23.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "2.24.02.2.01",
    "kode_sub_kegiatan": "2.24.02.2.01.0001",
    "nama_sub_kegiatan": "Penciptaan dan Penggunaan Arsip Dinamis"
  },
  {
    "kode_kegiatan": "2.24.02.2.01",
    "kode_sub_kegiatan": "2.24.02.2.01.0002",
    "nama_sub_kegiatan": "Pemeliharaan dan Penyusutan Arsip Dinamis"
  },
  {
    "kode_kegiatan": "2.24.02.2.01",
    "kode_sub_kegiatan": "2.24.02.2.01.0003",
    "nama_sub_kegiatan": "Pengawasan Arsip Dinamis Kewenangan Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.24.02.2.02",
    "kode_sub_kegiatan": "2.24.02.2.02.0002",
    "nama_sub_kegiatan": "Akuisisi, Pengolahan, Preservasi, dan Akses Arsip Statis"
  },
  {
    "kode_kegiatan": "2.24.02.2.03",
    "kode_sub_kegiatan": "2.24.02.2.03.0001",
    "nama_sub_kegiatan": "Penyediaan Informasi, Akses dan Layanan Kearsipan Tingkat Daerah Kabupaten/Kota Melalui JIKN"
  },
  {
    "kode_kegiatan": "2.24.02.2.03",
    "kode_sub_kegiatan": "2.24.02.2.03.0002",
    "nama_sub_kegiatan": "Pemberdayaan Kapasitas Unit Kearsipan dan Lembaga Kearsipan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.24.03.2.01",
    "kode_sub_kegiatan": "2.24.03.2.01.0001",
    "nama_sub_kegiatan": "Penilaian, Penetapan dan Pelaksanaan Pemusnahan Arsip yang Memiliki Retensi di Bawah 10 (Sepuluh) Tahun"
  },
  {
    "kode_kegiatan": "2.24.03.2.01",
    "kode_sub_kegiatan": "2.24.03.2.01.0002",
    "nama_sub_kegiatan": "Pelaksanaan Pemusnahan Arsip yang Memiliki Retensi di Bawah 10 Tahun"
  },
  {
    "kode_kegiatan": "2.24.03.2.03",
    "kode_sub_kegiatan": "2.24.03.2.03.0002",
    "nama_sub_kegiatan": "Pendataan, Penyusunan Daftar dan Penilaian serta Penyerahan atau Pemusnahan Arsip bagi Pembubaran Perangkat Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "2.24.03.2.04",
    "kode_sub_kegiatan": "2.24.03.2.04.0001",
    "nama_sub_kegiatan": "Penilaian dan Penetapan Autentisitas Arsip Statis Sesuai Persyaratan Penjaminan Keabsahan Arsip"
  },
  {
    "kode_kegiatan": "2.24.03.2.04",
    "kode_sub_kegiatan": "2.24.03.2.04.0002",
    "nama_sub_kegiatan": "Penilaian dan Penetapan Hasil Alih Media Sesuai Persyaratan Penjaminan Keabsahan Arsip"
  },
  {
    "kode_kegiatan": "3.25.03.2.01",
    "kode_sub_kegiatan": "3.25.03.2.01.0003",
    "nama_sub_kegiatan": "Penjaminan Ketersediaan Sarana Usaha Perikanan Tangkap"
  },
  {
    "kode_kegiatan": "3.25.04.2.04",
    "kode_sub_kegiatan": "3.25.04.2.04.0003",
    "nama_sub_kegiatan": "Penjaminan Ketersediaan Sarana Pembudidayaan Ikan dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.25.06.2.03",
    "kode_sub_kegiatan": "3.25.06.2.03.0001",
    "nama_sub_kegiatan": "Peningkatan Ketersediaan Ikan untuk Konsumsi dan Usaha Pengolahan dalam 1 (Satu) Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.27.02.2.01",
    "kode_sub_kegiatan": "3.27.02.2.01.0001",
    "nama_sub_kegiatan": "Pengawasan Penggunaan Sarana Pendukung Pertanian Sesuai dengan Komoditas, Teknologi dan Spesifik Lokasi"
  },
  {
    "kode_kegiatan": "3.27.02.2.01",
    "kode_sub_kegiatan": "3.27.02.2.01.0002",
    "nama_sub_kegiatan": "Pendampingan Penggunaan Sarana Pendukung Pertanian"
  },
  {
    "kode_kegiatan": "3.27.03.2.01",
    "kode_sub_kegiatan": "3.27.03.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi dan Sinkronisasi Prasarana Pendukung Pertanian Lainnya"
  },
  {
    "kode_kegiatan": "3.27.03.2.01",
    "kode_sub_kegiatan": "3.27.03.2.01.0015",
    "nama_sub_kegiatan": "Pengelolaan Lahan Pertanian Pangan Berkelanjutan/LP2B, Kawasan Pertanian Pangan Berkelanjutan/KP2B dan Lahan Cadangan Pertanian Pangan Berkelanjutan/LCP2B di Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan, Rehabilitasi dan Pemeliharaan Embung Pertanian"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0003",
    "nama_sub_kegiatan": "Pembangunan, Rehabilitasi dan Pemeliharaan Jalan Usaha Tani"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0004",
    "nama_sub_kegiatan": "Pembangunan, Rehabilitasi dan Pemeliharaan DAM Parit"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0008",
    "nama_sub_kegiatan": "Pembangunan, Rehabilitasi dan Pemeliharaan Balai Penyuluh di Kecamatan serta Sarana Pendukungnya"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0009",
    "nama_sub_kegiatan": "Pembangunan, Rehabilitasi dan Pemeliharaan Prasarana Pertanian Lainnya"
  },
  {
    "kode_kegiatan": "3.27.03.2.02",
    "kode_sub_kegiatan": "3.27.03.2.02.0010",
    "nama_sub_kegiatan": "Rehabilitasi dan Pemeliharaan Jaringan Irigasi Usaha Tani"
  },
  {
    "kode_kegiatan": "3.27.05.2.01",
    "kode_sub_kegiatan": "3.27.05.2.01.0001",
    "nama_sub_kegiatan": "Pengendalian Organisme Pengganggu Tumbuhan (OPT) Tanaman Pangan, Hortikultura, dan Perkebunan"
  },
  {
    "kode_kegiatan": "3.27.07.2.01",
    "kode_sub_kegiatan": "3.27.07.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Kelembagaan Penyuluhan Pertanian di Kecamatan dan Desa"
  },
  {
    "kode_kegiatan": "3.27.07.2.01",
    "kode_sub_kegiatan": "3.27.07.2.01.0002",
    "nama_sub_kegiatan": "Pengembangan Kapasitas Kelembagaan Petani di Kecamatan dan Desa"
  },
  {
    "kode_kegiatan": "3.27.07.2.01",
    "kode_sub_kegiatan": "3.27.07.2.01.0003",
    "nama_sub_kegiatan": "Penyediaan dan Pemanfaatan Sarana dan Prasarana Penyuluhan Pertanian"
  },
  {
    "kode_kegiatan": "3.27.01.2.01",
    "kode_sub_kegiatan": "3.27.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "3.27.01.2.02",
    "kode_sub_kegiatan": "3.27.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "3.27.01.2.06",
    "kode_sub_kegiatan": "3.27.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "3.27.01.2.08",
    "kode_sub_kegiatan": "3.27.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "3.27.01.2.08",
    "kode_sub_kegiatan": "3.27.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "3.27.01.2.08",
    "kode_sub_kegiatan": "3.27.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "3.27.01.2.09",
    "kode_sub_kegiatan": "3.27.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "3.27.01.2.09",
    "kode_sub_kegiatan": "3.27.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "3.27.01.2.09",
    "kode_sub_kegiatan": "3.27.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "3.27.01.2.09",
    "kode_sub_kegiatan": "3.27.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "4.01.02.2.01",
    "kode_sub_kegiatan": "4.01.02.2.01.0001",
    "nama_sub_kegiatan": "Penataan Administrasi Pemerintahan"
  },
  {
    "kode_kegiatan": "4.01.02.2.01",
    "kode_sub_kegiatan": "4.01.02.2.01.0002",
    "nama_sub_kegiatan": "Pengelolaan Administrasi Kewilayahan"
  },
  {
    "kode_kegiatan": "4.01.02.2.01",
    "kode_sub_kegiatan": "4.01.02.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Otonomi Daerah"
  },
  {
    "kode_kegiatan": "4.01.02.2.02",
    "kode_sub_kegiatan": "4.01.02.2.02.0001",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Bina Mental Spiritual"
  },
  {
    "kode_kegiatan": "4.01.02.2.02",
    "kode_sub_kegiatan": "4.01.02.2.02.0001",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Bina Mental Spiritual"
  },
  {
    "kode_kegiatan": "4.01.02.2.02",
    "kode_sub_kegiatan": "4.01.02.2.02.0002",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan, Evaluasi, dan Capaian Kinerja Terkait Kesejahteraan Sosial"
  },
  {
    "kode_kegiatan": "4.01.02.2.02",
    "kode_sub_kegiatan": "4.01.02.2.02.0002",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan, Evaluasi, dan Capaian Kinerja Terkait Kesejahteraan Sosial"
  },
  {
    "kode_kegiatan": "4.01.02.2.02",
    "kode_sub_kegiatan": "4.01.02.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan, Evaluasi, dan Capaian Kinerja Terkait Kesejahteraan Masyarakat"
  },
  {
    "kode_kegiatan": "4.01.02.2.02",
    "kode_sub_kegiatan": "4.01.02.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan, Evaluasi, dan Capaian Kinerja Terkait Kesejahteraan Masyarakat"
  },
  {
    "kode_kegiatan": "4.01.02.2.03",
    "kode_sub_kegiatan": "4.01.02.2.03.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Produk Hukum Daerah"
  },
  {
    "kode_kegiatan": "4.01.02.2.03",
    "kode_sub_kegiatan": "4.01.02.2.03.0002",
    "nama_sub_kegiatan": "Fasilitasi Bantuan Hukum"
  },
  {
    "kode_kegiatan": "4.01.02.2.03",
    "kode_sub_kegiatan": "4.01.02.2.03.0003",
    "nama_sub_kegiatan": "Pendokumentasian Produk Hukum dan Pengelolaan Informasi Hukum"
  },
  {
    "kode_kegiatan": "4.01.02.2.04",
    "kode_sub_kegiatan": "4.01.02.2.04.0001",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Dalam Negeri"
  },
  {
    "kode_kegiatan": "4.01.02.2.04",
    "kode_sub_kegiatan": "4.01.02.2.04.0003",
    "nama_sub_kegiatan": "Evaluasi Pelaksanaan Kerja Sama"
  },
  {
    "kode_kegiatan": "4.01.03.2.01",
    "kode_sub_kegiatan": "4.01.03.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi, Monitoring dan Evaluasi Kebijakan Pengelolaan BUMD dan BLUD"
  },
  {
    "kode_kegiatan": "4.01.03.2.01",
    "kode_sub_kegiatan": "4.01.03.2.01.0002",
    "nama_sub_kegiatan": "Pengendalian dan Distribusi Perekonomian"
  },
  {
    "kode_kegiatan": "4.01.03.2.02",
    "kode_sub_kegiatan": "4.01.03.2.02.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program Pembangunan"
  },
  {
    "kode_kegiatan": "4.01.03.2.02",
    "kode_sub_kegiatan": "4.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pengendalian dan Evaluasi Program Pembangunan"
  },
  {
    "kode_kegiatan": "4.01.03.2.02",
    "kode_sub_kegiatan": "4.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pengelolaan Evaluasi dan Pelaporan Pelaksanaan Pembangunan"
  },
  {
    "kode_kegiatan": "4.01.03.2.03",
    "kode_sub_kegiatan": "4.01.03.2.03.0001",
    "nama_sub_kegiatan": "Pengelolaan Pengadaan Barang dan Jasa"
  },
  {
    "kode_kegiatan": "4.01.03.2.03",
    "kode_sub_kegiatan": "4.01.03.2.03.0002",
    "nama_sub_kegiatan": "Pengelolaan Layanan Pengadaan Secara Elektronik"
  },
  {
    "kode_kegiatan": "4.01.03.2.03",
    "kode_sub_kegiatan": "4.01.03.2.03.0003",
    "nama_sub_kegiatan": "Pembinaan dan Advokasi Pengadaan Barang dan Jasa"
  },
  {
    "kode_kegiatan": "4.01.03.2.04",
    "kode_sub_kegiatan": "4.01.03.2.04.0001",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Evaluasi Kebijakan Pertanian, Kehutanan, Kelautan, dan Perikanan"
  },
  {
    "kode_kegiatan": "4.01.03.2.04",
    "kode_sub_kegiatan": "4.01.03.2.04.0003",
    "nama_sub_kegiatan": "Koordinasi, Sinkronisasi dan Evaluasi Kebijakan Energi dan Air"
  },
  {
    "kode_kegiatan": "4.01.01.2.01",
    "kode_sub_kegiatan": "4.01.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.01",
    "kode_sub_kegiatan": "4.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "4.01.01.2.02",
    "kode_sub_kegiatan": "4.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "4.01.01.2.02",
    "kode_sub_kegiatan": "4.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "4.01.01.2.06",
    "kode_sub_kegiatan": "4.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "4.01.01.2.07",
    "kode_sub_kegiatan": "4.01.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "4.01.01.2.07",
    "kode_sub_kegiatan": "4.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "4.01.01.2.07",
    "kode_sub_kegiatan": "4.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "4.01.01.2.08",
    "kode_sub_kegiatan": "4.01.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "4.01.01.2.08",
    "kode_sub_kegiatan": "4.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "4.01.01.2.08",
    "kode_sub_kegiatan": "4.01.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "4.01.01.2.08",
    "kode_sub_kegiatan": "4.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "4.01.01.2.09",
    "kode_sub_kegiatan": "4.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "4.01.01.2.09",
    "kode_sub_kegiatan": "4.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "4.01.01.2.09",
    "kode_sub_kegiatan": "4.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "4.01.01.2.09",
    "kode_sub_kegiatan": "4.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "4.01.01.2.09",
    "kode_sub_kegiatan": "4.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "4.01.01.2.09",
    "kode_sub_kegiatan": "4.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "4.01.01.2.11",
    "kode_sub_kegiatan": "4.01.01.2.11.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.11",
    "kode_sub_kegiatan": "4.01.01.2.11.0002",
    "nama_sub_kegiatan": "Penyediaan Pakaian Dinas dan Atribut Kelengkapan Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.11",
    "kode_sub_kegiatan": "4.01.01.2.11.0003",
    "nama_sub_kegiatan": "Pelaksanaan Medical Check Up Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.11",
    "kode_sub_kegiatan": "4.01.01.2.11.0004",
    "nama_sub_kegiatan": "Penyediaan Dana Penunjang Operasional Kepala Daerah dan Wakil Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.12",
    "kode_sub_kegiatan": "4.01.01.2.12.0001",
    "nama_sub_kegiatan": "Penyediaan Kebutuhan Rumah Tangga Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.12",
    "kode_sub_kegiatan": "4.01.01.2.12.0002",
    "nama_sub_kegiatan": "Penyediaan Kebutuhan Rumah Tangga Wakil Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.12",
    "kode_sub_kegiatan": "4.01.01.2.12.0003",
    "nama_sub_kegiatan": "Penyediaan Kebutuhan Rumah Tangga Sekretariat Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.13",
    "kode_sub_kegiatan": "4.01.01.2.13.0001",
    "nama_sub_kegiatan": "Pengelolaan Kelembagaan dan Analisis Jabatan"
  },
  {
    "kode_kegiatan": "4.01.01.2.13",
    "kode_sub_kegiatan": "4.01.01.2.13.0002",
    "nama_sub_kegiatan": "Fasilitasi Pelayanan Publik dan Tata Laksana"
  },
  {
    "kode_kegiatan": "4.01.01.2.13",
    "kode_sub_kegiatan": "4.01.01.2.13.0003",
    "nama_sub_kegiatan": "Peningkatan Kinerja dan Reformasi Birokrasi"
  },
  {
    "kode_kegiatan": "4.01.01.2.13",
    "kode_sub_kegiatan": "4.01.01.2.13.0004",
    "nama_sub_kegiatan": "Monitoring, Evaluasi dan Pengendalian Kualitas Pelayanan Publik dan Tata Laksana"
  },
  {
    "kode_kegiatan": "4.01.01.2.13",
    "kode_sub_kegiatan": "4.01.01.2.13.0005",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Kinerja Pemerintah Daerah"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0001",
    "nama_sub_kegiatan": "Fasilitasi Keprotokolan"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0001",
    "nama_sub_kegiatan": "Fasilitasi Keprotokolan"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0001",
    "nama_sub_kegiatan": "Fasilitasi Keprotokolan"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0002",
    "nama_sub_kegiatan": "Fasilitasi Komunikasi Pimpinan"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0002",
    "nama_sub_kegiatan": "Fasilitasi Komunikasi Pimpinan"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0003",
    "nama_sub_kegiatan": "Pendokumentasian Tugas Pimpinan"
  },
  {
    "kode_kegiatan": "4.01.01.2.14",
    "kode_sub_kegiatan": "4.01.01.2.14.0003",
    "nama_sub_kegiatan": "Pendokumentasian Tugas Pimpinan"
  },
  {
    "kode_kegiatan": "4.02.02.2.01",
    "kode_sub_kegiatan": "4.02.02.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan dan Pembahasan Program Pembentukan Peraturan Daerah"
  },
  {
    "kode_kegiatan": "4.02.02.2.01",
    "kode_sub_kegiatan": "4.02.02.2.01.0002",
    "nama_sub_kegiatan": "Pembahasan Rancangan Peraturan Daerah"
  },
  {
    "kode_kegiatan": "4.02.02.2.01",
    "kode_sub_kegiatan": "4.02.02.2.01.0003",
    "nama_sub_kegiatan": "Penyelenggaraan Kajian Perundang-Undangan"
  },
  {
    "kode_kegiatan": "4.02.02.2.01",
    "kode_sub_kegiatan": "4.02.02.2.01.0004",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Penjelasan/Keterangan Naskah Akademik"
  },
  {
    "kode_kegiatan": "4.02.02.2.01",
    "kode_sub_kegiatan": "4.02.02.2.01.0005",
    "nama_sub_kegiatan": "Penyusunan Tata Tertib DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.02",
    "kode_sub_kegiatan": "4.02.02.2.02.0001",
    "nama_sub_kegiatan": "Pembahasan KUA dan PPAS"
  },
  {
    "kode_kegiatan": "4.02.02.2.02",
    "kode_sub_kegiatan": "4.02.02.2.02.0002",
    "nama_sub_kegiatan": "Pembahasan Perubahan KUA dan Perubahan PPAS"
  },
  {
    "kode_kegiatan": "4.02.02.2.02",
    "kode_sub_kegiatan": "4.02.02.2.02.0003",
    "nama_sub_kegiatan": "Pembahasan APBD"
  },
  {
    "kode_kegiatan": "4.02.02.2.02",
    "kode_sub_kegiatan": "4.02.02.2.02.0004",
    "nama_sub_kegiatan": "Pembahasan APBD Perubahan"
  },
  {
    "kode_kegiatan": "4.02.02.2.02",
    "kode_sub_kegiatan": "4.02.02.2.02.0005",
    "nama_sub_kegiatan": "Pembahasan Laporan Semester"
  },
  {
    "kode_kegiatan": "4.02.02.2.02",
    "kode_sub_kegiatan": "4.02.02.2.02.0006",
    "nama_sub_kegiatan": "Pembahasan Pertanggungjawaban APBD"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0001",
    "nama_sub_kegiatan": "Pengawasan Urusan Pemerintahan Bidang Pemerintahan dan Hukum"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0002",
    "nama_sub_kegiatan": "Pengawasan Urusan Pemerintahan Bidang Infrastruktur"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0003",
    "nama_sub_kegiatan": "Pengawasan Urusan Pemerintahan Bidang Kesejahteraan Rakyat"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0004",
    "nama_sub_kegiatan": "Pengawasan Urusan Pemerintahan Bidang Perekonomian"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0005",
    "nama_sub_kegiatan": "Pengawasan Urusan Pemerintahan Bidang Sumber Daya Alam"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0006",
    "nama_sub_kegiatan": "Pengawasan Tindak Lanjut Hasil Pemeriksaan Laporan Keuangan oleh Badan Pemeriksa Keuangan"
  },
  {
    "kode_kegiatan": "4.02.02.2.03",
    "kode_sub_kegiatan": "4.02.02.2.03.0008",
    "nama_sub_kegiatan": "Pembahasan Laporan Keterangan Pertanggungjawaban Kepala Daerah"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0001",
    "nama_sub_kegiatan": "Orientasi DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0002",
    "nama_sub_kegiatan": "Pendalaman Tugas DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0004",
    "nama_sub_kegiatan": "Penyediaan Kelompok Pakar dan Tim Ahli"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0005",
    "nama_sub_kegiatan": "Penyediaan Tenaga Ahli Fraksi"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0006",
    "nama_sub_kegiatan": "Penyelenggaraan Hubungan Masyarakat"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0007",
    "nama_sub_kegiatan": "Penyusunan Program Kerja DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.04",
    "kode_sub_kegiatan": "4.02.02.2.04.0008",
    "nama_sub_kegiatan": "Publikasi dan Dokumentasi DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.05",
    "kode_sub_kegiatan": "4.02.02.2.05.0001",
    "nama_sub_kegiatan": "Kunjungan Kerja dalam Daerah"
  },
  {
    "kode_kegiatan": "4.02.02.2.05",
    "kode_sub_kegiatan": "4.02.02.2.05.0002",
    "nama_sub_kegiatan": "Penyusunan Pokok-Pokok Pikiran DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.05",
    "kode_sub_kegiatan": "4.02.02.2.05.0003",
    "nama_sub_kegiatan": "Pelaksanaan Reses"
  },
  {
    "kode_kegiatan": "4.02.02.2.06",
    "kode_sub_kegiatan": "4.02.02.2.06.0001",
    "nama_sub_kegiatan": "Penyusunan Kode Etik DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.08",
    "kode_sub_kegiatan": "4.02.02.2.08.0001",
    "nama_sub_kegiatan": "Koordinasi dan Konsultasi Pelaksanaan Tugas DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.08",
    "kode_sub_kegiatan": "4.02.02.2.08.0002",
    "nama_sub_kegiatan": "Penyusunan Laporan Kinerja DPRD"
  },
  {
    "kode_kegiatan": "4.02.02.2.08",
    "kode_sub_kegiatan": "4.02.02.2.08.0003",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Badan Musyawarah"
  },
  {
    "kode_kegiatan": "4.02.02.2.08",
    "kode_sub_kegiatan": "4.02.02.2.08.0004",
    "nama_sub_kegiatan": "Fasilitasi Tugas Pimpinan DPRD"
  },
  {
    "kode_kegiatan": "4.02.01.2.01",
    "kode_sub_kegiatan": "4.02.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "4.02.01.2.01",
    "kode_sub_kegiatan": "4.02.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "4.02.01.2.01",
    "kode_sub_kegiatan": "4.02.01.2.01.0007",
    "nama_sub_kegiatan": "Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_kegiatan": "4.02.01.2.02",
    "kode_sub_kegiatan": "4.02.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "4.02.01.2.02",
    "kode_sub_kegiatan": "4.02.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "4.02.01.2.05",
    "kode_sub_kegiatan": "4.02.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "4.02.01.2.05",
    "kode_sub_kegiatan": "4.02.01.2.05.0009",
    "nama_sub_kegiatan": "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi"
  },
  {
    "kode_kegiatan": "4.02.01.2.05",
    "kode_sub_kegiatan": "4.02.01.2.05.0010",
    "nama_sub_kegiatan": "Sosialisasi Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "4.02.01.2.05",
    "kode_sub_kegiatan": "4.02.01.2.05.0011",
    "nama_sub_kegiatan": "Bimbingan Teknis Implementasi Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "4.02.01.2.06",
    "kode_sub_kegiatan": "4.02.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "4.02.01.2.07",
    "kode_sub_kegiatan": "4.02.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "4.02.01.2.07",
    "kode_sub_kegiatan": "4.02.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "4.02.01.2.07",
    "kode_sub_kegiatan": "4.02.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "4.02.01.2.08",
    "kode_sub_kegiatan": "4.02.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "4.02.01.2.08",
    "kode_sub_kegiatan": "4.02.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "4.02.01.2.08",
    "kode_sub_kegiatan": "4.02.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "4.02.01.2.09",
    "kode_sub_kegiatan": "4.02.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "4.02.01.2.09",
    "kode_sub_kegiatan": "4.02.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "4.02.01.2.09",
    "kode_sub_kegiatan": "4.02.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "4.02.01.2.09",
    "kode_sub_kegiatan": "4.02.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "4.02.01.2.09",
    "kode_sub_kegiatan": "4.02.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "4.02.01.2.15",
    "kode_sub_kegiatan": "4.02.01.2.15.0001",
    "nama_sub_kegiatan": "Penyelenggaraan Administrasi Keuangan DPRD"
  },
  {
    "kode_kegiatan": "4.02.01.2.15",
    "kode_sub_kegiatan": "4.02.01.2.15.0002",
    "nama_sub_kegiatan": "Penyediaan Pakaian Dinas dan Atribut DPRD"
  },
  {
    "kode_kegiatan": "4.02.01.2.15",
    "kode_sub_kegiatan": "4.02.01.2.15.0003",
    "nama_sub_kegiatan": "Pelaksanaan Medical Check Up DPRD"
  },
  {
    "kode_kegiatan": "4.02.01.2.16",
    "kode_sub_kegiatan": "4.02.01.2.16.0002",
    "nama_sub_kegiatan": "Fasilitasi Fraksi DPRD"
  },
  {
    "kode_kegiatan": "4.02.01.2.16",
    "kode_sub_kegiatan": "4.02.01.2.16.0003",
    "nama_sub_kegiatan": "Fasilitasi Rapat Koordinasi dan Konsultasi DPRD"
  },
  {
    "kode_kegiatan": "5.01.02.2.01",
    "kode_sub_kegiatan": "5.01.02.2.01.0001",
    "nama_sub_kegiatan": "Analisis Kondisi Daerah, Permasalahan, dan Isu Strategis Pembangunan Daerah"
  },
  {
    "kode_kegiatan": "5.01.02.2.01",
    "kode_sub_kegiatan": "5.01.02.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Konsultasi Publik"
  },
  {
    "kode_kegiatan": "5.01.02.2.01",
    "kode_sub_kegiatan": "5.01.02.2.01.0004",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Forum Perangkat Daerah/Lintas Perangkat Daerah"
  },
  {
    "kode_kegiatan": "5.01.02.2.01",
    "kode_sub_kegiatan": "5.01.02.2.01.0005",
    "nama_sub_kegiatan": "Pelaksanaan Musrenbang Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.01.02.2.01",
    "kode_sub_kegiatan": "5.01.02.2.01.0006",
    "nama_sub_kegiatan": "Penyiapan Bahan Koordinasi Musrenbang Kecamatan"
  },
  {
    "kode_kegiatan": "5.01.02.2.01",
    "kode_sub_kegiatan": "5.01.02.2.01.0007",
    "nama_sub_kegiatan": "Koordinasi Penyusunan dan Penetapan Dokumen Perencanaan Pembangunan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.01.02.2.02",
    "kode_sub_kegiatan": "5.01.02.2.02.0002",
    "nama_sub_kegiatan": "Pembinaan dan Pemanfaatan Data dan Informasi Perencanaan Pembangunan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "5.01.02.2.02",
    "kode_sub_kegiatan": "5.01.02.2.02.0003",
    "nama_sub_kegiatan": "Penyusunan Profil Pembangunan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.01.02.2.03",
    "kode_sub_kegiatan": "5.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi Pengendalian Perencanaan dan Pelaksanaan Pembangunan Daerah di Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.01.02.2.03",
    "kode_sub_kegiatan": "5.01.02.2.03.0003",
    "nama_sub_kegiatan": "Monitoring, Evaluasi dan Penyusunan Laporan Berkala Pelaksanaan Pembangunan Daerah"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Dokumen Perencanaan Pembangunan Daerah Bidang Pemerintahan (RPJPD, RPJMD dan RKPD)"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0002",
    "nama_sub_kegiatan": "Asistensi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Pemerintahan"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Monitoring dan Evaluasi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Pemerintahan"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0004",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Sinergitas dan Harmonisasi Perencanaan Pembangunan Daerah Bidang Pemerintahan"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0005",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Dokumen Perencanaan Pembangunan Daerah Bidang Pembangunan Manusia (RPJPD, RPJMD dan RKPD)"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0006",
    "nama_sub_kegiatan": "Asistensi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Pembangunan Manusia"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0007",
    "nama_sub_kegiatan": "Pelaksanaan Monitoring dan Evaluasi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Pembangunan Manusia"
  },
  {
    "kode_kegiatan": "5.01.03.2.01",
    "kode_sub_kegiatan": "5.01.03.2.01.0008",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Sinergitas dan Harmonisasi Perencanaan Pembangunan Daerah Bidang Pembangunan Manusia"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Dokumen Perencanaan Pembangunan Daerah Bidang Perekonomian (RPJPD, RPJMD dan RKPD)"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0002",
    "nama_sub_kegiatan": "Asistensi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Perekonomian"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Monitoring dan Evaluasi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Perekonomian"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0004",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Sinergitas dan Harmonisasi Perencanaan Pembangunan Daerah Bidang Perekonomian"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0005",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Dokumen Perencanaan Pembangunan Daerah Bidang SDA (RPJPD, RPJMD dan RKPD)"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0006",
    "nama_sub_kegiatan": "Asistensi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang SDA"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0007",
    "nama_sub_kegiatan": "Pelaksanaan Monitoring dan Evaluasi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang SDA"
  },
  {
    "kode_kegiatan": "5.01.03.2.02",
    "kode_sub_kegiatan": "5.01.03.2.02.0008",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Sinergitas dan Harmonisasi Perencanaan Pembangunan Daerah Bidang SDA"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Dokumen Perencanaan Pembangunan Daerah Bidang Infrastruktur (RPJPD, RPJMD dan RKPD)"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0002",
    "nama_sub_kegiatan": "Asistensi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Infrastruktur"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0003",
    "nama_sub_kegiatan": "Pelaksanaan Monitoring dan Evaluasi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Infrastruktur"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0004",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Sinergitas dan Harmonisasi Perencanaan Pembangunan Daerah Bidang Infrastruktur"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0005",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Dokumen Perencanaan Pembangunan Daerah Bidang Kewilayahan (RPJPD, RPJMD dan RKPD)"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0006",
    "nama_sub_kegiatan": "Asistensi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Kewilayahan"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0007",
    "nama_sub_kegiatan": "Pelaksanaan Monitoring dan Evaluasi Penyusunan Dokumen Perencanaan Pembangunan Perangkat Daerah Bidang Kewilayahan"
  },
  {
    "kode_kegiatan": "5.01.03.2.03",
    "kode_sub_kegiatan": "5.01.03.2.03.0008",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Sinergitas dan Harmonisasi Perencanaan Pembangunan Daerah Bidang Kewilayahan"
  },
  {
    "kode_kegiatan": "5.01.01.2.06",
    "kode_sub_kegiatan": "5.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "5.05.02.2.01",
    "kode_sub_kegiatan": "5.05.02.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Pelaksanaan dan Evaluasi Penelitian dan Pengembangan Bidang Pemerintahan Umum"
  },
  {
    "kode_kegiatan": "5.05.02.2.01",
    "kode_sub_kegiatan": "5.05.02.2.01.0012",
    "nama_sub_kegiatan": "Pengelolaan Data Kelitbangan dan Peraturan"
  },
  {
    "kode_kegiatan": "5.05.02.2.02",
    "kode_sub_kegiatan": "5.05.02.2.02.0001",
    "nama_sub_kegiatan": "Penelitian dan Pengembangan Bidang Aspek- Aspek Sosial"
  },
  {
    "kode_kegiatan": "5.05.02.2.02",
    "kode_sub_kegiatan": "5.05.02.2.02.0005",
    "nama_sub_kegiatan": "Penelitian dan Pengembangan Pariwisata"
  },
  {
    "kode_kegiatan": "5.05.02.2.03",
    "kode_sub_kegiatan": "5.05.02.2.03.0010",
    "nama_sub_kegiatan": "Penelitian dan Pengembangan Perhubungan"
  },
  {
    "kode_kegiatan": "5.05.02.2.04",
    "kode_sub_kegiatan": "5.05.02.2.04.0001",
    "nama_sub_kegiatan": "Penelitian, Pengembangan, dan Perekayasaan di Bidang Teknologi dan Inovasi"
  },
  {
    "kode_kegiatan": "X.XX.01.2.01",
    "kode_sub_kegiatan": "X.XX.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "X.XX.01.2.02",
    "kode_sub_kegiatan": "X.XX.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "X.XX.01.2.08",
    "kode_sub_kegiatan": "X.XX.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "X.XX.01.2.08",
    "kode_sub_kegiatan": "X.XX.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.09",
    "kode_sub_kegiatan": "X.XX.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "X.XX.01.2.09",
    "kode_sub_kegiatan": "X.XX.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "X.XX.01.2.09",
    "kode_sub_kegiatan": "X.XX.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan KUA dan PPAS"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0002",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Perubahan KUA dan Perubahan PPAS"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0003",
    "nama_sub_kegiatan": "Koordinasi, Penyusunan dan Verifikasi RKA-SKPD"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0004",
    "nama_sub_kegiatan": "Koordinasi, Penyusunan dan Verifikasi Perubahan RKA-SKPD"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0005",
    "nama_sub_kegiatan": "Koordinasi, Penyusunan dan Verifikasi DPA-SKPD"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi, Penyusunan dan Verifikasi Perubahan DPA-SKPD"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Peraturan Daerah tentang APBD dan Peraturan Kepala Daerah tentang Penjabaran APBD"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0008",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Peraturan Daerah tentang Perubahan APBD dan Peraturan Kepala Daerah tentang Penjabaran Perubahan APBD"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0009",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Regulasi serta Kebijakan Bidang Anggaran"
  },
  {
    "kode_kegiatan": "5.02.02.2.01",
    "kode_sub_kegiatan": "5.02.02.2.01.0013",
    "nama_sub_kegiatan": "Pembinaan Perencanaan Penganggaran Daerah Pemerintah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.02.02.2.02",
    "kode_sub_kegiatan": "5.02.02.2.02.0003",
    "nama_sub_kegiatan": "Penyiapan, Pelaksanaan Pengendalian dan Penerbitan Anggaran Kas dan SPD"
  },
  {
    "kode_kegiatan": "5.02.02.2.02",
    "kode_sub_kegiatan": "5.02.02.2.02.0005",
    "nama_sub_kegiatan": "Koordinasi, Fasilitasi, Asistensi, Sinkronisasi, Supervisi, Monitoring dan Evaluasi Pengelolaan Dana Perimbangan dan Dana Transfer Lainnya"
  },
  {
    "kode_kegiatan": "5.02.02.2.02",
    "kode_sub_kegiatan": "5.02.02.2.02.0006",
    "nama_sub_kegiatan": "Koordinasi, Pelaksanaan Kerja Sama dan Pemantauan Transaksi Non Tunai dengan Lembaga Keuangan Bank dan Lembaga Keuangan Bukan Bank"
  },
  {
    "kode_kegiatan": "5.02.02.2.02",
    "kode_sub_kegiatan": "5.02.02.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Realisasi Penerimaan dan Pengeluaran Kas Daerah, Laporan Aliran Kas, dan Pelaksanaan Pemungutan/ Pemotongan dan Penyetoran Perhitungan Fihak Ketiga (PFK)"
  },
  {
    "kode_kegiatan": "5.02.02.2.02",
    "kode_sub_kegiatan": "5.02.02.2.02.0009",
    "nama_sub_kegiatan": "Rekonsiliasi Data Penerimaan dan Pengeluaran Kas serta Pemungutan dan Pemotongan atas SP2D dengan Instansi Terkait"
  },
  {
    "kode_kegiatan": "5.02.02.2.02",
    "kode_sub_kegiatan": "5.02.02.2.02.0011",
    "nama_sub_kegiatan": "Pembinaan Penatausahaan Keuangan Pemerintah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.02.02.2.03",
    "kode_sub_kegiatan": "5.02.02.2.03.0003",
    "nama_sub_kegiatan": "Koordinasi Penyusunan Laporan Pertanggungjawaban Pelaksanaan APBD Bulanan, Triwulanan dan Semesteran"
  },
  {
    "kode_kegiatan": "5.02.02.2.03",
    "kode_sub_kegiatan": "5.02.02.2.03.0005",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Rancangan Peraturan Daerah tentang Pertanggungjawaban Pelaksanaan APBD Kabupaten/Kota dan Rancangan Peraturan Kepala Daerah tentang Penjabaran Pertanggungjawaban Pelaksanaan APBD Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.02.02.2.03",
    "kode_sub_kegiatan": "5.02.02.2.03.0009",
    "nama_sub_kegiatan": "Penyusunan Kebijakan dan Panduan Teknis Operasional Penyelenggaraan Akuntansi Pemerintah Daerah"
  },
  {
    "kode_kegiatan": "5.02.02.2.03",
    "kode_sub_kegiatan": "5.02.02.2.03.0011",
    "nama_sub_kegiatan": "Pembinaan Akuntansi, Pelaporan dan Pertanggungjawaban Pemerintah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.02.02.2.04",
    "kode_sub_kegiatan": "5.02.02.2.04.0008",
    "nama_sub_kegiatan": "Analisis Perencanaan dan Penyaluran Bantuan Keuangan"
  },
  {
    "kode_kegiatan": "5.02.02.2.04",
    "kode_sub_kegiatan": "5.02.02.2.04.0009",
    "nama_sub_kegiatan": "Pengelolaan Dana Darurat dan Mendesak"
  },
  {
    "kode_kegiatan": "5.02.02.2.04",
    "kode_sub_kegiatan": "5.02.02.2.04.0010",
    "nama_sub_kegiatan": "Pengelolaan Dana bagi Hasil Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "5.02.03.2.01",
    "kode_sub_kegiatan": "5.02.03.2.01.0005",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah"
  },
  {
    "kode_kegiatan": "5.02.03.2.01",
    "kode_sub_kegiatan": "5.02.03.2.01.0006",
    "nama_sub_kegiatan": "Inventarisasi Barang Milik Daerah"
  },
  {
    "kode_kegiatan": "5.02.03.2.01",
    "kode_sub_kegiatan": "5.02.03.2.01.0007",
    "nama_sub_kegiatan": "Pengamanan Barang Milik Daerah"
  },
  {
    "kode_kegiatan": "5.02.03.2.01",
    "kode_sub_kegiatan": "5.02.03.2.01.0011",
    "nama_sub_kegiatan": "Rekonsiliasi dalam rangka Penyusunan Laporan Barang Milik Daerah"
  },
  {
    "kode_kegiatan": "5.02.01.2.01",
    "kode_sub_kegiatan": "5.02.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "5.02.01.2.01",
    "kode_sub_kegiatan": "5.02.01.2.01.0007",
    "nama_sub_kegiatan": "Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_kegiatan": "5.02.01.2.02",
    "kode_sub_kegiatan": "5.02.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "5.02.01.2.02",
    "kode_sub_kegiatan": "5.02.01.2.02.0002",
    "nama_sub_kegiatan": "Penyediaan Administrasi Pelaksanaan Tugas ASN"
  },
  {
    "kode_kegiatan": "5.02.01.2.05",
    "kode_sub_kegiatan": "5.02.01.2.05.0011",
    "nama_sub_kegiatan": "Bimbingan Teknis Implementasi Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "5.02.01.2.08",
    "kode_sub_kegiatan": "5.02.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "5.02.01.2.08",
    "kode_sub_kegiatan": "5.02.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "5.02.01.2.08",
    "kode_sub_kegiatan": "5.02.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0002",
    "nama_sub_kegiatan": "Analisa dan Pengembangan Pajak Daerah, serta Penyusunan Kebijakan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0003",
    "nama_sub_kegiatan": "Penyuluhan dan Penyebarluasan Kebijakan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0004",
    "nama_sub_kegiatan": "Penyediaan Sarana dan Prasarana Pengelolaan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0006",
    "nama_sub_kegiatan": "Pengolahan, Pemeliharaan, dan Pelaporan Basis Data Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0007",
    "nama_sub_kegiatan": "Penilaian Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (PBBP2) serta Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB)"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0008",
    "nama_sub_kegiatan": "Penetapan Wajib Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0009",
    "nama_sub_kegiatan": "Pelayanan dan Konsultasi Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0010",
    "nama_sub_kegiatan": "Penelitian dan Verifikasi Data Pelaporan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0011",
    "nama_sub_kegiatan": "Penagihan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0012",
    "nama_sub_kegiatan": "Penyelesaian Keberatan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.04.2.01",
    "kode_sub_kegiatan": "5.02.04.2.01.0013",
    "nama_sub_kegiatan": "Pengendalian, Pemeriksaan dan Pengawasan Pajak Daerah"
  },
  {
    "kode_kegiatan": "5.02.01.2.02",
    "kode_sub_kegiatan": "5.02.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "5.02.01.2.02",
    "kode_sub_kegiatan": "5.02.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "5.02.01.2.02",
    "kode_sub_kegiatan": "5.02.01.2.02.0005",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Akhir Tahun SKPD"
  },
  {
    "kode_kegiatan": "5.02.01.2.05",
    "kode_sub_kegiatan": "5.02.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "5.02.01.2.05",
    "kode_sub_kegiatan": "5.02.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "5.02.01.2.06",
    "kode_sub_kegiatan": "5.02.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "5.02.01.2.07",
    "kode_sub_kegiatan": "5.02.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "5.02.01.2.07",
    "kode_sub_kegiatan": "5.02.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "5.02.01.2.08",
    "kode_sub_kegiatan": "5.02.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "5.02.01.2.08",
    "kode_sub_kegiatan": "5.02.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "5.02.01.2.08",
    "kode_sub_kegiatan": "5.02.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "5.02.01.2.09",
    "kode_sub_kegiatan": "5.02.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "5.02.03.2.01",
    "kode_sub_kegiatan": "5.02.03.2.01.0005",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah"
  },
  {
    "kode_kegiatan": "5.03.02.2.01",
    "kode_sub_kegiatan": "5.03.02.2.01.0004",
    "nama_sub_kegiatan": "Evaluasi Pengadaan ASN dan Pengadaan ASN"
  },
  {
    "kode_kegiatan": "5.03.02.2.01",
    "kode_sub_kegiatan": "5.03.02.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Administrasi Pemberhentian"
  },
  {
    "kode_kegiatan": "5.03.02.2.01",
    "kode_sub_kegiatan": "5.03.02.2.01.0010",
    "nama_sub_kegiatan": "Pengelolaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "5.03.02.2.02",
    "kode_sub_kegiatan": "5.03.02.2.02.0001",
    "nama_sub_kegiatan": "Pengelolaan Mutasi ASN"
  },
  {
    "kode_kegiatan": "5.03.02.2.02",
    "kode_sub_kegiatan": "5.03.02.2.02.0002",
    "nama_sub_kegiatan": "Pengelolaan Kenaikan Pangkat ASN"
  },
  {
    "kode_kegiatan": "5.03.02.2.02",
    "kode_sub_kegiatan": "5.03.02.2.02.0003",
    "nama_sub_kegiatan": "Pengelolaan Promosi ASN"
  },
  {
    "kode_kegiatan": "5.03.02.2.03",
    "kode_sub_kegiatan": "5.03.02.2.03.0002",
    "nama_sub_kegiatan": "Pengelolaan Assessment Center"
  },
  {
    "kode_kegiatan": "5.03.02.2.04",
    "kode_sub_kegiatan": "5.03.02.2.04.0002",
    "nama_sub_kegiatan": "Pelaksanaan Penilaian dan Evaluasi Kinerja Aparatur"
  },
  {
    "kode_kegiatan": "5.03.02.2.04",
    "kode_sub_kegiatan": "5.03.02.2.04.0008",
    "nama_sub_kegiatan": "Pengelolaan Penyelesaian Pelanggaran Disiplin ASN"
  },
  {
    "kode_kegiatan": "5.03.01.2.01",
    "kode_sub_kegiatan": "5.03.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "5.03.01.2.02",
    "kode_sub_kegiatan": "5.03.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "5.03.01.2.06",
    "kode_sub_kegiatan": "5.03.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "5.03.01.2.07",
    "kode_sub_kegiatan": "5.03.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "5.03.01.2.08",
    "kode_sub_kegiatan": "5.03.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "5.03.01.2.08",
    "kode_sub_kegiatan": "5.03.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "5.03.01.2.09",
    "kode_sub_kegiatan": "5.03.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "5.03.01.2.09",
    "kode_sub_kegiatan": "5.03.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "5.03.01.2.09",
    "kode_sub_kegiatan": "5.03.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "5.03.01.2.13",
    "kode_sub_kegiatan": "5.03.01.2.13.0003",
    "nama_sub_kegiatan": "Peningkatan Kinerja dan Reformasi Birokrasi"
  },
  {
    "kode_kegiatan": "5.04.02.2.01",
    "kode_sub_kegiatan": "5.04.02.2.01.0003",
    "nama_sub_kegiatan": "Penyelenggaraan Pengembangan Kompetensi Teknis Umum, Inti, dan Pilihan bagi Jabatan Administrasi Penyelenggara Urusan Pemerintahan Konkuren, Perangkat Daerah Penunjang, dan Urusan Pemerintahan Umum"
  },
  {
    "kode_kegiatan": "5.04.02.2.02",
    "kode_sub_kegiatan": "5.04.02.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Sertifikasi Kompetensi di Lingkungan Pemerintah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0001",
    "nama_sub_kegiatan": "Pengawasan Kinerja Pemerintah Daerah"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0002",
    "nama_sub_kegiatan": "Pengawasan Keuangan Pemerintah Daerah"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0003",
    "nama_sub_kegiatan": "Reviu Laporan Kinerja"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0004",
    "nama_sub_kegiatan": "Reviu Laporan Keuangan"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0005",
    "nama_sub_kegiatan": "Pengawasan Desa"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0006",
    "nama_sub_kegiatan": "Kerja Sama Pengawasan Internal"
  },
  {
    "kode_kegiatan": "6.01.02.2.01",
    "kode_sub_kegiatan": "6.01.02.2.01.0007",
    "nama_sub_kegiatan": "Monitoring dan Evaluasi Tindak Lanjut Hasil Pemeriksaan BPK RI dan Tindak Lanjut Hasil Pemeriksaan APIP"
  },
  {
    "kode_kegiatan": "6.01.02.2.02",
    "kode_sub_kegiatan": "6.01.02.2.02.0001",
    "nama_sub_kegiatan": "Penanganan Penyelesaian Kerugian Negara/Daerah"
  },
  {
    "kode_kegiatan": "6.01.02.2.02",
    "kode_sub_kegiatan": "6.01.02.2.02.0002",
    "nama_sub_kegiatan": "Pengawasan dengan Tujuan Tertentu"
  },
  {
    "kode_kegiatan": "6.01.03.2.01",
    "kode_sub_kegiatan": "6.01.03.2.01.0001",
    "nama_sub_kegiatan": "Perumusan Kebijakan Teknis di Bidang Pengawasan"
  },
  {
    "kode_kegiatan": "6.01.03.2.02",
    "kode_sub_kegiatan": "6.01.03.2.02.0001",
    "nama_sub_kegiatan": "Pendampingan dan Asistensi Urusan Pemerintahan Daerah"
  },
  {
    "kode_kegiatan": "6.01.03.2.02",
    "kode_sub_kegiatan": "6.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pendampingan, Asistensi, Verifikasi, dan Penilaian Reformasi Birokrasi"
  },
  {
    "kode_kegiatan": "6.01.03.2.02",
    "kode_sub_kegiatan": "6.01.03.2.02.0003",
    "nama_sub_kegiatan": "Koordinasi, Monitoring dan Evaluasi serta Verifikasi Pencegahan dan Pemberantasan Korupsi"
  },
  {
    "kode_kegiatan": "6.01.03.2.02",
    "kode_sub_kegiatan": "6.01.03.2.02.0004",
    "nama_sub_kegiatan": "Pendampingan, Asistensi dan Verifikasi Penegakan Integritas"
  },
  {
    "kode_kegiatan": "6.01.01.2.01",
    "kode_sub_kegiatan": "6.01.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "6.01.01.2.01",
    "kode_sub_kegiatan": "6.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "6.01.01.2.02",
    "kode_sub_kegiatan": "6.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "6.01.01.2.02",
    "kode_sub_kegiatan": "6.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "6.01.01.2.05",
    "kode_sub_kegiatan": "6.01.01.2.05.0009",
    "nama_sub_kegiatan": "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "6.01.01.2.06",
    "kode_sub_kegiatan": "6.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "6.01.01.2.07",
    "kode_sub_kegiatan": "6.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "6.01.01.2.08",
    "kode_sub_kegiatan": "6.01.01.2.08.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Surat Menyurat"
  },
  {
    "kode_kegiatan": "6.01.01.2.08",
    "kode_sub_kegiatan": "6.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "6.01.01.2.08",
    "kode_sub_kegiatan": "6.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "6.01.01.2.09",
    "kode_sub_kegiatan": "6.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "6.01.01.2.09",
    "kode_sub_kegiatan": "6.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "6.01.01.2.09",
    "kode_sub_kegiatan": "6.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0016",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program dan Pelaksanaan Pemberdayaan Masyarakat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0009",
    "nama_sub_kegiatan": "Pengadaan Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0009",
    "nama_sub_kegiatan": "Fasilitasi Sinkronisasi Perencanaan Pembangunan Daerah dengan Pembangunan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "X.XX.01.2.02",
    "kode_sub_kegiatan": "X.XX.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "X.XX.01.2.05",
    "kode_sub_kegiatan": "X.XX.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "X.XX.01.2.06",
    "kode_sub_kegiatan": "X.XX.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0016",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program dan Pelaksanaan Pemberdayaan Masyarakat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0003",
    "nama_sub_kegiatan": "Pendataan dan Pengolahan Administrasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.01",
    "kode_sub_kegiatan": "7.01.02.2.01.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi Perencanaan dan Pelaksanaan Kegiatan Pemerintahan dengan Perangkat Daerah dan Instansi Vertikal Terkait"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0009",
    "nama_sub_kegiatan": "Fasilitasi Sinkronisasi Perencanaan Pembangunan Daerah dengan Pembangunan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0016",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program dan Pelaksanaan Pemberdayaan Masyarakat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0003",
    "nama_sub_kegiatan": "Pendataan dan Pengolahan Administrasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0018",
    "nama_sub_kegiatan": "Koordinasi Pelaksanaan Pembangunan Kawasan Perdesaan di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0003",
    "nama_sub_kegiatan": "Pendataan dan Pengolahan Administrasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.03",
    "kode_sub_kegiatan": "7.01.03.2.03.0001",
    "nama_sub_kegiatan": "Penyelenggaraan Lembaga Kemasyarakatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0016",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program dan Pelaksanaan Pemberdayaan Masyarakat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0003",
    "nama_sub_kegiatan": "Pendataan dan Pengolahan Administrasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, Pajak dan Perizinan Kendaraan Dinas Operasional atau Lapangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0006",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Pemilihan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0016",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program dan Pelaksanaan Pemberdayaan Masyarakat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0005",
    "nama_sub_kegiatan": "Rekonsiliasi dan Penyusunan Laporan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0003",
    "nama_sub_kegiatan": "Pendataan dan Pengolahan Administrasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0004",
    "nama_sub_kegiatan": "Koordinasi dan Pelaksanaan Sistem Informasi Kepegawaian"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0008",
    "nama_sub_kegiatan": "Fasilitasi Kunjungan Tamu"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0001",
    "nama_sub_kegiatan": "Pengadaan Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0003",
    "nama_sub_kegiatan": "Penyediaan Jasa Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0011",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "X.XX.01.2.01",
    "kode_sub_kegiatan": "X.XX.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.02.2.03",
    "kode_sub_kegiatan": "7.01.02.2.03.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah dan/atau Instansi Vertikal yang Terkait dalam Pemeliharaan Sarana dan Prasarana Pelayanan Umum"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0001",
    "nama_sub_kegiatan": "Pembinaan Wawasan Kebangsaan dan Ketahanan Nasional dalam rangka Memantapkan Pengamalan Pancasila, Pelaksanaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Pelestarian Bhinneka Tunggal Ika serta Pemertahanan dan Pemeliharaan Keutuhan Negara Kesatuan Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi, Koordinasi dan Pembinaan (Bimtek, Sosialisasi, Konsultasi) Wawasan Kebangsaan dan Ketahanan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0005",
    "nama_sub_kegiatan": "Penanganan Konflik Sosial Sesuai Ketentuan Peraturan Perundang-Undangan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0001",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Peraturan Desa dan Peraturan Kepala Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0005",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas Kepala Desa dan Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0007",
    "nama_sub_kegiatan": "Fasilitasi Pelaksanaan Tugas dan Fungsi Badan Permusyawaratan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0008",
    "nama_sub_kegiatan": "Rekomendasi Pengangkatan dan Pemberhentian Perangkat Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0014",
    "nama_sub_kegiatan": "Fasilitasi Kerja Sama Antar Desa dan Kerja Sama Desa dengan Pihak Ketiga"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0016",
    "nama_sub_kegiatan": "Fasilitasi Penyusunan Program dan Pelaksanaan Pemberdayaan Masyarakat Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0011",
    "nama_sub_kegiatan": "Dukungan Pelaksanaan Sistem Pemerintahan Berbasis Elektronik pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0001",
    "nama_sub_kegiatan": "Penyusunan Dokumen Perencanaan Perangkat Daerah"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0007",
    "nama_sub_kegiatan": "Evaluasi Kinerja Perangkat Daerah"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0003",
    "nama_sub_kegiatan": "Pelaksanaan Penatausahaan dan Pengujian/Verifikasi Keuangan SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.03",
    "kode_sub_kegiatan": "7.01.01.2.03.0006",
    "nama_sub_kegiatan": "Penatausahaan Barang Milik Daerah pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0005",
    "nama_sub_kegiatan": "Monitoring, Evaluasi, dan Penilaian Kinerja Pegawai"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0002",
    "nama_sub_kegiatan": "Fasilitasi Percepatan Pencapaian Standar Pelayanan Minimal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.03",
    "kode_sub_kegiatan": "7.01.03.2.03.0002",
    "nama_sub_kegiatan": "Peningkatan Kapasitas Lembaga Kemasyarakatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.03",
    "kode_sub_kegiatan": "7.01.03.2.03.0003",
    "nama_sub_kegiatan": "Penyediaan Sarana dan Prasarana Lembaga Kemasyarakatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.04.2.02",
    "kode_sub_kegiatan": "7.01.04.2.02.0001",
    "nama_sub_kegiatan": "Koordinasi/Sinergi dengan Perangkat Daerah yang Tugas dan Fungsinya di Bidang Penegakan Peraturan Perundang-Undangan dan/atau Kepolisian Negara Republik Indonesia"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0009",
    "nama_sub_kegiatan": "Fasilitasi Sinkronisasi Perencanaan Pembangunan Daerah dengan Pembangunan Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.05",
    "kode_sub_kegiatan": "7.01.01.2.05.0002",
    "nama_sub_kegiatan": "Pengadaan Pakaian Dinas beserta Atribut Kelengkapannya"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan dan Perizinan Alat Angkutan Darat Tak Bermotor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0002",
    "nama_sub_kegiatan": "Pembangunan Sarana dan Prasarana Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0003",
    "nama_sub_kegiatan": "Pemberdayaan Masyarakat di Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.03.2.02",
    "kode_sub_kegiatan": "7.01.03.2.02.0004",
    "nama_sub_kegiatan": "Evaluasi Kelurahan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0008",
    "nama_sub_kegiatan": "Pelaksanaan Tugas Forum Koordinasi Pimpinan di Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0007",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Keuangan Bulanan/ Triwulanan/ Semesteran SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0005",
    "nama_sub_kegiatan": "Pengadaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0010",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.02.2.02",
    "kode_sub_kegiatan": "7.01.02.2.02.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Pelaksanaan Pelayanan kepada Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0001",
    "nama_sub_kegiatan": "Peningkatan Partisipasi Masyarakat dalam Forum Musyawarah Perencanaan Pembangunan di Desa"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0002",
    "nama_sub_kegiatan": "Sinkronisasi Program Kerja dan Kegiatan Pemberdayaan Masyarakat yang Dilakukan oleh Pemerintah dan Swasta di Wilayah Kerja Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.03.2.01",
    "kode_sub_kegiatan": "7.01.03.2.01.0003",
    "nama_sub_kegiatan": "Peningkatan Efektifitas Kegiatan Pemberdayaan Masyarakat di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0001",
    "nama_sub_kegiatan": "Sinergitas dengan Kepolisian Negara Republik Indonesia, Tentara Nasional Indonesia dan Instansi Vertikal di Wilayah Kecamatan"
  },
  {
    "kode_kegiatan": "7.01.04.2.01",
    "kode_sub_kegiatan": "7.01.04.2.01.0002",
    "nama_sub_kegiatan": "Harmonisasi Hubungan dengan Tokoh Agama dan Tokoh Masyarakat"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0003",
    "nama_sub_kegiatan": "Pembinaan Persatuan dan Kesatuan Bangsa"
  },
  {
    "kode_kegiatan": "7.01.05.2.01",
    "kode_sub_kegiatan": "7.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pembinaan Kerukunan Antar Suku dan Intra Suku, Umat Beragama, Ras, dan Golongan Lainnya Guna Mewujudkan Stabilitas Keamanan Lokal, Regional, dan Nasional"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0002",
    "nama_sub_kegiatan": "Fasilitasi Administrasi Tata Pemerintahan Desa"
  },
  {
    "kode_kegiatan": "7.01.06.2.01",
    "kode_sub_kegiatan": "7.01.06.2.01.0003",
    "nama_sub_kegiatan": "Fasilitasi Pengelolaan Keuangan Desa dan Pendayagunaan Aset Desa"
  },
  {
    "kode_kegiatan": "7.01.01.2.01",
    "kode_sub_kegiatan": "7.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.02",
    "kode_sub_kegiatan": "7.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0003",
    "nama_sub_kegiatan": "Penyediaan Peralatan Rumah Tangga"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0006",
    "nama_sub_kegiatan": "Penyediaan Bahan Bacaan dan Peraturan Perundang-undangan"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0007",
    "nama_sub_kegiatan": "Penyediaan Bahan/Material"
  },
  {
    "kode_kegiatan": "7.01.01.2.06",
    "kode_sub_kegiatan": "7.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0006",
    "nama_sub_kegiatan": "Pengadaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0010",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.07",
    "kode_sub_kegiatan": "7.01.01.2.07.0011",
    "nama_sub_kegiatan": "Pengadaan Sarana dan Prasarana Pendukung Gedung Kantor atau Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "7.01.01.2.08",
    "kode_sub_kegiatan": "7.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0005",
    "nama_sub_kegiatan": "Pemeliharaan Mebel"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "7.01.01.2.09",
    "kode_sub_kegiatan": "7.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  },
  {
    "kode_kegiatan": "8.01.02.2.01",
    "kode_sub_kegiatan": "8.01.02.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan di Bidang Ideologi Wawasan Kebangsaan, Bela Negara, Karakter Bangsa, Pembauran Kebangsaan, Bineka Tunggal Ika dan Sejarah Kebangsaan"
  },
  {
    "kode_kegiatan": "8.01.03.2.01",
    "kode_sub_kegiatan": "8.01.03.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan di Bidang Pendidikan Politik, Etika Budaya Politik, Peningkatan Demokrasi, Fasilitasi Kelembagaan Pemerintahan, Perwakilan dan Partai Politik, Pemilihan Umum/Pemilihan Umum Kepala Daerah, serta Pemantauan Situasi Politik di Daerah"
  },
  {
    "kode_kegiatan": "8.01.04.2.01",
    "kode_sub_kegiatan": "8.01.04.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan di Bidang Pendaftaran Ormas, Pemberdayaan Ormas, Evaluasi dan Mediasi Sengketa Ormas, Pengawasan Ormas dan Ormas Asing di Daerah"
  },
  {
    "kode_kegiatan": "8.01.05.2.01",
    "kode_sub_kegiatan": "8.01.05.2.01.0004",
    "nama_sub_kegiatan": "Pelaksanaan Koordinasi di Bidang Ketahanan Ekonomi, Sosial, Budaya dan Fasilitasi Pencegahan Penyalagunaan Narkotika, Fasilitasi Kerukunan Umat Beragama dan Penghayat Kepercayaan di Daerah"
  },
  {
    "kode_kegiatan": "8.01.06.2.01",
    "kode_sub_kegiatan": "8.01.06.2.01.0003",
    "nama_sub_kegiatan": "Pelaksanaan Kebijakan di Bidang Kewaspadaan Dini, Kerja Sama Intelijen, Pemantauan Orang Asing, Tenaga Kerja Asing dan Lembaga Asing, Kewaspadaan Perbatasan antar Negara, Fasilitasi Kelembagaan Bidang Kewaspadaan, serta Penanganan Konflik di Daerah"
  },
  {
    "kode_kegiatan": "8.01.06.2.01",
    "kode_sub_kegiatan": "8.01.06.2.01.0004",
    "nama_sub_kegiatan": "Pelaksanaan Koordinasi di Bidang Kewaspadaan Dini, Kerja Sama Intelijen, Pemantauan Orang Asing, Tenaga Kerja Asing dan Lembaga Asing, Kewaspadaan Perbatasan antar Negara, Fasilitasi Kelembagaan Bidang Kewaspadaan, serta Penanganan Konflik di Daerah"
  },
  {
    "kode_kegiatan": "8.01.06.2.01",
    "kode_sub_kegiatan": "8.01.06.2.01.0006",
    "nama_sub_kegiatan": "Pelaksanaan Forum Koordinasi Pimpinan Daerah Kabupaten/Kota"
  },
  {
    "kode_kegiatan": "8.01.01.2.01",
    "kode_sub_kegiatan": "8.01.01.2.01.0006",
    "nama_sub_kegiatan": "Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD"
  },
  {
    "kode_kegiatan": "8.01.01.2.02",
    "kode_sub_kegiatan": "8.01.01.2.02.0001",
    "nama_sub_kegiatan": "Penyediaan Gaji dan Tunjangan ASN"
  },
  {
    "kode_kegiatan": "8.01.01.2.06",
    "kode_sub_kegiatan": "8.01.01.2.06.0001",
    "nama_sub_kegiatan": "Penyediaan Komponen Instalasi Listrik/Penerangan Bangunan Kantor"
  },
  {
    "kode_kegiatan": "8.01.01.2.06",
    "kode_sub_kegiatan": "8.01.01.2.06.0002",
    "nama_sub_kegiatan": "Penyediaan Peralatan dan Perlengkapan Kantor"
  },
  {
    "kode_kegiatan": "8.01.01.2.06",
    "kode_sub_kegiatan": "8.01.01.2.06.0004",
    "nama_sub_kegiatan": "Penyediaan Bahan Logistik Kantor"
  },
  {
    "kode_kegiatan": "8.01.01.2.06",
    "kode_sub_kegiatan": "8.01.01.2.06.0005",
    "nama_sub_kegiatan": "Penyediaan Barang Cetakan dan Penggandaan"
  },
  {
    "kode_kegiatan": "8.01.01.2.06",
    "kode_sub_kegiatan": "8.01.01.2.06.0009",
    "nama_sub_kegiatan": "Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD"
  },
  {
    "kode_kegiatan": "8.01.01.2.06",
    "kode_sub_kegiatan": "8.01.01.2.06.0010",
    "nama_sub_kegiatan": "Penatausahaan Arsip Dinamis pada SKPD"
  },
  {
    "kode_kegiatan": "8.01.01.2.08",
    "kode_sub_kegiatan": "8.01.01.2.08.0002",
    "nama_sub_kegiatan": "Penyediaan Jasa Komunikasi, Sumber Daya Air dan Listrik"
  },
  {
    "kode_kegiatan": "8.01.01.2.08",
    "kode_sub_kegiatan": "8.01.01.2.08.0004",
    "nama_sub_kegiatan": "Penyediaan Jasa Pelayanan Umum Kantor"
  },
  {
    "kode_kegiatan": "8.01.01.2.09",
    "kode_sub_kegiatan": "8.01.01.2.09.0001",
    "nama_sub_kegiatan": "Penyediaan Jasa Pemeliharaan, Biaya Pemeliharaan, dan Pajak Kendaraan Perorangan Dinas atau Kendaraan Dinas Jabatan"
  },
  {
    "kode_kegiatan": "8.01.01.2.09",
    "kode_sub_kegiatan": "8.01.01.2.09.0006",
    "nama_sub_kegiatan": "Pemeliharaan Peralatan dan Mesin Lainnya"
  },
  {
    "kode_kegiatan": "8.01.01.2.09",
    "kode_sub_kegiatan": "8.01.01.2.09.0009",
    "nama_sub_kegiatan": "Pemeliharaan/Rehabilitasi Gedung Kantor dan Bangunan Lainnya"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const uniqueData = data.reduce((acc, current) => {
      const x = acc.find(item => item.kode_sub_kegiatan === current.kode_sub_kegiatan);
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

    await queryInterface.bulkInsert('Sub_Kegiatans', uniqueData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sub_Kegiatans', null, {});
  }
};
