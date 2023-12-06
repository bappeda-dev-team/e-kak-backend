const { Sub_Unit, Urusan, Bidang_Urusan } = require('../models');

class OPDController {
  static getAllOPD = async (req, res) => {
    try {
      const response = await Sub_Unit.findAll({
        order: [['kode_opd', 'ASC']]
      })

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: response
        }
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        data: {
          code: 500,
          message: 'Internal server error',
          data: err.message
        }
      })
    }
  }

  static getUrusanOPD = async (req, res) => {
    try {
      const response = await Sub_Unit.findAll({
        where: { kode_sub_unit: req.params.kode_opd },
        attributes: ['kode_sub_unit', 'nama_sub_unit'],
        include: [
          {
            model: Bidang_Urusan,
            attributes: ['kode_bidang_urusan', 'nama_bidang_urusan'],
            include: {
              model: Urusan
            }
          }
        ]
      })

      let groupedData = response.reduce((acc, item) => {
        let existingItem = acc.find(el => el.kode_sub_unit === item.kode_sub_unit);
        if (!existingItem) {
          existingItem = {
            kode_sub_unit: item.kode_sub_unit,
            nama_sub_unit: item.nama_sub_unit,
            Urusans: []
          };
          acc.push(existingItem);
        }

        item.Bidang_Urusans.forEach(bidang => {
          let foundUrusan = existingItem.Urusans.find(urs => urs.kode_urusan === bidang.Urusan.kode_urusan);
          if (!foundUrusan) {
            foundUrusan = {
              kode_urusan: bidang.Urusan.kode_urusan,
              nama_urusan: bidang.Urusan.nama_urusan,
              Bidang_Urusans: []
            };
            existingItem.Urusans.push(foundUrusan);
          }

          foundUrusan.Bidang_Urusans.push({
            kode_bidang_urusan: bidang.kode_bidang_urusan,
            nama_bidang_urusan: bidang.nama_bidang_urusan
          });
        });

        return acc;
      }, []);

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: groupedData
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

let data1 = [
  {
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "nama_sub_unit": "Dinas Perpustakaan dan Kearsipan",
    "Bidang_Urusans": [
      {
        "kode_bidang_urusan": "2.23",
        "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN",
        "Urusan": {
          "kode_urusan": "2",
          "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR",
          "createdAt": "2023-11-23T03:03:14.035Z",
          "updatedAt": "2023-11-23T03:03:14.035Z"
        }
      },
      {
        "kode_bidang_urusan": "2.24",
        "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN",
        "Urusan": {
          "kode_urusan": "2",
          "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR",
          "createdAt": "2023-11-23T03:03:14.035Z",
          "updatedAt": "2023-11-23T03:03:14.035Z"
        }
      }
    ]
  }
]

let data2 = [
  {
    "kode_sub_unit": "2.23.2.24.0.00.01.0000",
    "nama_sub_unit": "Dinas Perpustakaan dan Kearsipan",
    "Urusans": [
      {
        "kode_urusan": "2",
        "nama_urusan": "URUSAN PEMERINTAHAN WAJIB YANG TIDAK BERKAITAN DENGAN PELAYANAN DASAR",
        "Bidang_Urusans": [
          {
            "kode_bidang_urusan": "2.23",
            "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN"
          },
          {
            "kode_bidang_urusan": "2.24",
            "nama_bidang_urusan": "URUSAN PEMERINTAHAN BIDANG KEARSIPAN"
          }
        ]
      }
    ]
  }
]

module.exports = OPDController;