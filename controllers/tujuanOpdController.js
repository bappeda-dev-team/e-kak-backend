const { Tujuan_OPD, Indikator_Tujuan_OPD, Bidang_Urusan, Tujuan_Bidang_Urusan } = require('../models');

class TujuanOPDController {
  static getAllTujuan = async (req, res) => {
    try {
      const response = await Tujuan_OPD.findAll({
        where: {
          kode_sub_unit: req.params.kode_opd
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: [
          {
            model: Indikator_Tujuan_OPD,
            as: 'indikator_tujuan',
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            }
          },
          {
            model: Bidang_Urusan,
            as: 'bidang_urusan',
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            }
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

  static addTujuan = (req, res) => {
    Tujuan_OPD.create({
      tujuan: req.body.tujuan,
      kode_sub_unit: req.body.kode_sub_unit
    })
      .then(data => {
        req.body.indikator.forEach(el => {
          el.id_tujuan_opd = data.id
        })

        Indikator_Tujuan_OPD.bulkCreate(req.body.indikator)
          .then(_ => {
            req.body.kode_bidang_urusan.forEach(el => {
              el.id_tujuan_opd = data.id
            })
            console.log(req.body.kode_bidang_urusan, '>>>');
            Tujuan_Bidang_Urusan.bulkCreate(req.body.kode_bidang_urusan)
              .then(res3 => {
                res.status(200).json({
                  success: true,
                  data: {
                    code: 200,
                    message: 'Success',
                    data: res3
                  }
                })
              })
              .catch(err3 => {
                res.status(500).json({
                  success: false,
                  data: {
                    code: 500,
                    message: 'Internal server error',
                    data: err3
                  }
                })
              })
          })
          .catch(err2 => {
            res.status(500).json({
              success: false,
              data: {
                code: 500,
                message: 'Internal server error',
                data: err2
              }
            })
          })
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          data: {
            code: 500,
            message: 'Internal server error',
            data: err
          }
        })
      })
  }
}

module.exports = TujuanOPDController;