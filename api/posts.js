const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');

postsRouter.use((req,res,next)=>{
    console.log('a request is being made to /posts');
    next();
})

postsRouter.get('/posts',async(req,res,next)=>{
    const posts = await getAllPosts();
    console.log(posts)
    res.send({
        posts
    });
});


module.exports = postsRouter;
