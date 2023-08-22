var express = require('express')
const app = express()
require('./models/config')
const path=require('path')
const auth = require('./routes/auth')
// const cong=require('../Deploy/client/build/')
var cors = require('cors')
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '../Deploy/client/build')));

// If a request doesn't match any static file, serve the "index.html" file
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../Deploy/client/build/index.html'));
});
app.use('/api',auth)
app.listen(7005,()=>{
    console.log("api running at port 7005")
})