const express = require("express")
const app = express()
const formidable = require("express-formidable")
const mongoose = require("mongoose")
let customer = require('./customer.js')
const bcrypt = require('bcrypt');





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

app.post("/register", formidable(), async function (req, res) {
    let { firstName, lastName ,email ,password} =req.fields

    if (! (firstName && lastName && email && password)){
        res.status(400).send("check info u provided")
    }
    else { 
        if (await reg.findOne({email})){
            res.send('you have already registered')
        }
        else {
            let enc_password = await bcrypt.hash(password, 9)
            const data = await reg.create({
                firstName: req.fields.firstName,
                lastName: req.fields.lastName,
                email: req.fields.email,
                password: enc_password,
            })
            res.json(data)
            //res.status(200).send("database created")
        }
    }
})



app.listen(3000,()=>{console.log('connected on 3000 Port')})