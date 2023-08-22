import axios from 'axios'
import React, { useEffect } from 'react'

function Register() {
useEffect(()=>{
    axios.post('http://localhost:7005/api/register',{}).then(res=>{
        console.log(res.data,"response register")
    })
},[])
   
  return (
    <div>Register</div>
  )
}

export default Register