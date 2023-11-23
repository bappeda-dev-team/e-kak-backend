const { Sub_Unit } = require('../models');

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

  }
}

module.exports = OPDController;