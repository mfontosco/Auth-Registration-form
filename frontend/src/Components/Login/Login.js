import React ,{useContext}from 'react'
import styles from './Login.module.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import GlobalContext  from '../../context'

const Login = () => {
    const store = useContext(GlobalContext)
    const {LoginHandler,setEmail,setPassword,email,password} = store
    

    
  return (
    <div className={styles.container}>
        <div className={styles.image}>
       
       </div>
       <div className={styles.formData}>
       
           <form  onSubmit={LoginHandler}>
           <h1>USERS LOGIN FORM</h1>
               <div className={styles.email}>
                <label htmlFor='email'  className={styles.label}>Email</label>
                <input type='email' placeholder='Enter your email address' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div className={styles.Password}>
                <label htmlFor='password' className={styles.label}>Password</label>
                <input type='password' placeholder='Enter your password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
               </div>
               <button type='submit'>Login</button>
               <h3>Don't have an account ? <Link to='/'>Signup</Link></h3>
           </form>
       </div>
    </div>
  )
}

export default Login