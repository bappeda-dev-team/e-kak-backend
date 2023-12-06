'use strict';

const data = [
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "1.01",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENDIDIKAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.01.2.22.0.00.01.0000",
    "kode_bidang_urusan": "2.22",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0028",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0028",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0028",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0028",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0027",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0001",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0025",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0002",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0003",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0026",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0004",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0023",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0006",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0009",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0014",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0020",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0015",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0005",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0007",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0008",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0018",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0010",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0024",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0022",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0017",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0021",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0012",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0016",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0013",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0019",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.02.0.00.0.00.01.0011",
    "kode_bidang_urusan": "1.02",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "1.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.03.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.03",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "1.04",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "1.04.2.10.0.00.01.0000",
    "kode_bidang_urusan": "2.10",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANAHAN"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.02.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.05.0.00.0.00.03.0000",
    "kode_bidang_urusan": "1.05",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "1",
    "kode_sub_unit": "1.06.0.00.0.00.01.0000",
    "kode_bidang_urusan": "1.06",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG SOSIAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "2.07",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TENAGA KERJA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "3.31",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERINDUSTRIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "3.31",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERINDUSTRIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "3.31",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERINDUSTRIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "3.32",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TRANSMIGRASI"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.07.3.31.3.32.01.0000",
    "kode_bidang_urusan": "3.32",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG TRANSMIGRASI"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "2.09",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.09.3.27.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.11.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.11",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.12.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.12",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.13.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.13",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.08",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PERLINDUNGAN ANAK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.14.2.08.0.00.01.0000",
    "kode_bidang_urusan": "2.14",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.15.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.15",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.16",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.20",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG STATISTIK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.20",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG STATISTIK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.20",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG STATISTIK"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.21",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERSANDIAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.21",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERSANDIAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.16.2.20.2.21.01.0000",
    "kode_bidang_urusan": "2.21",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERSANDIAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "2.17",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.17.3.30.0.00.01.0000",
    "kode_bidang_urusan": "3.30",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERDAGANGAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.18.0.00.0.00.01.0000",
    "kode_bidang_urusan": "2.18",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "2.19",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "3.26",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PARIWISATA"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "2.19.3.26.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.23",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "2",
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "kode_bidang_urusan": "2.24",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.25",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KELAUTAN  DAN PERIKANAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.25",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KELAUTAN  DAN PERIKANAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.25",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KELAUTAN  DAN PERIKANAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "3",
    "kode_sub_unit": "3.27.3.25.0.00.01.0000",
    "kode_bidang_urusan": "3.27",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERTANIAN"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0001",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0001",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0001",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0005",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0002",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0002",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0002",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0001",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0001",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0006",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0006",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0010",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0010",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0010",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0003",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0003",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0003",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0006",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0006",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0007",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0008",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0008",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0008",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0008",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0008",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.01.5.06.0.00.03.0009",
    "kode_bidang_urusan": "4.01",
    "nama_bidang_urusan": "SEKRETARIAT DAERAH"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "4",
    "kode_sub_unit": "4.02.0.00.0.00.04.0000",
    "kode_bidang_urusan": "4.02",
    "nama_bidang_urusan": "SEKRETARIAT DPRD"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.01",
    "nama_bidang_urusan": "PERENCANAAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "5.05",
    "nama_bidang_urusan": "PENELITIAN DAN PENGEMBANGAN"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.01.5.05.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.02.0.00.0.00.01.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "5.02",
    "nama_bidang_urusan": "KEUANGAN"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "5.02.0.00.0.00.02.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.03",
    "nama_bidang_urusan": "KEPEGAWAIAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.04",
    "nama_bidang_urusan": "PENDIDIKAN DAN PELATIHAN"
  },
  {
    "kode_urusan": "5",
    "kode_sub_unit": "5.03.5.04.0.00.01.0000",
    "kode_bidang_urusan": "5.04",
    "nama_bidang_urusan": "PENDIDIKAN DAN PELATIHAN"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "6",
    "kode_sub_unit": "6.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "6.01",
    "nama_bidang_urusan": "INSPEKTORAT DAERAH"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.05.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "7.01.0.00.0.00.06.0000",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.07.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.08.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.09.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.10.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.11.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.12.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.13.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0003",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.14.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "X",
    "kode_sub_unit": "7.01.0.00.0.00.14.0002",
    "kode_bidang_urusan": "X.XX",
    "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG XX"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.15.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.16.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.17.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0002",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.18.0001",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "7",
    "kode_sub_unit": "7.01.0.00.0.00.19.0000",
    "kode_bidang_urusan": "7.01",
    "nama_bidang_urusan": "KECAMATAN"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  },
  {
    "kode_urusan": "8",
    "kode_sub_unit": "8.01.0.00.0.00.01.0000",
    "kode_bidang_urusan": "8.01",
    "nama_bidang_urusan": "KESATUAN BANGSA DAN POLITIK"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const uniqueData = data.reduce((acc, current) => {
      const x = acc.find(item => item.kode_bidang_urusan === current.kode_bidang_urusan);
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

    await queryInterface.bulkInsert('Bidang_Urusans', uniqueData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bidang_Urusans', null, {});
  }
};
