const { Tematik, Sub_Tematik, Indikator_Tematik } = require('../models');

class TematikController {
  static getAllTematik = async (req, res) => {
    try {
      const response = await Tematik.findAll({
        order: [['createdAt', 'ASC']],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [{
          model: Indikator_Tematik,
          as: 'indikator',
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }]
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

  static getOneTematik = async (req, res) => {
    try {
      const response = await Tematik.findOne({
        where: { id: req.params.id }
      })

      if (response === null) {
        res.status(404).json({
          success: false,
          data: {
            code: 404,
            message: "ID Tematik tidak ditemukan!",
            data: response,
          },
        });
      } else {
        res.status(200).json({
          success: true,
          data: {
            code: 200,
            message: "Success",
            data: response,
          },
        });
      }
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

  static addTematik = (req, res) => {
    Tematik.create({
      tematik: req.body.tematik,
      keterangan: req.body.keterangan,
      tahun: req.body.tahun
    })
      .then(data => {
        req.body.indikator.forEach(el => {
          el.id_tematik = data.id
        })
        Indikator_Tematik.bulkCreate(req.body.indikator)
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

  static editTematik = (req, res) => {
    Tematik.update({
      tematik: req.body.tematik,
      keterangan: req.body.keterangan
    }, {
      where: { id: req.params.id }
    })
      .then(async () => {
        try {
          let updatePromises = [];

          req.body.indikator.forEach(item => {
            const updatePromise = new Promise(async (resolve, reject) => {
              try {
                await Indikator_Tematik.update({
                  indikator: item.indikator,
                  target: item.target,
                  satuan: item.satuan,
                  tahun: item.tahun,
                }, {
                  where: { id: item.id },
                  returning: true
                })

                await Indikator_Tematik.destroy({
                  where: { id: req.body.idIndikator },
                  returning: true
                });

                resolve();
              } catch (error) {
                reject(error)
              }
            })
            updatePromises.push(updatePromise);
          })
          await Promise.all(updatePromises);

          res.status(200).json({
            success: true,
            data: {
              code: 200,
              message: 'Success',
              data: 'Update tematik successfully'
            }
          })
        } catch (err2) {
          res.status(500).json({
            success: false,
            data: {
              code: 500,
              message: 'Internal server error',
              data: err2
            }
          })
        }
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

  static deleteTematik = (req, res) => {
    Indikator_Tematik.destroy({
      where: { id_tematik: req.params.id },
      returning: true
    })
      .then(_ => {
        Tematik.destroy({
          where: { id: req.params.id },
          returning: true
        })
          .then(response => {
            res.status(200).json({
              success: true,
              data: {
                code: 200,
                message: 'Success',
                data: response
              }
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
      })
  }

  static getAllTematikWithSub = async (req, res) => {
    try {
      const response = await Tematik.findAll({
        order: [['createdAt', 'ASC']],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [{
          model: Sub_Tematik,
          as: 'sub_tematik',
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
          include: [{
            model: Indikator_Tematik,
            as: 'indikator',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }]
        }]
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

  static addSubTematik = (req, res) => {
    if (req.body.id_tematik) {
      Sub_Tematik.create({
        sub_tematik: req.body.sub_tematik,
        keterangan: req.body.keterangan,
        id_tematik: req.body.id_tematik
      })
        .then(data => {
          req.body.indikator.forEach(el => {
            el.id_sub_tematik = data.id
          })
          Indikator_Tematik.bulkCreate(req.body.indikator)
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
}

module.exports = TematikController;