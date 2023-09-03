// create web server
// 1. create web server
// 2. create router
// 3. create route
// 4. start server

// 1. create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 2. create router
const commentsRouter = require('./routes/comments');

// 3. create route
app.use('/comments', commentsRouter);

// 4. start server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

