import React,{useContext} from 'react'
import styles from './Signup.module.css'
import {Link}  from 'react-router-dom'
import GlobalContext  from '../../context'

const SignUp = () => {
    const store = useContext(GlobalContext)
    const {submitHandler,data,name,setEmail,setName,setPassword,email,password} = store
  return (
    <div className={styles.container}>
        <div className={styles.image}>
       
        </div>
        <div className={styles.formData}>
        
            <form onSubmit={submitHandler}>
            { data.name ? (<h2 className={styles.message}> Welcome {data.name},you have been successfully signed in</h2>) : null}
            <h1>USERS SIGNUP FORM</h1>
                <div className={styles.email}>
                 <label htmlFor='name'  className={styles.label}>Username</label>
                 <input type='text' placeholder='Enter your username' name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className={styles.email}>
                 <label htmlFor='email'  className={styles.label}>Email</label>
                 <input type='email' placeholder='Enter your email address' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className={styles.Password}>
                 <label htmlFor='password' className={styles.label}>Password</label>
                 <input type='password' placeholder='Enter your password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button type='submit'>create an account</button>
                <h3>Already have an account <Link to="/login">Login</Link></h3> 
            </form>
        </div>
    </div>
  )
}

export default SignUp