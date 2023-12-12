const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const PokinController = require('../controllers/pokinController');

router.use(authenticate);
router.get('/getPokin/:kode_opd', PokinController.getPokin);
router.post('/addStrategic', PokinController.addStrategic);
router.post('/addTactical', PokinController.addTactical);
router.post('/addOperational', PokinController.addOperational);
router.post('/addStaff', PokinController.addStaff);

module.exports = router;