// this is the blog model

mongoose = require('mongoose');
ObjectId = mongoose.Schema.Types.ObjectId;
Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title: {
        type: String,
        require: true
    }, 
    content: {
        type: String,
        require: true 
    },
    user: {
        type: OBjectId,
        ref: 'UserModel',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const BlogModel = mongoose.model('user', BlogSchema);

exports.schema = BlogSchema;

module.exports = BlogModel;

