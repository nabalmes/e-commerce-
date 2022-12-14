const mongoose = require('mongoose');

//Users Model
const usersSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

exports.Users = mongoose.model('Users', usersSchema);
