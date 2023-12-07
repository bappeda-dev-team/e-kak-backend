const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const TematikController = require('../controllers/tematikController');

router.use(authenticate);
router.get('/getAllTematik', TematikController.getAllTematik);
router.post('/addTematik', TematikController.addTematik);
router.put('/editTematik/:id', TematikController.editTematik);

module.exports = router;