require('dotenv').config();
const {client} = require('./db')
const express = require('express')



const server = express();
const apiRouter = require('./api')
// const postsRouter = require('./api')
const morgan = require('morgan');

// server.use('/api',postsRouter)
server.use('/api', apiRouter)
server.use(morgan('dev'));
server.use(express.json())

PORT = 3000



server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
    next();//move on to the next middleware
})

client.connect();
server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});
















