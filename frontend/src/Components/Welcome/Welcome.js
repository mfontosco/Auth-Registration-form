import React,{useContext} from 'react'
import GlobalContext from '../../context'
import styles from './Welcome.module.css'

const Welcome = () => {
    const store = useContext(GlobalContext)
    const {data} = store
    console.log(data)
  return (
    <div className={styles.container}>
       {data.name ? <h1>Welcome {data.name} you have successfully login</h1> : <h1>Login Successful</h1>}
    </div>
  )
}

export default Welcome