const express = require('express');
const router = express.Router();

const ValidateMongoIdMiddleware = require('../../middlewares/ValidateMongoId');

const ArchiveModel = require('../../models/Archive');

const GetArchiveRoute = require('./GetArchive')({ ArchiveModel });
const RemoveArchiveRoute = require('./RemoveArchive')({ ArchiveModel });

router.get('/', GetArchiveRoute);
router.delete('/:id', ValidateMongoIdMiddleware, RemoveArchiveRoute);

module.exports = router;