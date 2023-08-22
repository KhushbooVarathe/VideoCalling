var express = require('express')
// const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const {login,register} = require('../controllers/auth');
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.post('/login',login)
app.post('/register',register)
module.exports = app