const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const UrusanController = require('../controllers/urusanController');

router.use(authenticate);
router.get('/getAllUrusan', UrusanController.getAllUrusanOPD);

module.exports = router;