const router = require('express').Router();
const OPDRouter = require('./opdRoutes');
const UserRouter = require('./userRoutes');
const UrusanRouter = require('./urusanRoutes');
const ProgramRouter = require('./programRoutes');

router.use('/opd', OPDRouter);
router.use('/user', UserRouter);
router.use('/urusan', UrusanRouter);
router.use('/program', ProgramRouter);

module.exports = router;