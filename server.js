//core modules
const path = require('path')

//third party packages and libs
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//server configurations
const server = express();
const port = Number(process.env.PORT) || 5000;
const hostName = process.env.SERVER_HOST || '127.0.0.1';

//connect to database
const dbUri = 'mongodb+srv://<username>:<password>@practicenode.qfrfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => server.listen(port, hostName, () => console.log(`server is live at http://${hostName}:${port} baseUrl`)))
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
