const express = require("express")
const app = express()
const formidable = require("express-formidable")
//const mongoose = require("mongoose")
const port = 3000
const mongoose = require('./config/database')

//const reg = require('./mod/user')

//app.use(formidable())


    app.post('/register', formidable(), function(req,res){
        let { firstName, lastName ,email ,password} =req.fields
        if (! (firstName && lastName && email && password)){
            res.status(400).send("check info u provided")
        }
        else {
            const data = reg.create({
                firstName: req.fields.firstName,
                lastName: req.fields.lastName,
                email: req.fields.email,
                password: req.fields.password,

            })
            res.json(data)
            //res.status(200).send("data is created")
        }
    })




    app.listen(port,console.log("server is running"))






//    const express = require("express")
//const app = express()
//const formidable = require("express-formidable")
//const mongoose = require("mongoose")
//const port = 3005
//app.listen(port, console.log("server running"))
//// require("./batabase/conn")

//mongoose.connect("mongodb://0.0.0.0:27017/sampledata")
//    .then(() => console.log("database is connected"))
//    .catch(() => console.log("database is not connected"))

//const userdata =new mongoose.Schema({
//    name: String,
//    adress: String,
//    email: String,
//})
//const reg= mongoose.model("empdata", userdata)

//app.post("/", formidable(), function (req, res) {
//    const name = req.fields
//    const adress = req.fields
//    const email = req.fields

//    if (!(name && adress && email)) {
//        res.status(400).send("check info u provided")
//    }
//    else {
//      const data= reg.create({
//            name: req.fields.name,
//            adress: req.fields.adress,
//            email: req.fields.email,
//        })
//        res.status(200).send("database created")
//    }
//}