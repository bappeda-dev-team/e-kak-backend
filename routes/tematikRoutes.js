const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const TematikController = require('../controllers/tematikController');

router.use(authenticate);
router.get('/getAllTematik', TematikController.getAllTematik);
router.get('/getTematik/:id', TematikController.getOneTematik);
router.post('/addTematik', TematikController.addTematik);
router.put('/editTematik/:id', TematikController.editTematik);
router.delete('/deleteTematik/:id', TematikController.deleteTematik);
router.get('/getAllSubTematik', TematikController.getAllTematikWithSub);
router.post('/addSubTematik', TematikController.addSubTematik);

module.exports = router;