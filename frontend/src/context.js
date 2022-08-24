import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const GlobalContext = React.createContext()

const Provider = (props) => {
    const navigate = useNavigate()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [data,setData] = useState({})
   
    const LoginHandler =async(e)=>{
        e.preventDefault()

    await Axios.post("http://localhost:5002/api/v1/login",{
            email,
            password
        })
       navigate("/welcome") 
     }  
const submitHandler = async(e)=>{
   e.preventDefault()

   console.log(password,email)
 await Axios.post("http://127.0.0.1:5002/api/v1/signup",{
       name,
       password:password,
       email:email,
    }).then(response => setData(response.data.user))
  setEmail("")
  setPassword("")
  navigate("/Login")
}

  const state ={
    password,
    email,
    name,
    setData,
    data,
    setEmail,
    setName,
    setPassword,
    submitHandler,
    LoginHandler
  }
   
return <GlobalContext.Provider value={state}>
        {props.children}
  </GlobalContext.Provider>
}
const consumer = GlobalContext.consumer
export { Provider,consumer}
export default GlobalContext