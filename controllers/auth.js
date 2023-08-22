const UserSchema=require('../models/auth')
const login=async(req,res)=>{
console.log("login route")
res.send("login route")
}
const register=async(req,res)=>{
    console.log("register route")
    res.send("register route")  
}
module.exports = {login,register};