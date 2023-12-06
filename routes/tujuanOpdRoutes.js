const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const TujuanOPD = require('../controllers/tujuanOpdController');

router.use(authenticate);
router.get('/getAllTujuanOPD/:kode_opd', TujuanOPD.getAllTujuan);
router.post('/addTujuanOPD', TujuanOPD.addTujuan);

module.exports = router;