const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const ProgramController = require('../controllers/programController');

router.use(authenticate);
router.get('/getAllProgram/:kode_opd/:tahun', ProgramController.getPrograms);

module.exports = router;