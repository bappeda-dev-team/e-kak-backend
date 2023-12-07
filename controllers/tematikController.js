const { Tematik, Indikator_Tematik } = require('../models');

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
      console.log(err, '???');
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
      keterangan: req.body.keterangan
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
          const updatePromises = req.body.indikator.map(item => {
            return Indikator_Tematik.update(
              {
                indikator: item.indikator,
                target: item.target,
                satuan: item.satuan,
                tahun: item.tahun,
              },
              {
                where: { id: item.id }
              }
            );
          });
          await Promise.all(updatePromises);

          res.status(200).json({
            success: true,
            data: {
              code: 200,
              message: 'Success',
              data: 'Update successfully'
            }
          })
        } catch (err2) {
          console.log(err2);
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
}

module.exports = TematikController;