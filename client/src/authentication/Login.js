import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Login() {
    useEffect(()=>{
        axios.post('http://localhost:7005/api/login',{}).then(res=>{
            console.log("res.data",res.data)
        })
    },[])
  
  return (
    <div>Login
        <Link to='/' className='btn btn-warning'>GO BACK</Link>
    </div>
  )
}

export default Login