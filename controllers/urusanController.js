const { Urusan, Bidang_Urusan, Sub_Unit } = require('../models');
const { Op } = require("sequelize");

class UrusanController {
  static getAllUrusanOPD = async (req, res) => {
    try {
      const response = await Urusan.findAll({
        attributes: ['kode_urusan', 'nama_urusan'],
        order: [['kode_urusan', 'ASC']],
        include: [
          {
            model: Bidang_Urusan,
            attributes: ['kode_bidang_urusan', 'nama_bidang_urusan'],
            order: [['kode_urusan', 'ASC']],
            include: [
              {
                model: Sub_Unit,
                attributes: ['kode_sub_unit', 'nama_sub_unit']
              }
            ]
          }
        ]
      })

      let groupedData = response.reduce((acc, item) => {
        item.Bidang_Urusans.forEach(bidang => {
          if (!acc[bidang.Sub_Unit.kode_sub_unit]) {
            acc[bidang.Sub_Unit.kode_sub_unit] = {
              kode_sub_unit: bidang.Sub_Unit.kode_sub_unit,
              nama_sub_unit: bidang.Sub_Unit.nama_sub_unit,
              Urusans: []
            };
          }

          let foundUrusan = acc[bidang.Sub_Unit.kode_sub_unit].Urusans.find(urs => urs.kode_urusan === item.kode_urusan);
          if (!foundUrusan) {
            acc[bidang.Sub_Unit.kode_sub_unit].Urusans.push({
              kode_urusan: item.kode_urusan,
              nama_urusan: item.nama_urusan,
              Bidang_Urusans: []
            });
            foundUrusan = acc[bidang.Sub_Unit.kode_sub_unit].Urusans[acc[bidang.Sub_Unit.kode_sub_unit].Urusans.length - 1];
          }

          foundUrusan.Bidang_Urusans.push({
            kode_bidang_urusan: bidang.kode_bidang_urusan,
            nama_bidang_urusan: bidang.nama_bidang_urusan
          });
        });

        return acc;
      }, {});

      let groupedArray = Object.values(groupedData);

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: groupedArray
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


    let data1 = [
      {
        "kode_urusan": "2",
        "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR",
        "Bidang_Urusans": [
          {
            "kode_bidang_urusan": "2.16",
            "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA",
            "Sub_Unit": {
              "kode_sub_unit": "2.16.2.20.2.21.01.0000",
              "nama_sub_unit": "Dinas Komunikasi dan Informatika"
            }
          },
          {
            "kode_bidang_urusan": "2.20",
            "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG STATISTIK",
            "Sub_Unit": {
              "kode_sub_unit": "2.16.2.20.2.21.01.0000",
              "nama_sub_unit": "Dinas Komunikasi dan Informatika"
            }
          }
        ]
      },
      {
        "kode_urusan": "3",
        "nama_urusan": "URUSAN PEMERINTAHAN TIDAK WAJIB",
        "Bidang_Urusans": [
          {
            "kode_bidang_urusan": "3.23",
            "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN",
            "Sub_Unit": {
              "kode_sub_unit": "3.23.2.24.0.00.01.0000",
              "nama_sub_unit": "Dinas Perpustakaan dan Kearsipan"
            }
          },
          {
            "kode_bidang_urusan": "3.24",
            "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN",
            "Sub_Unit": {
              "kode_sub_unit": "3.23.2.24.0.00.01.0000",
              "nama_sub_unit": "Dinas Perpustakaan dan Kearsipan"
            }
          },
        ]
      }
    ]

    let data2 = [
      {
        "kode_sub_unit": "2.16.2.20.2.21.01.0000",
        "nama_sub_unit": "Dinas Komunikasi dan Informatika",
        "Urusans": [
          {
            "kode_urusan": "2",
            "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR",
            "Bidang_Urusans": [
              {
                "kode_bidang_urusan": "2.16",
                "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA"
              },
              {
                "kode_bidang_urusan": "2.20",
                "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG STATISTIK"
              }
            ]
          }
        ]
      },
      {
        "kode_sub_unit": "2.23.2.24.0.00.01.0000",
        "nama_sub_unit": "Dinas Perpustakaan dan Kearsipan",
        "Urusans": [
          {
            "kode_urusan": "3",
            "nama_urusan": "URUSAN PEMERINTAHAN TIDAK WAJIB",
            "Bidang_Urusans": [
              {
                "kode_bidang_urusan": "3.23",
                "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN",
              },
              {
                "kode_bidang_urusan": "3.24",
                "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN",
              }
            ]
          }
        ]
      }
    ]

    // try {
    //   const resOPD = await Sub_Unit.findAll({
    //     order: [['kode_sub_unit', 'ASC']],
    //     attributes: ['kode_sub_unit', 'nama_sub_unit'],
    //   })

    //   const resUrusan = await Urusan.findAll({
    //     order: [['kode_urusan', 'ASC']],
    //     attributes: ['kode_urusan', 'nama_urusan'],
    //     include: [
    //       {
    //         model: Bidang_Urusan,
    //         attributes: ['kode_bidang_urusan', 'nama_bidang_urusan']
    //       }
    //     ]
    //   })

    //   let temp = [];

    //   for (let i = 0; resOPD.length; i++) {
    //     let matchingData2 = resUrusan.find(item2 => {
    //       let kodeSubUnitPart = resOPD[i].dataValues.kode_sub_unit.split('.').slice(0, 2).join('.');
    //       let kodeSubUnitPart2 = resOPD[i].dataValues.kode_sub_unit.split('.').slice(2, 4).join('.');
    //       const let1 = item2.Bidang_Urusans.some(bidang => bidang.dataValues.kode_bidang_urusan === kodeSubUnitPart);
    //       const let2 = item2.Bidang_Urusans.some(bidang => bidang.dataValues.kode_bidang_urusan === kodeSubUnitPart2);
    //       // item2.Bidang_Urusans.some(bidang => {
    //       //   console.log(bidang.dataValues.kode_bidang_urusan, '<<< awal', kodeSubUnitPart2, '<<< akhir');
    //       // })
    //       return { let1, let2 }
    //     });

    //     if (matchingData2) {

    //       let urusanOPD = {
    //         kode_urusan: matchingData2.dataValues.kode_urusan,
    //         nama_urusan: matchingData2.dataValues.nama_urusan,
    //         Bidang_Urusans: matchingData2.Bidang_Urusans.filter(el => el.dataValues.kode_bidang_urusan === resOPD[i].dataValues.kode_sub_unit.split('.').slice(0, 2).join('.'))
    //       };

    //       temp.push({
    //         kode_sub_unit: resOPD[i].dataValues.kode_sub_unit,
    //         nama_sub_unit: resOPD[i].dataValues.nama_sub_unit,
    //         urusan: [urusanOPD]
    //       });
    //     }
    //   };

    // res.status(200).json({
    //   success: true,
    //   data: {
    //     code: 200,
    //     message: 'Success',
    //     data: temp
    //   }
    // })
    // } catch (err) {
    //   res.status(500).json({
    //     success: false,
    //     data: {
    //       code: 500,
    //       message: 'Internal server error',
    //       data: err
    //     }
    //   })
    // }
  }

  static getOneDataUrusan = async (req, res) => {
    try {
      const id = req.params.kode_opd.split('.')[0];
      const response = await Urusan.findAll({
        where: { kode_urusan: id },
        attributes: ['kode_urusan', 'nama_urusan'],
        include: [
          {
            model: Bidang_Urusan,
            attributes: ['kode_bidang_urusan', 'nama_bidang_urusan'],
            order: [['kode_urusan', 'ASC']],
            include: [
              {
                model: Sub_Unit,
                attributes: ['kode_sub_unit', 'nama_sub_unit']
              }
            ]
          }
        ]
      })

      let groupedData = response.reduce((acc, item) => {
        item.Bidang_Urusans.forEach(bidang => {
          if (!acc[bidang.Sub_Unit.kode_sub_unit]) {
            acc[bidang.Sub_Unit.kode_sub_unit] = {
              kode_sub_unit: bidang.Sub_Unit.kode_sub_unit,
              nama_sub_unit: bidang.Sub_Unit.nama_sub_unit,
              Urusans: []
            };
          }

          let foundUrusan = acc[bidang.Sub_Unit.kode_sub_unit].Urusans.find(urs => urs.kode_urusan === item.kode_urusan);
          if (!foundUrusan) {
            acc[bidang.Sub_Unit.kode_sub_unit].Urusans.push({
              kode_urusan: item.kode_urusan,
              nama_urusan: item.nama_urusan,
              Bidang_Urusans: []
            });
            foundUrusan = acc[bidang.Sub_Unit.kode_sub_unit].Urusans[acc[bidang.Sub_Unit.kode_sub_unit].Urusans.length - 1];
          }

          foundUrusan.Bidang_Urusans.push({
            kode_bidang_urusan: bidang.kode_bidang_urusan,
            nama_bidang_urusan: bidang.nama_bidang_urusan
          });
        });

        return acc;
      }, {});

      let groupedArray = Object.values(groupedData);

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: groupedArray
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

module.exports = UrusanController;

