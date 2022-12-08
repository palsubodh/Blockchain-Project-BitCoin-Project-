const express = require('express')
const { default: mongoose} = require('mongoose')

const route=require('./route/route')

const app= express()
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://palsubodh:Palsubodh@cluster0.mhegah9.mongodb.net/bitcoindata",{useNewUrlParser: true})
.then(() => console.log("MongoDb is Connected."))
.catch((error) => console.log(error));

app.use("/",route)

app.listen(3000,function(){
    console.log("Express is running on port 3000")
})
