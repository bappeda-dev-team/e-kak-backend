const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const UserController = require('../controllers/userController');

router.post('/login', UserController.login);
router.use(authenticate);
router.get('/getProfile', UserController.getProfile);
router.get('/getUser/:nip', UserController.getOneUser);

module.exports = router;