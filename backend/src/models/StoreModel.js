mongoose = require('mongoose');

Schema = mongoose.Schema; 



const StoreSchema = new Schema ({
    itemname: {
        type: String,
        unique: true,
        lowercase: true,

    },
    price: {
        type: number,
    },
    itemId: {
        type: String, 
        required: false
    }
});

const StoreModel = mongoose.model('store', StoreSchema);

exports.Schema = StoreSchema;

module.exports = StoreModel;