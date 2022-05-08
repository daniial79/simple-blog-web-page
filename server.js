//core modules
const path = require('path')

//third party packages and libs
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//server configurations
const server = express();
const port = process.env.PORT;


//connect to database
const dbUri = process.env.DB_URI
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => server.listen(port, () => console.log(`server is live at port ${port}`)))
    .catch(error => console.log('something went wrong!'));


//serving statics
server.use(express.static(path.join(__dirname, 'public')));

//settig up templating engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

//data parsers
server.use(express.urlencoded({extended: true}));

//morgan logger midleware
server.use(morgan('dev'));

//importing route section
const mainPagesRouter = require('./routes/mainPages');
const blogsRouter = require('./routes/blogs');

//applying routes
server.use(mainPagesRouter);
server.use(blogsRouter);

//error handling
server.use('*', (req, res, next) => {
    res.render('404', {
        pageTitle: '404'
    });
});
