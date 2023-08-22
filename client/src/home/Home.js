import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='d-flex container'>

    <Link className='btn btn-success' to='/login'>LOGIN</Link>
    <Link className='btn btn-danger' to='/register'>REGISTER</Link>
    </div>
    </>
  )
}

export default Home