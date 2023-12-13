const { Sub_Unit, Tematik, Sub_Tematik, Sub_Sub_Tematik, Strategic_Kota, Tactical_Kota, Operational_Kota, Staff_Kota, Indikator_Pokin_Kota, Indikator_Tematik } = require('../models');

class PokinKotaController {
  static getPokin = async (req, res) => {
    try {
      const response = await Tematik.findOne({
        where: { id: req.params.id_tematik },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: Indikator_Tematik,
            as: 'indikator',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          },
          {
            model: Sub_Tematik,
            as: 'sub_tematik',
            order: [['createdAt', 'ASC']],
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            include: [
              {
                model: Indikator_Tematik,
                as: 'indikator',
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                }
              }
              // {
              //   model: Sub_Sub_Tematik,
              //   as: 'sub_sub_tematik',
              //   attributes: {
              //     exclude: ['createdAt', 'updatedAt']
              //   },
              //   include: [
              //     {
              //       model: Indikator_Tematik,
              //       as: 'indikator',
              //       attributes: {
              //         exclude: ['createdAt', 'updatedAt']
              //       }
              //     },
              //     {
              //       model: Strategic_Kota,
              //       as: 'strategic',
              //       attributes: {
              //         exclude: ['createdAt', 'updatedAt']
              //       },
              //       include: [
              //         {
              //           model: Sub_Unit,
              //           attributes: ['nama_sub_unit']
              //         },
              //         {
              //           model: Indikator_Pokin_Kota,
              //           as: 'indikator',
              //           attributes: {
              //             exclude: ['createdAt', 'updatedAt']
              //           }
              //         },
              //         {
              //           model: Tactical_Kota,
              //           as: 'tactical',
              //           attributes: {
              //             exclude: ['createdAt', 'updatedAt']
              //           },
              //           include: [
              //             {
              //               model: Indikator_Pokin_Kota,
              //               as: 'indikator',
              //               attributes: {
              //                 exclude: ['createdAt', 'updatedAt']
              //               }
              //             },
              //             {
              //               model: Operational_Kota,
              //               as: 'operational',
              //               attributes: {
              //                 exclude: ['createdAt', 'updatedAt']
              //               },
              //               include: [
              //                 {
              //                   model: Indikator_Pokin_Kota,
              //                   as: 'indikator',
              //                   attributes: {
              //                     exclude: ['createdAt', 'updatedAt']
              //                   }
              //                 },
              //                 {
              //                   model: Staff_Kota,
              //                   as: 'staff',
              //                   attributes: {
              //                     exclude: ['createdAt', 'updatedAt']
              //                   },
              //                   include: [
              //                     {
              //                       model: Indikator_Pokin_Kota,
              //                       as: 'indikator',
              //                       attributes: {
              //                         exclude: ['createdAt', 'updatedAt']
              //                       }
              //                     }
              //                   ]
              //                 }
              //               ]
              //             }
              //           ]
              //         }
              //       ]
              //     },
              //   ]
              // },
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

module.exports = PokinKotaController;