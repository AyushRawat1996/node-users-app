const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: {
        type:String,
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    age: Number,
    phone: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);