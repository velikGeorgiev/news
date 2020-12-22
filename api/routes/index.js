const express = require('express');
const router = express.Router();

const newsRoute = require('./News');
const archiveRoute = require('./Archive');

router.use('/news', newsRoute);
router.use('/archive', archiveRoute);

module.exports = router;