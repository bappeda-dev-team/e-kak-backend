const router = require('express').Router();
const OPDRouter = require('./opdRoutes');
const UserRouter = require('./userRoutes');
const UrusanRouter = require('./urusanRoutes');
const ProgramRouter = require('./programRoutes');
const TujuanOPDRouter = require('./tujuanOpdRoutes');
const TematikRouter = require('./tematikRoutes');
const PokinRouter = require('./pokinRoutes');
const PokinKotaRouter = require('./pokinKotaRoutes');

router.use('/opd', OPDRouter);
router.use('/user', UserRouter);
router.use('/urusan', UrusanRouter);
router.use('/program', ProgramRouter);
router.use('/tujuan_opd', TujuanOPDRouter);
router.use('/tematik', TematikRouter);
router.use('/pokin', PokinRouter);
router.use('/pokinKota', PokinKotaRouter);

module.exports = router;