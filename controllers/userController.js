const { User, Sub_Unit, Perangkat_Daerah, Role } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { Op } = require("sequelize");

class UserController {
  static login = async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          [Op.or]: [
            { nip: req.body.nip },
            { email: req.body.nip }
          ]
        },
        include: [
          {
            model: Role,
            attributes: ['nama_role']
          },
          {
            model: Sub_Unit,
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            include: [
              {
                model: Perangkat_Daerah,
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
              },
            ]
          }
        ]
      })

      if (!user) {
        res.status(404).json({
          success: false,
          data: {
            code: 404,
            message: 'NIP tidak ditemukan'
          }
        })
      } else {
        const comparedPassword = comparePassword(req.body.password, user.dataValues.password);

        if (!comparedPassword) {
          res.status(400).json({
            success: false,
            data: {
              code: 400,
              message: 'Password yang Anda masukkan salah'
            }
          })
        } else {
          const access_token = generateToken({
            id: user.id,
            nama: user.nama,
            nip: user.nip,
            email: user.email,
            pangkat: user.pangkat,
            golongan: user.golongan,
            eselon: user.eselon,
            role: user.Roles,
            opd: user.Sub_Unit
          })

          res.status(200).json({
            success: true,
            data: {
              code: 200,
              message: "Success",
              data: {
                access_token
              }
            }
          })
        }
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        data: {
          code: 500,
          message: "Internet server error",
          data: err.message
        }
      })
    }
  }

  static getProfile = async (req, res) => {
    try {
      const data = req.decoded;

      res.status(200).json({
        success: true,
        data: {
          code: 200,
          message: 'Success',
          data: data
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

  static getOneUser = async (req, res) => {
    try {
      const response = await User.findOne({
        where: {
          [Op.or]: [
            { nip: req.params.nip },
            { email: req.params.nip }
          ]
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password']
        },
        include: [
          {
            model: Role,
            attributes: ['nama_role']
          },
          {
            model: Sub_Unit,
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            include: [
              {
                model: Perangkat_Daerah,
                attributes: {
                  exclude: ['createdAt', 'updatedAt']
                },
              },
            ]
          }
        ]
      })

      if (response === null) {
        res.status(404).json({
          success: false,
          data: {
            code: 404,
            message: 'ID user tidak ditemukan!',
            data: response
          }
        })
      } else {
        res.status(200).json({
          success: true,
          data: {
            code: 200,
            message: 'Success',
            data: response
          }
        })
      }
    } catch (err) {
      console.log(err.message, '>>> err');
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
}

module.exports = UserController