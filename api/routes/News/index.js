const express = require('express');
const router = express.Router();
const Joi = require('joi');

const ValidateMongoIdMiddleware = require('../../middlewares/ValidateMongoId');

const PostModel = require('../../models/Post');
const Post = require('../../entities/Post')({ Joi });

const GetPostRoute = require('./GetPosts')({ PostModel });
const AddPostRoute = require('./AddPost')({ PostModel, Post });
const MoveToArchiveRoute = require('./UpdatePost/MoveToArchive')({ PostModel });

router.get('/', GetPostRoute);
router.post('/', AddPostRoute);
router.put('/archive/:id', ValidateMongoIdMiddleware, MoveToArchiveRoute);

module.exports = router;