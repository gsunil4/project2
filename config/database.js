const mongoose = require("mongoose")

 mongoose.connect("mongodb://0.0.0.0:27017/sampledata")
        .then(() => console.log('mangodb is connected'))
        .catch(()=> console.log("mangodb is not connected"))

//exports.connect = () => {
//    mongoose.connect("mongodb://0.0.0.0:27017/sampledata")
//        .then(() => console.log('mangodb is connected'))
//        .catch(()=> console.log("mangodb is not connected"))
//}
