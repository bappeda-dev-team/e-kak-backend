const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const UrusanController = require('../controllers/urusanController');

// router.use(authenticate);
router.get('/getAllUrusan', UrusanController.getAllUrusanOPD);
router.get('/getUrusan/:kode_opd', UrusanController.getOneDataUrusan);

module.exports = router;