// this is the user model 

mongoose = require('mongoose');
bcrypt = require('bcrypejs');
ObjectId = mongoose.Schema.Types.ObjectId;
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
    customerId: {
        type: String, 
        required: false
    },
    dateRegister: {
        type: Date, 
        default: Date.now(),
        index: true
    },
    store: [{
        type: ObjectId, 
        ref: 'StoreModel'
    }]
    
});

const UserModel = mongoose.model('user', UserSchema);


exports.schema = UserSchema;

module.exports = UserModel;
