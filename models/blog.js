//third party packages and llibs
const mongoose = require('mongoose');

//setting up data schema
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }
},{
    timestamp: true
});

//setting up model
const Blog = mongoose.model('Blog', blogSchema);

//exporting section
module.exports = Blog;