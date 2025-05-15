const { Router } = require('express');
const router = Router();

router.use('/auth', require('./auth'));
// router.use('/events', require('./events'));
// router.use('/reservations', require('./reservations'));
// router.use('/venues', require('./venues'));

module.exports = router;
