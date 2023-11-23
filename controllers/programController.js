const { Program, Kegiatan, Sub_Kegiatan, Indikator, Bidang_Urusan } = require('../models');
const { Op } = require("sequelize");

class ProgramController {
  static getPrograms = async (req, res) => {
    try {
      const kode_bidang_urusan = req.params.kode_opd.match(/\d+\.\d+/);
      const tahun = req.params.tahun;

      const response = await Bidang_Urusan.findAll({
        where: { kode_bidang_urusan: kode_bidang_urusan },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: Program,
            where: { tahun: tahun },
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            include: [
              {
                model: Kegiatan,
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
                include: [
                  {
                    model: Sub_Kegiatan,
                    attributes: {
                      exclude: ['createdAt', 'updatedAt']
                    },
                    include: [
                      {
                        model: Indikator,
                        attributes: {
                          exclude: ['createdAt', 'updatedAt']
                        },
                      }
                    ]
                  },
                  {
                    model: Indikator,
                    attributes: {
                      exclude: ['createdAt', 'updatedAt']
                    },
                  }
                ]
              },
              {
                model: Indikator,
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
              }
            ]
          }
        ]
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
          data: err
        }
      })
    }
  }
}

module.exports = ProgramController;