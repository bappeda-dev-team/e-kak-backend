'use strict';

const data = [
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.02",
    "nama_program": "PROGRAM PENGELOLAAN PENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.03",
    "nama_program": "PROGRAM PENGEMBANGAN KURIKULUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.03",
    "nama_program": "PROGRAM PENGEMBANGAN KURIKULUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.03",
    "nama_program": "PROGRAM PENGEMBANGAN KURIKULUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.04",
    "nama_program": "PROGRAM PENDIDIK DAN TENAGA KEPENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.04",
    "nama_program": "PROGRAM PENDIDIK DAN TENAGA KEPENDIDIKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.01",
    "kode_program": "1.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.02",
    "nama_program": "PROGRAM PENGEMBANGAN KEBUDAYAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.04",
    "nama_program": "PROGRAM PEMBINAAN SEJARAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.04",
    "nama_program": "PROGRAM PEMBINAAN SEJARAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.05",
    "nama_program": "PROGRAM PELESTARIAN DAN PENGELOLAAN CAGAR BUDAYA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.05",
    "nama_program": "PROGRAM PELESTARIAN DAN PENGELOLAAN CAGAR BUDAYA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.05",
    "nama_program": "PROGRAM PELESTARIAN DAN PENGELOLAAN CAGAR BUDAYA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.22",
    "kode_program": "2.22.05",
    "nama_program": "PROGRAM PELESTARIAN DAN PENGELOLAAN CAGAR BUDAYA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.02",
    "nama_program": "PROGRAM PEMENUHAN UPAYA KESEHATAN PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.03",
    "nama_program": "PROGRAM PENINGKATAN KAPASITAS SUMBER DAYA MANUSIA KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.03",
    "nama_program": "PROGRAM PENINGKATAN KAPASITAS SUMBER DAYA MANUSIA KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.03",
    "nama_program": "PROGRAM PENINGKATAN KAPASITAS SUMBER DAYA MANUSIA KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.03",
    "nama_program": "PROGRAM PENINGKATAN KAPASITAS SUMBER DAYA MANUSIA KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.03",
    "nama_program": "PROGRAM PENINGKATAN KAPASITAS SUMBER DAYA MANUSIA KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.04",
    "nama_program": "PROGRAM SEDIAAN FARMASI, ALAT KESEHATAN DAN MAKANAN MINUMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.04",
    "nama_program": "PROGRAM SEDIAAN FARMASI, ALAT KESEHATAN DAN MAKANAN MINUMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.04",
    "nama_program": "PROGRAM SEDIAAN FARMASI, ALAT KESEHATAN DAN MAKANAN MINUMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.04",
    "nama_program": "PROGRAM SEDIAAN FARMASI, ALAT KESEHATAN DAN MAKANAN MINUMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.04",
    "nama_program": "PROGRAM SEDIAAN FARMASI, ALAT KESEHATAN DAN MAKANAN MINUMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.05",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT BIDANG KESEHATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.02",
    "kode_program": "1.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.02",
    "nama_program": "PROGRAM PENGELOLAAN SUMBER DAYA AIR (SDA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.03",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM PENYEDIAAN AIR MINUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.05",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM AIR LIMBAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.05",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM AIR LIMBAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.05",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM AIR LIMBAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.06",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM DRAINASE"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.06",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM DRAINASE"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.06",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM DRAINASE"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.06",
    "nama_program": "PROGRAM PENGELOLAAN DAN PENGEMBANGAN SISTEM DRAINASE"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.08",
    "nama_program": "PROGRAM PENATAAN BANGUNAN GEDUNG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.08",
    "nama_program": "PROGRAM PENATAAN BANGUNAN GEDUNG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.08",
    "nama_program": "PROGRAM PENATAAN BANGUNAN GEDUNG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.08",
    "nama_program": "PROGRAM PENATAAN BANGUNAN GEDUNG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.10",
    "nama_program": "PROGRAM PENYELENGGARAAN JALAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.11",
    "nama_program": "PROGRAM PENGEMBANGAN JASA KONSTRUKSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.11",
    "nama_program": "PROGRAM PENGEMBANGAN JASA KONSTRUKSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.11",
    "nama_program": "PROGRAM PENGEMBANGAN JASA KONSTRUKSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.12",
    "nama_program": "PROGRAM PENYELENGGARAAN PENATAAN RUANG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.12",
    "nama_program": "PROGRAM PENYELENGGARAAN PENATAAN RUANG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.12",
    "nama_program": "PROGRAM PENYELENGGARAAN PENATAAN RUANG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.12",
    "nama_program": "PROGRAM PENYELENGGARAAN PENATAAN RUANG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.03",
    "kode_program": "1.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.02",
    "nama_program": "PROGRAM PENGEMBANGAN PERUMAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.02",
    "nama_program": "PROGRAM PENGEMBANGAN PERUMAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.03",
    "nama_program": "PROGRAM KAWASAN PERMUKIMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.03",
    "nama_program": "PROGRAM KAWASAN PERMUKIMAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.05",
    "nama_program": "PROGRAM PENINGKATAN PRASARANA, SARANA DAN UTILITAS UMUM (PSU)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.05",
    "nama_program": "PROGRAM PENINGKATAN PRASARANA, SARANA DAN UTILITAS UMUM (PSU)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.05",
    "nama_program": "PROGRAM PENINGKATAN PRASARANA, SARANA DAN UTILITAS UMUM (PSU)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.04",
    "kode_program": "1.04.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.04",
    "nama_program": "PROGRAM PENYELESAIAN SENGKETA TANAH GARAPAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.04",
    "nama_program": "PROGRAM PENYELESAIAN SENGKETA TANAH GARAPAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.05",
    "nama_program": "PROGRAM PENYELESAIAN GANTI KERUGIAN DAN SANTUNAN TANAH UNTUK PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.06",
    "nama_program": "PROGRAM REDISTRIBUSI TANAH, DAN GANTI KERUGIAN PROGRAM TANAH KELEBIHAN MAKSIMUM DAN TANAH ABSENTEE"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.06",
    "nama_program": "PROGRAM REDISTRIBUSI TANAH, DAN GANTI KERUGIAN PROGRAM TANAH KELEBIHAN MAKSIMUM DAN TANAH ABSENTEE"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.08",
    "nama_program": "PROGRAM PENGELOLAAN TANAH KOSONG"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.10",
    "nama_program": "PROGRAM PENATAGUNAAN TANAH "
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.10",
    "kode_program": "2.10.10",
    "nama_program": "PROGRAM PENATAGUNAAN TANAH "
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.02",
    "nama_program": "PROGRAM PENINGKATAN KETENTERAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.04",
    "nama_program": "PROGRAM PENCEGAHAN, PENANGGULANGAN, PENYELAMATAN KEBAKARAN DAN PENYELAMATAN NON KEBAKARAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.03",
    "nama_program": "PROGRAM PENANGGULANGAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.05",
    "kode_program": "1.05.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.02",
    "nama_program": "PROGRAM PEMBERDAYAAN SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.02",
    "nama_program": "PROGRAM PEMBERDAYAAN SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.02",
    "nama_program": "PROGRAM PEMBERDAYAAN SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.02",
    "nama_program": "PROGRAM PEMBERDAYAAN SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.04",
    "nama_program": "PROGRAM REHABILITASI SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.05",
    "nama_program": "PROGRAM PERLINDUNGAN DAN JAMINAN SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.05",
    "nama_program": "PROGRAM PERLINDUNGAN DAN JAMINAN SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.06",
    "nama_program": "PROGRAM PENANGANAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.06",
    "nama_program": "PROGRAM PENANGANAN BENCANA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "1.06",
    "kode_program": "1.06.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.03",
    "nama_program": "PROGRAM PELATIHAN KERJA DAN PRODUKTIVITAS TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.03",
    "nama_program": "PROGRAM PELATIHAN KERJA DAN PRODUKTIVITAS TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.03",
    "nama_program": "PROGRAM PELATIHAN KERJA DAN PRODUKTIVITAS TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.04",
    "nama_program": "PROGRAM PENEMPATAN TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.04",
    "nama_program": "PROGRAM PENEMPATAN TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.04",
    "nama_program": "PROGRAM PENEMPATAN TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.04",
    "nama_program": "PROGRAM PENEMPATAN TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.04",
    "nama_program": "PROGRAM PENEMPATAN TENAGA KERJA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.05",
    "nama_program": "PROGRAM HUBUNGAN INDUSTRIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.05",
    "nama_program": "PROGRAM HUBUNGAN INDUSTRIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.05",
    "nama_program": "PROGRAM HUBUNGAN INDUSTRIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.05",
    "nama_program": "PROGRAM HUBUNGAN INDUSTRIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.07",
    "kode_program": "2.07.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.31",
    "kode_program": "3.31.02",
    "nama_program": "PROGRAM PERENCANAAN DAN PEMBANGUNAN INDUSTRI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.31",
    "kode_program": "3.31.03",
    "nama_program": "PROGRAM PENGENDALIAN IZIN USAHA INDUSTRI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.31",
    "kode_program": "3.31.04",
    "nama_program": "PROGRAM PENGELOLAAN SISTEM INFORMASI INDUSTRI NASIONAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.32",
    "kode_program": "3.32.03",
    "nama_program": "PROGRAM PEMBANGUNAN KAWASAN TRANSMIGRASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.32",
    "kode_program": "3.32.03",
    "nama_program": "PROGRAM PEMBANGUNAN KAWASAN TRANSMIGRASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.03",
    "nama_program": "PROGRAM PENINGKATAN DIVERSIFIKASI DAN KETAHANAN PANGAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.03",
    "nama_program": "PROGRAM PENINGKATAN DIVERSIFIKASI DAN KETAHANAN PANGAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.03",
    "nama_program": "PROGRAM PENINGKATAN DIVERSIFIKASI DAN KETAHANAN PANGAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.03",
    "nama_program": "PROGRAM PENINGKATAN DIVERSIFIKASI DAN KETAHANAN PANGAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.03",
    "nama_program": "PROGRAM PENINGKATAN DIVERSIFIKASI DAN KETAHANAN PANGAN MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.04",
    "nama_program": "PROGRAM PENANGANAN KERAWANAN PANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.05",
    "nama_program": "PROGRAM PENGAWASAN KEAMANAN PANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.05",
    "nama_program": "PROGRAM PENGAWASAN KEAMANAN PANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.09",
    "kode_program": "2.09.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.02",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN SARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.04",
    "nama_program": "PROGRAM PENGENDALIAN KESEHATAN HEWAN DAN KESEHATAN MASYARAKAT VETERINER"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.04",
    "nama_program": "PROGRAM PENGENDALIAN KESEHATAN HEWAN DAN KESEHATAN MASYARAKAT VETERINER"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.07",
    "nama_program": "PROGRAM PENYULUHAN PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.02",
    "nama_program": "PROGRAM PERENCANAAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.02",
    "nama_program": "PROGRAM PERENCANAAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.02",
    "nama_program": "PROGRAM PERENCANAAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.02",
    "nama_program": "PROGRAM PERENCANAAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.02",
    "nama_program": "PROGRAM PERENCANAAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.03",
    "nama_program": "PROGRAM PENGENDALIAN PENCEMARAN DAN/ATAU KERUSAKAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.03",
    "nama_program": "PROGRAM PENGENDALIAN PENCEMARAN DAN/ATAU KERUSAKAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.03",
    "nama_program": "PROGRAM PENGENDALIAN PENCEMARAN DAN/ATAU KERUSAKAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.03",
    "nama_program": "PROGRAM PENGENDALIAN PENCEMARAN DAN/ATAU KERUSAKAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.03",
    "nama_program": "PROGRAM PENGENDALIAN PENCEMARAN DAN/ATAU KERUSAKAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.03",
    "nama_program": "PROGRAM PENGENDALIAN PENCEMARAN DAN/ATAU KERUSAKAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.04",
    "nama_program": "PROGRAM PENGELOLAAN KEANEKARAGAMAN HAYATI (KEHATI)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.04",
    "nama_program": "PROGRAM PENGELOLAAN KEANEKARAGAMAN HAYATI (KEHATI)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.04",
    "nama_program": "PROGRAM PENGELOLAAN KEANEKARAGAMAN HAYATI (KEHATI)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.04",
    "nama_program": "PROGRAM PENGELOLAAN KEANEKARAGAMAN HAYATI (KEHATI)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.05",
    "nama_program": "PROGRAM PENGENDALIAN BAHAN BERBAHAYA DAN BERACUN (B3) DAN LIMBAH BAHAN BERBAHAYA DAN BERACUN (LIMBAH B3)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.05",
    "nama_program": "PROGRAM PENGENDALIAN BAHAN BERBAHAYA DAN BERACUN (B3) DAN LIMBAH BAHAN BERBAHAYA DAN BERACUN (LIMBAH B3)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN TERHADAP IZIN LINGKUNGAN DAN IZIN PERLINDUNGAN DAN PENGELOLAAN LINGKUNGAN HIDUP (PPLH)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.08",
    "nama_program": "PROGRAM PENINGKATAN PENDIDIKAN, PELATIHAN DAN PENYULUHAN LINGKUNGAN HIDUP UNTUK MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.08",
    "nama_program": "PROGRAM PENINGKATAN PENDIDIKAN, PELATIHAN DAN PENYULUHAN LINGKUNGAN HIDUP UNTUK MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.09",
    "nama_program": "PROGRAM PENGHARGAAN LINGKUNGAN HIDUP UNTUK MASYARAKAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.10",
    "nama_program": "PROGRAM PENANGANAN PENGADUAN LINGKUNGAN HIDUP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.11",
    "nama_program": "PROGRAM PENGELOLAAN PERSAMPAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.11",
    "nama_program": "PROGRAM PENGELOLAAN PERSAMPAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.11",
    "nama_program": "PROGRAM PENGELOLAAN PERSAMPAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.11",
    "nama_program": "PROGRAM PENGELOLAAN PERSAMPAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.11",
    "nama_program": "PROGRAM PENGELOLAAN PERSAMPAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.11",
    "kode_program": "2.11.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.02",
    "nama_program": "PROGRAM PENDAFTARAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.03",
    "nama_program": "PROGRAM PENCATATAN SIPIL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.04",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI ADMINISTRASI KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.05",
    "nama_program": "PROGRAM PENGELOLAAN PROFIL KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.05",
    "nama_program": "PROGRAM PENGELOLAAN PROFIL KEPENDUDUKAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.12",
    "kode_program": "2.12.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.02",
    "nama_program": "PROGRAM PENATAAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.03",
    "nama_program": "PROGRAM PENINGKATAN KERJA SAMA DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.03",
    "nama_program": "PROGRAM PENINGKATAN KERJA SAMA DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.04",
    "nama_program": "PROGRAM ADMINISTRASI PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.05",
    "nama_program": "PROGRAM PEMBERDAYAAN LEMBAGA KEMASYARAKATAN, LEMBAGA ADAT DAN MASYARAKAT HUKUM ADAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.05",
    "nama_program": "PROGRAM PEMBERDAYAAN LEMBAGA KEMASYARAKATAN, LEMBAGA ADAT DAN MASYARAKAT HUKUM ADAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.05",
    "nama_program": "PROGRAM PEMBERDAYAAN LEMBAGA KEMASYARAKATAN, LEMBAGA ADAT DAN MASYARAKAT HUKUM ADAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.05",
    "nama_program": "PROGRAM PEMBERDAYAAN LEMBAGA KEMASYARAKATAN, LEMBAGA ADAT DAN MASYARAKAT HUKUM ADAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.05",
    "nama_program": "PROGRAM PEMBERDAYAAN LEMBAGA KEMASYARAKATAN, LEMBAGA ADAT DAN MASYARAKAT HUKUM ADAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.05",
    "nama_program": "PROGRAM PEMBERDAYAAN LEMBAGA KEMASYARAKATAN, LEMBAGA ADAT DAN MASYARAKAT HUKUM ADAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.13",
    "kode_program": "2.13.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.02",
    "nama_program": "PROGRAM PENGARUSUTAMAAN GENDER DAN PEMBERDAYAAN PEREMPUAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.02",
    "nama_program": "PROGRAM PENGARUSUTAMAAN GENDER DAN PEMBERDAYAAN PEREMPUAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.02",
    "nama_program": "PROGRAM PENGARUSUTAMAAN GENDER DAN PEMBERDAYAAN PEREMPUAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.03",
    "nama_program": "PROGRAM PERLINDUNGAN PEREMPUAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.06",
    "nama_program": "PROGRAM PEMENUHAN HAK ANAK (PHA)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.07",
    "nama_program": "PROGRAM PERLINDUNGAN KHUSUS ANAK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.08",
    "kode_program": "2.08.07",
    "nama_program": "PROGRAM PERLINDUNGAN KHUSUS ANAK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.02",
    "nama_program": "PROGRAM PENGENDALIAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.02",
    "nama_program": "PROGRAM PENGENDALIAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.02",
    "nama_program": "PROGRAM PENGENDALIAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.02",
    "nama_program": "PROGRAM PENGENDALIAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.02",
    "nama_program": "PROGRAM PENGENDALIAN PENDUDUK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.03",
    "nama_program": "PROGRAM PEMBINAAN KELUARGA BERENCANA (KB)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENINGKATAN KELUARGA SEJAHTERA (KS)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.14",
    "kode_program": "2.14.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.02",
    "nama_program": "PROGRAM PENYELENGGARAAN LALU LINTAS DAN ANGKUTAN JALAN (LLAJ)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.15",
    "kode_program": "2.15.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.02",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI DAN KOMUNIKASI PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.02",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI DAN KOMUNIKASI PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.02",
    "nama_program": "PROGRAM PENGELOLAAN INFORMASI DAN KOMUNIKASI PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.03",
    "nama_program": "PROGRAM PENGELOLAAN APLIKASI INFORMATIKA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.03",
    "nama_program": "PROGRAM PENGELOLAAN APLIKASI INFORMATIKA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.03",
    "nama_program": "PROGRAM PENGELOLAAN APLIKASI INFORMATIKA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.03",
    "nama_program": "PROGRAM PENGELOLAAN APLIKASI INFORMATIKA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.16",
    "kode_program": "2.16.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.20",
    "kode_program": "2.20.02",
    "nama_program": "PROGRAM PENYELENGGARAAN STATISTIK SEKTORAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.20",
    "kode_program": "2.20.02",
    "nama_program": "PROGRAM PENYELENGGARAAN STATISTIK SEKTORAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.20",
    "kode_program": "2.20.02",
    "nama_program": "PROGRAM PENYELENGGARAAN STATISTIK SEKTORAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.21",
    "kode_program": "2.21.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PERSANDIAN UNTUK PENGAMANAN INFORMASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.21",
    "kode_program": "2.21.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PERSANDIAN UNTUK PENGAMANAN INFORMASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.21",
    "kode_program": "2.21.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PERSANDIAN UNTUK PENGAMANAN INFORMASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.02",
    "nama_program": "PROGRAM PELAYANAN IZIN USAHA SIMPAN PINJAM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.03",
    "nama_program": "PROGRAM PENGAWASAN DAN PEMERIKSAAN KOPERASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.03",
    "nama_program": "PROGRAM PENGAWASAN DAN PEMERIKSAAN KOPERASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.04",
    "nama_program": "PROGRAM PENILAIAN KESEHATAN KSP/USP KOPERASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.05",
    "nama_program": "PROGRAM PENDIDIKAN DAN LATIHAN PERKOPERASIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.06",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PERLINDUNGAN KOPERASI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.07",
    "nama_program": "PROGRAM PEMBERDAYAAN USAHA MENENGAH, USAHA KECIL, DAN USAHA MIKRO (UMKM)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.07",
    "nama_program": "PROGRAM PEMBERDAYAAN USAHA MENENGAH, USAHA KECIL, DAN USAHA MIKRO (UMKM)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.07",
    "nama_program": "PROGRAM PEMBERDAYAAN USAHA MENENGAH, USAHA KECIL, DAN USAHA MIKRO (UMKM)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.07",
    "nama_program": "PROGRAM PEMBERDAYAAN USAHA MENENGAH, USAHA KECIL, DAN USAHA MIKRO (UMKM)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.07",
    "nama_program": "PROGRAM PEMBERDAYAAN USAHA MENENGAH, USAHA KECIL, DAN USAHA MIKRO (UMKM)"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.08",
    "nama_program": "PROGRAM PENGEMBANGAN UMKM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.17",
    "kode_program": "2.17.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.02",
    "nama_program": "PROGRAM PERIZINAN DAN PENDAFTARAN PERUSAHAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.02",
    "nama_program": "PROGRAM PERIZINAN DAN PENDAFTARAN PERUSAHAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.02",
    "nama_program": "PROGRAM PERIZINAN DAN PENDAFTARAN PERUSAHAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.03",
    "nama_program": "PROGRAM PENINGKATAN SARANA DISTRIBUSI PERDAGANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.03",
    "nama_program": "PROGRAM PENINGKATAN SARANA DISTRIBUSI PERDAGANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.03",
    "nama_program": "PROGRAM PENINGKATAN SARANA DISTRIBUSI PERDAGANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.03",
    "nama_program": "PROGRAM PENINGKATAN SARANA DISTRIBUSI PERDAGANGAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.04",
    "nama_program": "PROGRAM STABILISASI HARGA BARANG KEBUTUHAN POKOK DAN BARANG PENTING"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.04",
    "nama_program": "PROGRAM STABILISASI HARGA BARANG KEBUTUHAN POKOK DAN BARANG PENTING"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.04",
    "nama_program": "PROGRAM STABILISASI HARGA BARANG KEBUTUHAN POKOK DAN BARANG PENTING"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.04",
    "nama_program": "PROGRAM STABILISASI HARGA BARANG KEBUTUHAN POKOK DAN BARANG PENTING"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.04",
    "nama_program": "PROGRAM STABILISASI HARGA BARANG KEBUTUHAN POKOK DAN BARANG PENTING"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.05",
    "nama_program": "PROGRAM PENGEMBANGAN EKSPOR"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.05",
    "nama_program": "PROGRAM PENGEMBANGAN EKSPOR"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.06",
    "nama_program": "PROGRAM STANDARDISASI DAN PERLINDUNGAN KONSUMEN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.06",
    "nama_program": "PROGRAM STANDARDISASI DAN PERLINDUNGAN KONSUMEN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.07",
    "nama_program": "PROGRAM PENGGUNAAN DAN PEMASARAN PRODUK DALAM NEGERI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.30",
    "kode_program": "3.30.07",
    "nama_program": "PROGRAM PENGGUNAAN DAN PEMASARAN PRODUK DALAM NEGERI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.02",
    "nama_program": "PROGRAM PENGEMBANGAN IKLIM PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.02",
    "nama_program": "PROGRAM PENGEMBANGAN IKLIM PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.02",
    "nama_program": "PROGRAM PENGEMBANGAN IKLIM PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.03",
    "nama_program": "PROGRAM PROMOSI PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.03",
    "nama_program": "PROGRAM PROMOSI PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.04",
    "nama_program": "PROGRAM PELAYANAN PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.04",
    "nama_program": "PROGRAM PELAYANAN PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.05",
    "nama_program": "PROGRAM PENGENDALIAN PELAKSANAAN PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.05",
    "nama_program": "PROGRAM PENGENDALIAN PELAKSANAAN PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.05",
    "nama_program": "PROGRAM PENGENDALIAN PELAKSANAAN PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.06",
    "nama_program": "PROGRAM PENGELOLAAN DATA DAN SISTEM INFORMASI PENANAMAN MODAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.18",
    "kode_program": "2.18.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.02",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEPEMUDAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.02",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEPEMUDAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.02",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEPEMUDAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.03",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEOLAHRAGAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.03",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEOLAHRAGAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.03",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEOLAHRAGAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.03",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEOLAHRAGAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.03",
    "nama_program": "PROGRAM PENGEMBANGAN KAPASITAS DAYA SAING KEOLAHRAGAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.19",
    "kode_program": "2.19.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.02",
    "nama_program": "PROGRAM PENINGKATAN DAYA TARIK DESTINASI PARIWISATA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.02",
    "nama_program": "PROGRAM PENINGKATAN DAYA TARIK DESTINASI PARIWISATA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.02",
    "nama_program": "PROGRAM PENINGKATAN DAYA TARIK DESTINASI PARIWISATA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.03",
    "nama_program": "PROGRAM PEMASARAN PARIWISATA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.03",
    "nama_program": "PROGRAM PEMASARAN PARIWISATA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.05",
    "nama_program": "PROGRAM PENGEMBANGAN SUMBER DAYA PARIWISATA DAN EKONOMI KREATIF"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.26",
    "kode_program": "3.26.05",
    "nama_program": "PROGRAM PENGEMBANGAN SUMBER DAYA PARIWISATA DAN EKONOMI KREATIF"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.02",
    "nama_program": "PROGRAM PEMBINAAN PERPUSTAKAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.23",
    "kode_program": "2.23.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.02",
    "nama_program": "PROGRAM PENGELOLAAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.02",
    "nama_program": "PROGRAM PENGELOLAAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.02",
    "nama_program": "PROGRAM PENGELOLAAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.02",
    "nama_program": "PROGRAM PENGELOLAAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.02",
    "nama_program": "PROGRAM PENGELOLAAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.02",
    "nama_program": "PROGRAM PENGELOLAAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.03",
    "nama_program": "PROGRAM PERLINDUNGAN DAN PENYELAMATAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.03",
    "nama_program": "PROGRAM PERLINDUNGAN DAN PENYELAMATAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.03",
    "nama_program": "PROGRAM PERLINDUNGAN DAN PENYELAMATAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.03",
    "nama_program": "PROGRAM PERLINDUNGAN DAN PENYELAMATAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "2.24",
    "kode_program": "2.24.03",
    "nama_program": "PROGRAM PERLINDUNGAN DAN PENYELAMATAN ARSIP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.25",
    "kode_program": "3.25.03",
    "nama_program": "PROGRAM PENGELOLAAN PERIKANAN TANGKAP"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.25",
    "kode_program": "3.25.04",
    "nama_program": "PROGRAM PENGELOLAAN PERIKANAN BUDIDAYA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.25",
    "kode_program": "3.25.06",
    "nama_program": "PROGRAM PENGOLAHAN DAN PEMASARAN HASIL PERIKANAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.02",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN SARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.02",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN SARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.03",
    "nama_program": "PROGRAM PENYEDIAAN DAN PENGEMBANGAN PRASARANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.05",
    "nama_program": "PROGRAM PENGENDALIAN DAN PENANGGULANGAN BENCANA PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.07",
    "nama_program": "PROGRAM PENYULUHAN PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.07",
    "nama_program": "PROGRAM PENYULUHAN PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.07",
    "nama_program": "PROGRAM PENYULUHAN PERTANIAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "3.27",
    "kode_program": "3.27.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.02",
    "nama_program": "PROGRAM PEMERINTAHAN DAN KESEJAHTERAAN RAKYAT"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.03",
    "nama_program": "PROGRAM PEREKONOMIAN DAN PEMBANGUNAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.01",
    "kode_program": "4.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.02",
    "nama_program": "PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "4.02",
    "kode_program": "4.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.02",
    "nama_program": "PROGRAM PERENCANAAN, PENGENDALIAN DAN EVALUASI PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.03",
    "nama_program": "PROGRAM KOORDINASI DAN SINKRONISASI PERENCANAAN PEMBANGUNAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.01",
    "kode_program": "5.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.05",
    "kode_program": "5.05.02",
    "nama_program": "PROGRAM PENELITIAN DAN PENGEMBANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.05",
    "kode_program": "5.05.02",
    "nama_program": "PROGRAM PENELITIAN DAN PENGEMBANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.05",
    "kode_program": "5.05.02",
    "nama_program": "PROGRAM PENELITIAN DAN PENGEMBANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.05",
    "kode_program": "5.05.02",
    "nama_program": "PROGRAM PENELITIAN DAN PENGEMBANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.05",
    "kode_program": "5.05.02",
    "nama_program": "PROGRAM PENELITIAN DAN PENGEMBANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.05",
    "kode_program": "5.05.02",
    "nama_program": "PROGRAM PENELITIAN DAN PENGEMBANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.02",
    "nama_program": "PROGRAM PENGELOLAAN KEUANGAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.03",
    "nama_program": "PROGRAM PENGELOLAAN BARANG MILIK DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.03",
    "nama_program": "PROGRAM PENGELOLAAN BARANG MILIK DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.03",
    "nama_program": "PROGRAM PENGELOLAAN BARANG MILIK DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.03",
    "nama_program": "PROGRAM PENGELOLAAN BARANG MILIK DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.04",
    "nama_program": "PROGRAM PENGELOLAAN PENDAPATAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.02",
    "kode_program": "5.02.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "5.02.03",
    "nama_program": "PROGRAM PENGELOLAAN BARANG MILIK DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.02",
    "nama_program": "PROGRAM KEPEGAWAIAN DAERAH"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.03",
    "kode_program": "5.03.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.04",
    "kode_program": "5.04.02",
    "nama_program": "PROGRAM PENGEMBANGAN SUMBER DAYA MANUSIA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "5.04",
    "kode_program": "5.04.02",
    "nama_program": "PROGRAM PENGEMBANGAN SUMBER DAYA MANUSIA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PENGAWASAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.03",
    "nama_program": "PROGRAM PERUMUSAN KEBIJAKAN, PENDAMPINGAN DAN ASISTENSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.03",
    "nama_program": "PROGRAM PERUMUSAN KEBIJAKAN, PENDAMPINGAN DAN ASISTENSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.03",
    "nama_program": "PROGRAM PERUMUSAN KEBIJAKAN, PENDAMPINGAN DAN ASISTENSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.03",
    "nama_program": "PROGRAM PERUMUSAN KEBIJAKAN, PENDAMPINGAN DAN ASISTENSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.03",
    "nama_program": "PROGRAM PERUMUSAN KEBIJAKAN, PENDAMPINGAN DAN ASISTENSI"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "6.01",
    "kode_program": "6.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "X.XX",
    "kode_program": "X.XX.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.02",
    "nama_program": "PROGRAM PENYELENGGARAAN PEMERINTAHAN DAN PELAYANAN PUBLIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.03",
    "nama_program": "PROGRAM PEMBERDAYAAN MASYARAKAT DESA DAN KELURAHAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.04",
    "nama_program": "PROGRAM KOORDINASI KETENTRAMAN DAN KETERTIBAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.05",
    "nama_program": "PROGRAM PENYELENGGARAAN URUSAN PEMERINTAHAN UMUM"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.06",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGAWASAN PEMERINTAHAN DESA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "7.01",
    "kode_program": "7.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.02",
    "nama_program": "PROGRAM PENGUATAN IDEOLOGI PANCASILA DAN KARAKTER KEBANGSAAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.03",
    "nama_program": "PROGRAM PENINGKATAN PERAN PARTAI POLITIK DAN LEMBAGA PENDIDIKAN MELALUI PENDIDIKAN POLITIK DAN PENGEMBANGAN ETIKA SERTA BUDAYA POLITIK"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.04",
    "nama_program": "PROGRAM PEMBERDAYAAN DAN PENGAWASAN ORGANISASI KEMASYARAKATAN"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.05",
    "nama_program": "PROGRAM PEMBINAAN DAN PENGEMBANGAN KETAHANAN EKONOMI, SOSIAL, DAN BUDAYA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.06",
    "nama_program": "PROGRAM PENINGKATAN KEWASPADAAN NASIONAL DAN PENINGKATAN KUALITAS DAN FASILITASI PENANGANAN KONFLIK SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.06",
    "nama_program": "PROGRAM PENINGKATAN KEWASPADAAN NASIONAL DAN PENINGKATAN KUALITAS DAN FASILITASI PENANGANAN KONFLIK SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.06",
    "nama_program": "PROGRAM PENINGKATAN KEWASPADAAN NASIONAL DAN PENINGKATAN KUALITAS DAN FASILITASI PENANGANAN KONFLIK SOSIAL"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  },
  {
    "tahun": 2024,
    "kode_bidang_urusan": "8.01",
    "kode_program": "8.01.01",
    "nama_program": "PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const uniqueData = data.reduce((acc, current) => {
      const x = acc.find(item => item.kode_program === current.kode_program);
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

    await queryInterface.bulkInsert('Programs', uniqueData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Programs', null, {});
  }
};
