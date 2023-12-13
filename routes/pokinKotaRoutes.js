const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const PokinKotaController = require('../controllers/pokinKotaController');

router.use(authenticate);
router.get('/getPokinKota/:id_tematik', PokinKotaController.getPokin);

module.exports = router;