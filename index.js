const express = require("express")
const app = express()
const formidable = require("express-formidable")
const mongoose = require("mongoose")
const port = 3000
app.listen(port, console.log("server running"))
// require("./batabase/conn")

mongoose.connect("mongodb://0.0.0.0:27017/student")
    .then(() => console.log("database is connected"))
    .catch(() => console.log("database is not connected"))

const userdata =new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})
const reg= mongoose.model("empdata", userdata)

app.post("/register", formidable(), function (req, res) {
    let { firstName, lastName ,email ,password} =req.fields

    if (! (firstName && lastName && email && password)){
        res.status(400).send("check info u provided")
    }
    else {
      const data= reg.create({
        firstName: req.fields.firstName,
        lastName: req.fields.lastName,
        email: req.fields.email,
        password: req.fields.password,
        })
        res.status(200).send("database created")
    }
})