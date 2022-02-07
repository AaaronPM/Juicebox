const express = require('express');

const apiRouter = express.Router();
const usersRouter = require('./users');
const postsRouter = require('./posts');
const tagsRouter = require('./tags')

apiRouter.use('/users', usersRouter);
apiRouter.use('/posts',postsRouter);
apiRouter.use('/tags',tagsRouter)
module.exports = apiRouter;

//use the router function to create a new router and then export it