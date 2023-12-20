let express = require('express')
let app = express()

let customer = require('./customer.js')



app.get('/',function(req,res){
    res.send("hellow  world iam entring from node js medhod wellcome me")
})

app.get("/home",function(req,res){
    res.send("This is a home page")
})

app.get("/about",function(req,res){
    res.send('this is about page')
})

app.get('/contact',function(req,res){
    res.send('This is contact page')
})



app.use('/customer',customer)
//app.use('/vender',vender)
//app.use('/staff',staff)
//app.use('/admin',admin)





app.listen(3000)


