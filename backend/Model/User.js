import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,required:[true,'Username is required']},
    email:{
        type:String,
        unique:true,required:[true,'email is required']},
    password:{
        type:String,
        required:[true,'password is required']}
},
{
    timestamp:true
})

const User = mongoose.model('User',userSchema)

export default User;