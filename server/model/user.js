const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    Email:String,
    Age: Number,
});

const userModel = mongoose.model("users",UserSchema);

module.exports = {
    userModel
}