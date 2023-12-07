const { Sub_Unit, Tujuan_OPD, Indikator_Tujuan_OPD, Strategic, Tactical, Operational, Indikator_Pohon_Kinerja } = require('../models');

class PokinController {
  static getPokin = async (req, res) => {
    try {
      const response = await Sub_Unit.findOne({
        where: { kode_sub_unit: req.params.kode_opd },
        attributes: ['nama_sub_unit'],
        include: [
          {
            model: Tujuan_OPD,
            as: 'tujuan',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            include: [
              {
                model: Indikator_Tujuan_OPD,
                as: 'indikator_tujuan',
                attributes: {
                  exclude: ['createdAt', 'updatedAt', 'id_tujuan_opd'],
                }
              },
              {
                model: Strategic,
                as: 'strategic',
                attributes: {
                  exclude: ['createdAt', 'updatedAt'],
                },
                include: [
                  {
                    model: Indikator_Pohon_Kinerja,
                    as: 'indikator',
                    attributes: ['id', 'indikator', 'target', 'satuan']
                  },
                  {
                    model: Tactical,
                    as: 'tactical',
                    attributes: {
                      exclude: ['createdAt', 'updatedAt'],
                    },
                    include: [
                      {
                        model: Indikator_Pohon_Kinerja,
                        as: 'indikator',
                        attributes: ['id', 'indikator', 'target', 'satuan']
                      },
                      {
                        model: Operational,
                        as: 'operational',
                        attributes: {
                          exclude: ['createdAt', 'updatedAt'],
                        },
                        include: [
                          {
                            model: Indikator_Pohon_Kinerja,
                            as: 'indikator',
                            attributes: ['id', 'indikator', 'target', 'satuan']
                          }
                        ]
                      }
                    ]
                  }
                ]
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

  static addStrategic = (req, res) => {
    if (req.body.id_tujuan_opd) {
      Strategic.create({
        strategi: req.body.strategi,
        keterangan: req.body.keterangan,
        id_tujuan_opd: req.body.id_tujuan_opd
      })
        .then(res1 => {
          if (req.body.indikator.length != 0) {
            req.body.indikator.forEach(el => {
              el.id_strategic = res1.id
            })

            Indikator_Pohon_Kinerja.bulkCreate(req.body.indikator)
              .then(res2 => {
                res.status(200).json({
                  success: true,
                  data: {
                    code: 200,
                    message: 'Success',
                    data: res2
                  }
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
          } else {
            res.status(200).json({
              success: true,
              data: {
                code: 200,
                message: 'Success',
                data: res1
              }
            })
          }
        })
        .catch(err1 => {
          res.status(500).json({
            success: false,
            data: {
              code: 500,
              message: 'Internal server error',
              data: err1
            }
          })
        })
    } else {
      res.status(400).json({
        success: false,
        data: {
          code: 400,
          message: 'Bad request',
          data: null
        }
      })
    }
  }

  static addTactical = (req, res) => {
    Tactical.create({
      tactical: req.body.tactical,
      keterangan: req.body.keterangan,
      id_strategic: req.body.id_strategic
    })
      .then(data => {
        req.body.indikator.forEach(el => {
          el.id_tactical = data.id
        })

        Indikator_Pohon_Kinerja.bulkCreate(req.body.indikator)
          .then(res2 => {
            res.status(200).json({
              success: true,
              data: {
                code: 200,
                message: 'Success',
                data: res2
              }
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

  static addOperational = (req, res) => {
    Operational.create({
      operational: req.body.operational,
      keterangan: req.body.keterangan,
      id_tactical: req.body.id_tactical
    })
      .then(data => {
        req.body.indikator.forEach(el => {
          el.id_operational = data.id
        })

        Indikator_Pohon_Kinerja.bulkCreate(req.body.indikator)
          .then(res2 => {
            res.status(200).json({
              success: true,
              data: {
                code: 200,
                message: 'Success',
                data: res2
              }
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
        console.log(err, '<<< error 1');
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

module.exports = PokinController;