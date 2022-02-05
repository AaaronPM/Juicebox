const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');

postsRouter.use((req,res,next)=>{
    console.log('a request is being made to /posts');
    next();
})

postsRouter.get('/',async(req,res,next)=>{
    const posts = await getAllPosts();
    // console.log('xxxxxxx')
    // console.log(posts)
    // console.log('zzzzzzzzz')
    res.send({
        posts
    });
});


module.exports = postsRouter;
