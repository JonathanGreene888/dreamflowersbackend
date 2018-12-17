// this is the blog model

mongoose = require('mongoose');
Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title: {
        type: String,
        require: true
    }, 
    content: {
        type: String,
        require: true 
    }
});

const BlogModel = mongoose.model('user', BlogSchema);

exports.schema = BlogSchema;

module.exports = BlogModel;

