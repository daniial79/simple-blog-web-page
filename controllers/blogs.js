//importing blog model
const Blog = require('../models/blog');

//send all blogs at index page and serve the index page
const getAllBlogs = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.status(200).render('index', {
                pageTitle: 'Home',
                blogs: result
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

//server create new blog page
const getCreateBlogPage = (req, res) => {
    res.status(200).render('create', {
        pageTitle: 'create a new blog'
    });
};

//creating new blog and add it to database, then redirect the user to index page
const postNewBlog = (req, res) => {
    const newBlog = new Blog(req.body);

    newBlog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(error => {
            console.log(error);
        });
};


//serve specific blog based on requesting endpoint 
const getSpecificBlog = (req, res) => {
    const blogId = req.params.blogId;
    Blog.findById(blogId)
        .then(result => {
            res.render('details', {
                blog: result, 
                pageTitle: 'Blog details'
            })
        })
        .catch(error => {
            
        })
};

//delete specific blog based on requesting endpoint
const deleteSpecificBlog = (req, res) => {
    const blogId = req.params.blogId;
    Blog.findByIdAndDelete(blogId)
        .then(result => {
            res.json({redirect: '/blogs'});
        })
        .catch(error => {
            console.log(error);
        });
};

//exporting section
module.exports = {
    getAllBlogs,
    getCreateBlogPage,
    postNewBlog,
    getSpecificBlog,
    deleteSpecificBlog
}