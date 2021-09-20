const express = require('express');
const router = express.Router();

router.use('/orders', require('./orders'));
router.use('/products', require('./products'));
router.use('/projects', require('./projects'));
router.use('/users', require('./users'));

module.exports = router;