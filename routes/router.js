const express = require('express');
const router = express.Router();
const hdc = require('../controller/hdController');

router.get('/', hdc.main);
router.get('/abc', hdc.abc)
router.get('/def', hdc.def);
router.get('/ghi', hdc.ghi);
router.get('/jkl', hdc.jkl);


module.exports = router;
