//third party packages and libs
const express = require('express')

//setting up the router
const router = express.Router();

//importing controller
const blogControllers = require('../controllers/blogs');

//routing section

//get all blogs and display them
router.get('/blogs', blogControllers.getAllBlogs);

//get creating a new blog page
router.get('/blogs/create', blogControllers.getCreateBlogPage);

//create a new blog (get request from /blogs/create from);
router.post('/blogs', blogControllers.postNewBlog);

//get specific blog content
router.get('/blogs/:blogId', blogControllers.getSpecificBlog);

//delete specific blog based on it's id
router.delete('/blogs/:blogId', blogControllers.deleteSpecificBlog);


//exporting section
module.exports = router;