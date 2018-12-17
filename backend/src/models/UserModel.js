// this is the user model 

mongoose = require('mongoose');
Schema = mongoose.Schema;



const UserSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        lowercase: true,

    },
    email: {
        type: String, 
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        minlength: 6,
    },
    
});

const UserModel = mongoose.model('user', UserSchema);


exports.schema = UserSchema;

module.exports = UserModel;
