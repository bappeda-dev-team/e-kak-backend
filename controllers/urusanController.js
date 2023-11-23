const { Urusan, Bidang_Urusan, Sub_Unit } = require('../models');
const { Op } = require("sequelize");

class UrusanController {
  static getAllUrusanOPD = async (req, res) => {
    try {
      const resOPD = await Sub_Unit.findAll({
        order: [['kode_sub_unit', 'ASC']],
        attributes: ['kode_sub_unit', 'nama_sub_unit'],
      })

      const resUrusan = await Urusan.findAll({
        order: [['kode_urusan', 'ASC']],
        attributes: ['kode_urusan', 'nama_urusan'],
        include: [
          {
            model: Bidang_Urusan,
            attributes: ['kode_bidang_urusan', 'nama_bidang_urusan']
          }
        ]
      })

      let temp = [];

      resOPD.forEach(item1 => {
        let matchingData2 = resUrusan.find(item2 => {
          let kodeSubUnitPart = item1.dataValues.kode_sub_unit.split('.').slice(0, 2).join('.');
          let kodeSubUnitPart2 = item1.dataValues.kode_sub_unit.split('.').slice(2, 4).join('.');
          const let1 = item2.Bidang_Urusans.some(bidang => bidang.dataValues.kode_bidang_urusan === kodeSubUnitPart);
          const let2 = item2.Bidang_Urusans.some(bidang => bidang.dataValues.kode_bidang_urusan === kodeSubUnitPart2);
          item2.Bidang_Urusans.some(bidang => {
            console.log(bidang.dataValues.kode_bidang_urusan, '<<< awal', kodeSubUnitPart2, '<<< akhir');
          })
          return { let1, let2 }
        });

        if (matchingData2) {

          let urusanOPD = {
            kode_urusan: matchingData2.dataValues.kode_urusan,
            nama_urusan: matchingData2.dataValues.nama_urusan,
            Bidang_Urusans: matchingData2.Bidang_Urusans.filter(el => el.dataValues.kode_bidang_urusan === item1.dataValues.kode_sub_unit.split('.').slice(0, 2).join('.'))
          };

          temp.push({
            kode_sub_unit: item1.dataValues.kode_sub_unit,
            nama_sub_unit: item1.dataValues.nama_sub_unit,
            urusan: [urusanOPD]
          });
        }
      });

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: temp
        }
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        data: {
          code: 500,
          message: 'Internal server error',
          data: err
        }
      })
    }
  }
}

// let data1 = [
//   {
//     "kode_sub_unit": "1.02.0.00.0.00.01.0000",
//     "nama_sub_unit": "Dinas Kesehatan"
//   },
//   {
//     "kode_sub_unit": "1.05.0.00.0.00.03.0000",
//     "nama_sub_unit": "Badan Penanggulangan Bencana Daerah"
//   }
// ]

// let data2 = [
//   {
//     "kode_urusan": "1",
//     "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG BERKAITAN DENGAN PELAYANAN DASAR",
//     "Bidang_Urusans": [
//       {
//         "kode_bidang_urusan": "1.02",
//         "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
//       },
//       {
//         "kode_bidang_urusan": "1.05",
//         "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
//       },
//     ]
//   },
//   {
//     "kode_urusan": "2",
//     "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR",
//     "Bidang_Urusans": [
//       {
//         "kode_bidang_urusan": "2.19",
//         "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA"
//       },
//       {
//         "kode_bidang_urusan": "2.22",
//         "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN"
//       },
//     ]
//   }
// ]

// let res = [
//   {
//     "kode_sub_unit": "1.02.0.00.0.00.01.0000",
//     "nama_sub_unit": "Dinas Kesehatan",
//     "urusan": [
//       {
//         "kode_urusan": "1",
//         "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG BERKAITAN DENGAN PELAYANAN DASAR",
//         "Bidang_Urusans": [
//           {
//             "kode_bidang_urusan": "1.02",
//             "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KESEHATAN"
//           },
//         ]
//       },
//     ]
//   },
//   {
//     "kode_sub_unit": "1.05.0.00.0.00.03.0000",
//     "nama_sub_unit": "Badan Penanggulangan Bencana Daerah",
//     "urusan": [
//       {
//         "kode_urusan": "1",
//         "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG BERKAITAN DENGAN PELAYANAN DASAR",
//         "Bidang_Urusans": [
//           {
//             "kode_bidang_urusan": "1.05",
//             "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT"
//           },
//         ]
//       },
//     ]
//   }
// ]

module.exports = UrusanController;

