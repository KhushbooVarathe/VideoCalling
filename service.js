var express = require('express')
const app = express()
require('./models/config')
const path=require('path')
const auth = require('./routes/auth')
var cors = require('cors')
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
    res.send(path.join(__dirname,'./client/build/index.html'))
})
app.use('/api',auth)
app.listen(7005,()=>{
    console.log("api running at port 7005")
})