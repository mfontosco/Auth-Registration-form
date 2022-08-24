import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.MONGODB_URI)
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import User from './Model/User.js'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'


const app = express()

const corsOptions ={
    origin:"*",
    optionsSuccessStatus:200
 }
app.use(cors())
app.use(morgan("dev"))
app.use(express.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/",(req,res)=>{
    res.redirect('/api/v1')
})
app.get("/api/v1",(req,res)=>{
    res.json({
        status:"success",
        message:"welcome to backend"
    })
})
app.post("/api/v1/signup",async(req,res)=>{
    const {name,email,password} =req.body
try{
    const user = await User.create({
        name,
        email,
        password,
    })
    res.json({
        status:"success",
        user
    })
    
}catch(err){
    console.log(err)
}

})

app.post("/api/v1/login",async(req,res)=>{
    const {name,email,password} =req.body
try{
    const user = await User.findOne({email:email})
    if(!user){
        throw Error("Email or password is incorrect")
    }
    res.json({
        status:"success",
        user,
        message:"user already exists"
    })
    
}catch(err){
    console.log(err)
    throw err
}

})



const start = async(PORT)=>{
    try{
        const conn =await connectDB()
    app.listen(PORT,(err)=>{
        if(err){
            throw err
        }
        console.log(`server is listening on Port ${PORT}`)
    })
    console.log(`database is connected to ${conn.connection.host}`)

    }catch(err){
        console.log(err)
    }
}
start(5002)

