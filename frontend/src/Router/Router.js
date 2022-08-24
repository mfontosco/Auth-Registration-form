import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignUp from '../Components/SignUp/SignUp'
import Login from '../Components/Login/Login'
import Welcome from '../Components/Welcome/Welcome'

const Router = () => {
  return (
    <div>
        <Routes>
<Route path='/' element={<SignUp/>}/>
<Route path='/login'  element={<Login/>}/>
<Route path='/welcome' element={<Welcome/>}/>
        </Routes>
    </div>
  )
}

export default Router