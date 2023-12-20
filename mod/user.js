const mongoose = requier("mangoose")


const userdata = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
    })
module.exports = mongoose.model("empdata", userdata)