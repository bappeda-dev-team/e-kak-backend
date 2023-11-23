const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const OPDController = require('../controllers/opdController');

router.use(authenticate);
router.get('/getAllOPD', OPDController.getAllOPD);

module.exports = router;